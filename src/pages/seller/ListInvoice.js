
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import BaseUrl from '../../util/BaseUrl';
import { CloseCircleOutlined,MailOutlined,PhoneOutlined,UserOutlined} from "@ant-design/icons";
import { Button, Table, Modal, Input, Space, Select, Upload, Form, Radio, Col, Row, InputNumber, Dropdown, Badge, Spin, Drawer } from "antd";
import TourInvoice from '../../components/seller/TourInvoice';
import TinhTrangHoaDon from '../../components/seller/TinhTrangHoaDon';
import DetailInvoice from '../../components/user/DetailInvoice';


function ListInvoice() {
    const [xuly,setXuLy]=useState(false);
    const [opentt,setOpentt]=useState(false);
    const [lable,setLable]=useState("Đang xử lý...")
    const [loading,setLoading] =useState(true);
    const [invoices,setInvoices] =useState([])
    const [tours, setTours] = useState([]);
    const [type,settype]=useState('0');
    const [open,setOpen]=useState(false);
    const [id,setId]=useState();
    const [nv,setNhanVien]=useState("");
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
          width:'20%',
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
                   Ghi chú:<span style={{color:'red'}}>{record.note?record.note:"..."}</span>
                 </>
              );
            },
            width:"17%"
        }
        ,
        {
          title: 'Tình trạng',
          render: (record) => {
            return (
              <>
              {record.status==2?<>
              <Badge status='success' text="Đã thanh toán"/> <br/>
              TT {record.payments}<br/>
              Ngày: {record.payDay}
              </>:<></>}
                <TinhTrangHoaDon key={record.id} id={record.idSchedule} type={type}/>
                {record.status==3?record.payDay?record.confirm==false?<><span style={{color:'red'}}>Chưa xử lý</span></>:<><span style={{color:'green'}}>Đã hoàn tiền</span></>:<></>:<></>}
              </>
              
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
              <Button key={record.id} onClick={()=>{setId(record.id);setOpen(true)}}>Xem</Button>
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
                   <Button onClick={()=>{setId(record.id); setOpentt(true)}} style={{backgroundColor:'yellowgreen'}} type='primary'>Thanh toán</Button>
                   <Button onClick={()=>{changeStatus(record.id,0)}} >Đơn mới</Button>
              </Space>
              </>:
              type=="2"?<>
                <Button onClick={()=>{changeStatus(record.id,1)}}>Chưa thanh toán</Button>
              </>:
              <><Button onClick={()=>{xoa(record.id)}} style={{backgroundColor:'orangered'}}>Xóa</Button>
              </>
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
    const xacnhantatca=async()=>{
      setLable("Đang xác nhận...")
      setXuLy(true)
        try {  
            const xn = await axios.put(BaseUrl+'invoice/xacnhantatca/'+selected)
            fetchData(type)
            toast.success(xn?.data.message)
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
  const thanhtoan=async(id)=>{
    setLable("Đang thanh toán...")
    setXuLy(true)
    try {  
        const xn = await axios.put(BaseUrl+'invoice/thanhtoan/'+id+'?nhanVien='+nv)
        fetchData(type)
        toast.success(xn?.data)
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
    const [selected,setSelect]=useState([])
    const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    setSelect(selectedRowKeys);
    console.log(selectedRowKeys);
  },
  getCheckboxProps: (record) => ({
    disabled: record.id === 'Disabled User',
    name: record.id,
  }),
};
const xuLyHoanTien=async()=>{
  setLable("Đang xử lý...");
  setXuLy(true)
  try {  
    const xoa= await axios.put(BaseUrl+'invoice/xuly/'+selected)
    fetchData(type)
    toast.success(xoa?.data.message)
    setXuLy(false)
  } catch (error) {
    console.error(error);
  }

}
const xuLyXoa=()=>{

}

    
    async function fetchData(type) {
      try {  
        const invoice = await axios.get(BaseUrl+'invoice/'+type)
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
        {selected!=null&&selected.length!=0?type==3?<>
        <Col push={11}><Button style={{backgroundColor:'greenyellow'}} onClick={()=>{xuLyHoanTien()}}>Xử lý - hoàn tiền</Button></Col>
        <Col push={11}><Button style={{backgroundColor:'red'}} onClick={()=>{xuLyXoa()}}>Xóa</Button></Col>
        </>:type==0?<>
        <Col push={16}><Button type='primary' onClick={()=>{xacnhantatca()}}>Xác nhận</Button></Col>
        </>:<></>:<></>}
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
    <Drawer title="Thanh toán hoán đơn" placement="right" onClose={()=>{setOpentt(false)}} open={opentt}>
        <p>Nhân viên thanh toán</p>
        <Input value={nv} onChange={(e)=>{setNhanVien(e.target.value)}}></Input>
        <Button onClick={()=>{thanhtoan(id)}}>Xác nhận thanh toán</Button>
      </Drawer>
    </>
    )
}

export default ListInvoice