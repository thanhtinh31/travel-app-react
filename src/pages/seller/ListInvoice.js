
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
import TinhTrangHoaDon from '../../components/seller/TinhTrangHoaDon';
const { Option } = Select;

function ListInvoice() {
    const [loading,setLoading] =useState(true);
    const [invoices,setInvoices] =useState([])
    const [tours, setTours] = useState([]);
    const [type,settype]=useState('0');
    const columns = [
        {
          title: 'Họ tên',
          key:'title',
          dataIndex: 'fullName',
          width: '7%',
        },
        {
          title: 'Email',
          key:'email',
          dataIndex: 'email',
          width:120,
          ellipsis: true,
        }
        ,
        {
            title: 'SĐT',
            key:'phone',
            dataIndex: 'phone',
        }
        ,
        {
          title: 'Tour',
          key:"tour",
          render: (record) => {
            return (
               <TourInvoice key={record.id} id={record.idSchedule}/>
            );
          }  ,
          width:'18%'
        }, 
        {
            title: 'Số người',
            dataIndex: 'people',
            key:'people',
            width:72
        }
        ,
        
        {
            title: 'Ngày đặt',
            dataIndex: 'dateInvoice',
            key:'dateInvoice',
        },

        {
            title: 'Tổng tiền',
            key:'tongtien',
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
          title: 'Tình trạng',
          render: (record) => {
            return (
               <TinhTrangHoaDon key={record.id} id={record.idSchedule} type={type}/>
            );
          }  ,
          key:'tinhtrang'
        },
      
        {
          title: 'Chi tiết',
          key:'10',
          render: (record) => {
            return (
              <Button key={record.id} onClick={()=>{}}>Xem</Button>
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
    }, [tours,type]);
    
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