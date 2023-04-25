
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import BaseUrl from '../../util/BaseUrl';
import { CloseCircleOutlined, DeleteOutlined,MinusCircleOutlined,CheckOutlined ,CloseOutlined,RollbackOutlined} from "@ant-design/icons";
import { PlusOutlined } from '@ant-design/icons';
import { Button, Table, Modal, Input, Space, Select, Upload, Form, Radio, Col, Row, InputNumber, Dropdown, Badge, Spin } from "antd";
import { storage} from '../../firebase';
import TextArea from 'antd/es/input/TextArea';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import CreateTourPage from './CreateTourPage';
import TourInvoice from '../../components/seller/TourInvoice';
import TinhTrangHoaDon from '../../components/seller/TinhTrangHoaDon';
import { Link } from 'react-router-dom';
const { Option } = Select;

function ListInvoice() {
    const [xuly,setXuLy]=useState(false);
    const [lable,setLable]=useState("Đang xử lý...")
    const [loading,setLoading] =useState(true);
    const [invoices,setInvoices] =useState([])
    const [tours, setTours] = useState([]);
    const [type,settype]=useState('0');
    const columns = [
        {
          title: 'Thông tin người đặt',
          render: (record) => {
            return (
               <>
               Họ tên: {record.fullName}<br/>
               Email: {record.email}<br/>
               SĐT: {record.phone}<br/>
               </>
            );},
            width:"20%",
            ellipsis: true,
        },
        
        {
          title: 'Thông tin tour',
          key:"tour",
          render: (record) => {
            return (
               <TourInvoice key={record.id} id={record.idSchedule}/>
            );
          }  ,
          width:'18%',
          ellipsis: true,
        }, 
        {
            title: 'Chi tiết đặt tour',
            render: (record) => {
              return (
                 <>
                 Ngày đặt: {record.dateInvoice}<br/>
                 Số người: {record.people}<br/>
                 Tổng tiền: {new Intl.NumberFormat("vi-VN", {
                 style: "currency",
                 currency: "VND",
                   }).format(record.amount)}<br/>
                 </>
              );
            }
        }
        ,
        {
          title: 'Tình trạng',
          render: (record) => {
            return (
              <>
              {record.status==2?<>
              <Badge status='success' text="Đã thanh toán"/> <br/>
              Hình thức: {record.payments}<br/>
              Ngày: {record.payDay}
              </>:record.status==3?<><Badge status='error' text="Đã hủy"/></>:
              <><Badge status='processing' text="Chưa thanh toán"/></>}
              </>
              //  <TinhTrangHoaDon key={record.id} id={record.idSchedule} type={type}/>
            );
          }  ,
          key:'tinhtrang',
          ellipsis: true,
        },
      
        {
          title: 'Chi tiết',
          key:'10',
          render: (record) => {
            return (
              <Button key={record.id} onClick={()=>{}}>Xem</Button>
            )},
           
            ellipsis: false,
            width:"7%"
        },
        
        {
            key: "5",
            title: "Hành động",
            render: (record) => {
              return  type=="0"?
                <>
                   <Space size={3}><Button key={record.id} type='primary' onClick={()=>{xacnhan(record.id)}}>Xác nhận</Button></Space>
                </>
              :type=="1"?<>
              <Space size={1} direction='vertical'>
                   <Button onClick={()=>{thanhtoan(record.id)}} style={{backgroundColor:'yellowgreen'}} type='primary'>Thanh toán</Button>
                   <Button onClick={()=>{changeStatus(record.id,0)}} >Đơn mới</Button>
              </Space>
              </>:
              type=="2"?<>
                <Button onClick={()=>{changeStatus(record.id,1)}}>Chưa thanh toán</Button>
              </>:
              <><Button onClick={()=>{xoa(record.id)}} style={{backgroundColor:'orangered'}}>Xóa</Button></>
            },
            width:"13%"
        },
        {
          title: 'Hủy đơn',
          key:'ds',
          render: (record) => {
            return (
              <>
              {record.status!=3?<CloseCircleOutlined style={{fontSize:20}}  onClick={()=>{huy(record.id)}}/>:<>Đã hủy</>
          }</>
            )},
            width:"5%"
        },
      ];  
      const onChangeType=(type)=>{
            settype(type);
            fetchData(type);
        } 
    
    const changeStatus=async (id,status)=>{
      setLable("Đang xử lý...")
      setXuLy(true)
      if(window.confirm("Xác nhận")){
        try {  
            const xn = await axios.put(BaseUrl+'invoice/updatestatus/'+id+'/'+status)
            fetchData(type)
            toast.success(xn?.data)
            setXuLy(false)
          } catch (error) {
            console.error(error);
          }
        }
    }
    
    const xacnhan=async(id)=>{
      setLable("Đang xác nhận...")
      setXuLy(true)
        try {  
            const xn = await axios.put(BaseUrl+'invoice/xacnhan/'+id)
            fetchData(type)
            toast.success(xn?.data)
            setXuLy(false)
          } catch (error) {
            console.error(error);
          }
    }
    const huy=async(id)=>{
      setLable("Đang hủy...")
      setXuLy(true)
      if(window.confirm("Xác nhận hủy")){
      try {  
          const xn = await axios.put(BaseUrl+'invoice/huy/'+id+'?lyDo=quá hạn')
          fetchData(type)
          toast.success(xn?.data)
          setXuLy(false)
        } catch (error) {
          console.error(error);
        }
      }
  }
  const thanhtoan=async(id)=>{
    setLable("Đang thanh toán...")
    setXuLy(true)
    try {  
        const xn = await axios.put(BaseUrl+'invoice/thanhtoan/'+id+'?nhanVien=Tran Van A')
        fetchData(type)
        toast.success(xn?.data)
        setXuLy(false)
      } catch (error) {
        console.error(error);
      }
    }
    const xoa=async(id)=>{
      setLable("Đang xóa...")
      setXuLy(true)
      if(window.confirm("Xác nhận xóa")){
      try {  
          const xoa= await axios.delete(BaseUrl+'invoice/'+id)
          fetchData(type)
          toast.success(xoa?.data)
          setXuLy(false)
        } catch (error) {
          console.error(error);
        }
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
    <Spin tip={lable} size="large" spinning={xuly} >
      <Table rowKey={invoices.id} columns={columns} dataSource={invoices} loading={loading}/> 
    </Spin>
    </>
    )
}

export default ListInvoice