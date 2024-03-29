import axios from 'axios';
import React, { useEffect, useState } from 'react'

import BaseUrl from '../../util/BaseUrl';

import { Table, Select, Switch, Avatar, Button, Row, Col, Drawer, Input, message } from "antd";
import DetailPeople from '../../components/seller/DetailPeople';
import DetailTour from '../../components/seller/DetailTour';
import { toast } from 'react-toastify';
import { DeleteOutline } from '@mui/icons-material';
import CountDown from '../../components/user/CountDown';
import { CalendarOutlined, CarOutlined, StarTwoTone,CloseOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';


function ChotTourPage() {
    const [loading,setLoading] =useState(true);
    const [schedule, setSchedules] = useState([]);
    const [loadingstatus,setLoadingStatus]=useState(false);
    const [loai,setLoai] =useState("0");
    const [id,setId]=useState("");
    const [open,setOpen]=useState(false);
    const [lydo,setLydo]=useState("");
    const columns = [
        {
          title: 'Tour',
          render: (record) => {
            return (
              <>
              <DetailTour idTour={record.idTour}/>
              </>
            )},
            width:"20%",
          ellipsis: true,
        },
        {
          title: 'Hướng dẫn viên',
          render: (record) => {
            return (
              <>
              {record.tourGuide}<br/>
              {record.phone}

              </>
            )},
          
          width:"12%"
        },
        {
            title: 'Xuất phát',
            render: (record) => {
              return (
                <><Row> <Col>
                <CalendarOutlined style={{fontSize:18}} />{"        "+record.dayStart}<br/>
                <CarOutlined style={{fontSize:18}}/>{"       "+record.addressStart}
                </Col>
                <Col push={4}>
                  <CountDown dayStart={record.dayStart}/>
                </Col>
                </Row>
                </>
              )},
              width:"25%"
        },
        {
          title: 'Số lượng người',
          render: (record) => {
            return (
              <>
              <DetailPeople idSchedule={record.id}/>
              </>
            )},
            width:"15%"
        },
        {
          title: 'Dự kiến',
          dataIndex: 'expectedPeople',
          width:"5%"
        },
        
        {
          title: 'Loại tour',
          render: (record) => {
            return (
              <>
              {record.type==="HT"?"Hệ thống":record.type==="YC"?"Yêu cầu":""}
              </>
            )},
            width:"8%"
        },

        {
          title: 'Thao tác',
          render: (record) => {
            return (
                <>
             
              {record.progress==0?<><Button onClick={()=>{changeProgress(record.id,1)}}> Chốt tour</Button> </>:<></>}
              {record.progress==1?
              <Button onClick={()=>{changeProgress(record.id,0)}} style={{color:'blueviolet'}}> Mở đặt</Button>:<></>}
              {record.progress==1?
              <Button onClick={()=>{changeProgress(record.id,2)}} style={{color:'blueviolet'}}> Xuất phát</Button>:<></>}
              {record.progress==2?
              <Button onClick={()=>{changeProgress(record.id,3)}} style={{color:'blueviolet'}}> Hoàn thành</Button>:<></>}
              </>
            )},
            width:"8%"
        },
        {
          title: 'Hủy',
        
          render: (record) => {
            return (
              <>
              {loai==="0"||loai==="1"?
              <CloseOutlined onClick={()=>{setId(record.id);setOpen(true)}} />:<></>}
              </>
            )},
          width:"5%"
        },
    ];   
    const changeProgress=async(id,progress)=>{
      if(window.confirm("Xác nhận")){
        try {  
          const del = await axios.put(BaseUrl+'schedule/changeprogress/'+id+'/'+progress)
          message.success('Thành công !')
          fetchData(loai);

        } catch (error) {
          console.error(error);
        }
      }

    }
    const deleteHandle= async(id)=>{
      if(window.confirm("Xác nhận xóa")){
      try {  
        const del = await axios.delete(BaseUrl+'schedule/'+id)
        if(del?.data.status=="0")
        toast.error(del?.data.message);
        else{
          fetchData(loai)
          toast.success(del?.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    }

    }
    const handleHuyTour =async(id)=>{
      if(lydo==null||lydo==="") toast.warning("Vui lòng nhập lý do"); else 
      try {  
        const stt= await axios.put(BaseUrl+'schedule/huytour/'+id+'/'+lydo)
        if(stt?.data.status==="1"){
        fetchData(loai)
        toast.success("Hủy tour thành công");
        setOpen(false)
        }
        else toast.error("Không thành công");
      } catch (error) {
        console.error(error);
      }
    }
    const handleChange = async (id,status) => {
        let reg={status,id}
        try {  
            const stt= await axios.put(BaseUrl+'schedule/changestatus',reg)
            status==false?
            toast.success("Chốt tour thành công"):toast.success("Mở đặt tour thành công")
        } catch (error) {
            console.error(error);
          }
          fetchData(loai)
      };
    const onChange = async (checked,id) => {
    
      };   
    async function fetchData(loai) {
      try {  
        setLoading(true)
        const account= await axios.get(BaseUrl+'schedule/progress/'+loai)
        setSchedules(account.data)
        console.log(account.data)
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    }
    useState(() => {
      fetchData(loai);
    }, []);
    
     
    return <>
    <Select
      value={loai}
      onChange={(value)=>{setLoai(value);fetchData(value)}}
       options={[
        {
          value: "0",
          label: 'Chưa chốt',
        },
        {
          value: "1",
          label: 'Đã chốt',
        },
        {
          value: "2",
          label: 'Đang khởi hành',
        },
        {
            value: "3",
            label: 'Đã hoàn thành',
        },
        {
          value: "4",
          label: 'Đã hủy',
      },
      ]}>
        
      </Select>
    <h1>Danh sách lịch trình  {loai==="0"?"Đang mở đặt":loai==="1"?"Đã chốt":loai==="2"?"Đang khởi hành":loai==="3"?"Đã hoàn thành":"Đã hủy"}</h1>
      <Table rowKey={schedule.idSchedule} columns={columns} dataSource={schedule} loading={loading}/> 
      <Drawer title="Hủy Tour" placement="right" onClose={()=>{setOpen(false)}} open={open}>
        <p>{id}</p>
        Nhập lý do hủy:
        <TextArea value={lydo} onChange={(e)=>{setLydo(e.target.value)}} ></TextArea>
        <Button onClick={()=>{handleHuyTour(id)}} >Xác nhận hủy</Button>
      </Drawer>
    </>
}

export default ChotTourPage