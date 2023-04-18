
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import BaseUrl from '../../util/BaseUrl';
import { EditOutlined, DeleteOutlined,MinusCircleOutlined,CheckOutlined ,CloseOutlined,RollbackOutlined} from "@ant-design/icons";
import { PlusOutlined } from '@ant-design/icons';
import { Button, Table, Modal, Input, Space, Select, Upload, Form, Radio, Col, Row, InputNumber, Dropdown } from "antd";
import { storage} from '../../firebase';
import TextArea from 'antd/es/input/TextArea';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import CreateTourPage from './CreateTourPage';
import TourInvoice from '../../components/seller/TourInvoice';
const { Option } = Select;

function ListInvoice() {
    const [loading,setLoading] =useState(true);
    const [invoices,setInvoices] =useState([])
    const [tours, setTours] = useState([]);
    const [type,settype]=useState('0');
    const columns = [
        {
          title: 'Họ tên',
          dataIndex: 'fullName',
          width: '10%',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          width:150,
          ellipsis: true,
        }
        ,
        {
            title: 'SĐT',
            dataIndex: 'phone',
        }
        ,
        {
          title: 'Tour',
          render: (record) => {
            return (
               <TourInvoice id={record.idSchedule}/>
            );
          }  ,
          width:'20%'
        }, 
        {
            title: 'Số người',
            dataIndex: 'people',
            width:72
        }
        ,
        
        {
            title: 'Ngày đặt',
            dataIndex: 'dateInvoice',
        },

        {
            title: 'Tổng tiền',
            render: (record) => {
                return (
                    <>
                    {new Intl.NumberFormat("vi-VN", {
                 style: "currency",
                 currency: "VND",
                   }).format(record.amount)}
                   </>
                );
              }  
          },
      
        {
          title: 'Chi tiết',
          key:'10',
          render: (record) => {
            return (
              <Button onClick={()=>{}}>Xem</Button>
            )},
           
            ellipsis: false,

        },
        
        {
            key: "5",
            title: "Hành động",
            render: (record) => {
              return  type=="0"?
                <>
                   <Button style={{}} onClick={()=>{xacnhan(record.id)}}>Xác nhận</Button>
                   <Button onClick={()=>{}}><CloseOutlined /></Button>
                </>
              :type=="1"?<>
                   <Button onClick={()=>{}}>Thanh toán</Button>
                   <Button onClick={()=>{}}><RollbackOutlined /></Button>
                   <Button onClick={()=>{}}><CloseOutlined /></Button>
              </>:
              type=="2"?<>
                <Button onClick={()=>{}}><RollbackOutlined /></Button>
                <Button onClick={()=>{}}><CloseOutlined/></Button>
              </>:
              <></>
            },
        },
      ];  
      const onChangeType=(type)=>{
            settype(type);
            fetchData(type);
        } 

    const xacnhan=async(id)=>{
        try {  
            const invoice = await axios.put(BaseUrl+'invoice/updatestatus/'+id+'/1')
            fetchData(type)
            toast.success("Xác nhận thành công")
          } catch (error) {
            console.error(error);
          }
    }
    
   
    const  deleteHandle= async(id)=>{
        if(window.confirm("Xác nhận xóa")){
        const xoa = await axios.delete(BaseUrl+'tour/'+id)
        fetchData()
        toast.success(xoa?.data);
        }  
      }
    
    async function fetchData(type) {
      try {  
        const invoice = await axios.get(BaseUrl+'invoice/'+type)
        setInvoices(invoice?.data)
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => {
      fetchData(type);
    }, [tours]);
    
    return (
    <>
    <Row style={{marginBottom:10}}>Chọn hóa đơn
    <Select
      value={type}
      onChange={(value)=>{onChangeType(value)}}
      style={{
        width: 160,
      }}
      options={[
        {
          value: '0',
          label: 'Hóa đơn mới',
        },
        {
            value: '1',
            label: 'Chưa thanh toán',
        },
        {
            value: '2',
            label: 'Đã thanh toán',
        },
        {
            value: '3',
            label: 'Đã hủy',
        },
      ]}
    />
    </Row>
    <Row>
        <Col><h2 style={{fontSize:30}}>Danh sách hóa đơn {type==0?"mới":type==1?"chưa thanh toán":type==2?"đã thanh toán":"đã hủy"}</h2></Col>
    </Row>
    
      <Table rowKey={invoices.id} columns={columns} dataSource={invoices} loading={loading}/> 
      
      </>
    )
}

export default ListInvoice