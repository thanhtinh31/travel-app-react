import { Button, DatePicker, Form, Input, InputNumber, Radio, Upload } from 'antd';
import axios from 'axios';

import React from 'react'
import { useState } from 'react'
import BaseUrl from '../../util/BaseUrl';
import { setDate } from 'date-fns';
import moment from 'moment/moment';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import dayjs from 'dayjs';

function EditSchedule(props) {
    const [dayStart,setDayStart]=useState('01/01/2023');
    const [tourGuide,settourGuide]=useState(null);
    const [phone,setphone]=useState(null);
    const [addressStart,setaddressStart]=useState(null);
    const [status,setStatus]=useState(true);
    const [expectedPeople,setExpectedPeople]=useState(1);
    const onChange = (date, dateString) => {
        setDayStart(dateString)
      };
      async function fetchData(e) {
        try {  
          const res = await axios.get(BaseUrl+'schedule/getschedule/'+e)
          settourGuide(res?.data.tourGuide);
          setphone(res?.data.phone);
          setStatus(res?.data.status)
          setaddressStart(res?.data.addressStart)
          setExpectedPeople(res?.data.expectedPeople)
          console.log(res?.data.dayStart)
          setDayStart(res?.data.dayStart)
        } catch (error) {
          console.error(error);
        }
      }
    const themmoi=async()=>{
        try {  
            let regObj = {id:props.id,dayStart,phone,addressStart,tourGuide,expectedPeople,type:"HT",status};
            const upd = await axios.put(BaseUrl+'schedule',regObj)

            if(upd?.data.status==0) {toast.error(upd?.data.message);} else {
                props.thanhcong()
            }
          } catch (error) {
            console.error(error);
          }

    }
    useEffect(() => {
       
        fetchData(props.id)
      }, [props]);
      const dateFormat = 'MM/DD/YYYY';

  return (
    <>
     <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={themmoi}
      >
       
        <Form.Item label="Hướng dẫn viên">
          <Input value={tourGuide} onChange={(e)=>{settourGuide(e.target.value)}} required />
        </Form.Item>
                 
        <Form.Item label="Số điện thoại" >
        <Input value={phone} onChange={(e)=>{setphone(e.target.value)}} required/>
        </Form.Item>

        <Form.Item label="Ngày xuất phát" >
        
        <DatePicker value={dayjs(dayStart,dateFormat)}   onChange={onChange} format={'MM/DD/YYYY'} required/>
        </Form.Item>
       
        <Form.Item label="Địa điểm xuất phát" >
        <Input value={addressStart} onChange={(e)=>{setaddressStart(e.target.value)}} required />
        </Form.Item>
        <Form.Item label="Số người dự kiến" >
        <Input type='number' min={1} value={expectedPeople} onChange={(e)=>{setExpectedPeople(e.target.value)}} required />
        </Form.Item>
        <Form.Item label="Status">
        <Radio.Group
        options={[
          {
            label: 'Mở',
            value: true,
          },
          {
            label: 'Khóa',
            value: false,
          },
        ]}
        onChange={(e)=>setStatus(e.target.value)}
        value={status}
        optionType="button"
        buttonStyle="solid"
        />
        </Form.Item>
        <button type='submit' >Lưa thay đổi</button>
       
     </Form>
      
    </>
  )
}

export default EditSchedule