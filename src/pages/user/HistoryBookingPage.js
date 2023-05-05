import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import BaseUrl from '../../util/BaseUrl';
import { CloseCircleOutlined,MailOutlined,PhoneOutlined,UserOutlined} from "@ant-design/icons";
import { Button, Table, Modal, Input, Space, Select, Upload, Form, Radio, Col, Row, InputNumber, Dropdown, Badge, Spin } from "antd";
import TourInvoice from '../../components/seller/TourInvoice';
import TinhTrangHoaDon from '../../components/seller/TinhTrangHoaDon';
import CountDown from '../../components/user/CountDown';
import DetailInvoice from '../../components/user/DetailInvoice';
function HistoryBookingPage() {
  const idAccount=sessionStorage.getItem('user');
  const [xuly,setXuLy]=useState(false);
  const [lable,setLable]=useState("Đang xử lý...")
  const [loading,setLoading] =useState(true);
  const [invoices,setInvoices] =useState([])
  const [tours, setTours] = useState([]);
  const [type,settype]=useState('0');
  const [open,setOpen]=useState(false);
  const [id,setId]=useState();
  const columns = [
      {
        title: 'Thông tin người đặt',
        render: (record) => {
          return (
             <>
             <UserOutlined style={{fontSize:20}} /> {record.fullName}<br/>
               <MailOutlined  style={{fontSize:20}} /> {record.email}<br/>
               <PhoneOutlined style={{fontSize:20}} /> {record.phone}<br/>
             </>
          );},
          width:"17%",
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
        key:'tour',
        width:'25%',
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
          },
          ellipsis: false,
          width:"16%"
        
      },
      {
        title: 'Ghi chú',
        render: (record) => {
          return (
            <>
            {record.note?record.note:"..."}
            </>
          );
        }  ,
        key:'note',
        ellipsis: true,
      }
      ,
      {
        title: 'Tình trạng',
        render: (record) => {
          const a=new Date(record.payDay)
          return (
            <>
            <TinhTrangHoaDon key={record.id} id={record.idSchedule} type={type}/>
            {record.status==2?<>
            TT:{record.payments}<br/>
            Time: {a.getHours()}h{a.getMinutes()}p--{a.getDate()}/{a.getMonth()+1}/{a.getFullYear()}
            </>:<></>}
            </>
          );
        }  ,
        key:'tinhtrang',
        ellipsis: false,
        width:'17%'
      },
      
      {
        title: 'Hành động',
        key:'10',
        render: (record) => {
          return (
            <>
             <Space size={1} direction='vertical'>
             <Button key={record.id} onClick={()=>{setId(record.id);setOpen(true)}}>Xem</Button>
                  {type==="1"?
                  <Button onClick={()=>{thanhtoan(record)}} style={{backgroundColor:'yellowgreen'}} type='primary'>Thanh toán</Button>:<></>}
              </Space>
            </>
          )},
         
          ellipsis: false,
          width:"10%"
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
    
    if(window.confirm("Xác nhận")){
      try {  
        setLable("Đang xử lý...")
    setXuLy(true)
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
    
    if(window.confirm("Xác nhận hủy")){
    try {  
      setLable("Đang hủy...")
      setXuLy(true)
        const xn = await axios.put(BaseUrl+'invoice/huy/'+id+'?lyDo=quá hạn')
        fetchData(type)
        toast.success(xn?.data)
        setXuLy(false)
      } catch (error) {
        console.error(error);
        setXuLy(false)
      }
    }
}
const thanhtoan=async(invoice)=>{
  setLable("Đang xử lý...")
  setXuLy(true)
  try {  
    const pay= await axios.post(BaseUrl+'pay/paypal', invoice);
    setLoading(false)
    window.location=pay?.data;
      fetchData(type)
      setXuLy(false)
    } catch (error) {
      console.error(error);
      setXuLy(false)
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
  const rowSelection = {
onChange: (selectedRowKeys, selectedRows) => {
  console.log(selectedRowKeys);
},
getCheckboxProps: (record) => ({
  disabled: record.id === 'Disabled User',
  name: record.id,
}),
};

  
  async function fetchData(type) {
    try {  
      const invoice = await axios.get(BaseUrl+'invoice/idstatus/'+idAccount+"/"+type)
      let arr=invoice?.data;
      arr.map((item)=>{
        Object.assign(item,{key:item.id})
      })
      setInvoices(arr)
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData(type);
  }, [tours,type,id]);
  
  return (
  <>
  <div className="flex mt-24">
  <div className="absolute md:relative">
    <Row><h2 style={{fontSize:30}}>LỊCH SỬ ĐẶT TOUR</h2></Row>
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
      <Col><h2 style={{fontSize:25}}>Danh sách hóa đơn {type==0?"mới":type==1?"chưa thanh toán":type==2?"đã thanh toán":"đã hủy"}</h2></Col>
  </Row>
  <Spin tip={lable} size="large" spinning={xuly} >
    <Table rowSelection={{
        type: 'checkbox',
        ...rowSelection,
      }} columns={columns} dataSource={invoices} loading={loading} /> 
      <Modal
        title={"Chi tiết hóa đơn"}
        footer={null}
        okText=''
        cancelText='Thoát'
        okType='ghost'
        centered
        open={open}
        // onOk={handSubmit}
        onCancel={() => setOpen(false)}
        width={700}   
      >         
      <DetailInvoice id={id}/>
      </Modal>
  </Spin>
  </div>
  </div>
  </>
  )
}

export default HistoryBookingPage