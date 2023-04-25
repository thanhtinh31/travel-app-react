import axios from 'axios';
import React, { useEffect, useState } from 'react'

import BaseUrl from '../../util/BaseUrl';

import { Table, Select, Switch, Avatar, Button } from "antd";
import DetailPeople from '../../components/seller/DetailPeople';
import DetailTour from '../../components/seller/DetailTour';
import { toast } from 'react-toastify';



function ChotTourPage() {
    const [loading,setLoading] =useState(true);
    const [schedule, setSchedules] = useState([]);
    const [loadingstatus,setLoadingStatus]=useState(false);
    const [loai,setLoai] =useState("chuachot")
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
          dataIndex: 'tourGuide',
        },
        {
            title: 'Xuất phát',
            dataIndex: 'addressStart',
        },
        {
            title: 'Ngày xuất phát',
            dataIndex: 'dayStart',
        },
        {
          title: 'Số lượng người',
          render: (record) => {
            return (
              <>
              <DetailPeople idSchedule={record.id}/>
              </>
            )}
        },
        
        {
          title: 'Trạng thái',
          render: (record) => {
            return (
              <>
              {record.status?<>Đang mở đặt</>:<>Khóa</>}
              </>
            )}
        },
        {
          title: 'Thao tác',
          render: (record) => {
            return (
                <>
              {loai=="chuachot"?
              <Button onClick={()=>{handleChange(record.id,false)}}> Chốt tour</Button>:
              <Button onClick={()=>{handleChange(record.id,true)}} style={{color:'blueviolet'}}> Mở đặt tour</Button>}
              </>
            )}
        },
    ];   
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
        const account= await axios.get(BaseUrl+'schedule/listdetailschedule/'+loai)
        setSchedules(account.data)
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
          value: "chuachot",
          label: 'Chưa chốt',
        },
        {
          value: "dachot",
          label: 'Đã chốt',
        },
        {
            value: "dahoanthanh",
            label: 'Đã hoàn thành',
        },
      ]}>
        
      </Select>
    <h1>Danh sách lịch trình {loai==="chuachot"?"Chưa chốt":loai==="dachot"?"Đã chốt":"Đã hoàn thành"}</h1>
      <Table rowKey={schedule.idSchedule} columns={columns} dataSource={schedule} loading={loading}/> 

    </>
}

export default ChotTourPage