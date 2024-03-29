import { Button, DatePicker, Form, Input, InputNumber, Radio, Upload } from 'antd';
import axios from 'axios';

import React from 'react'
import { useState } from 'react'
import BaseUrl from '../../util/BaseUrl';
import { setDate } from 'date-fns';
import moment from 'moment/moment';
import { toast } from 'react-toastify';


function AddSchedule(props) {
    const [dayStart,setDayStart]=useState(null);
    const [tourGuide,settourGuide]=useState(null);
    const [phone,setphone]=useState(null);
    const [addressStart,setaddressStart]=useState(null);
    const [idTour,setIdTour]=useState(props.idTour);
    const [status,setStatus]=useState(true);
    const [expectedPeople,setExpectedPeople] =useState(1);
    const onChange = (date, dateString) => {
        const a=new Date(dateString);
        setDayStart(dateString)
      };
    const themmoi=async()=>{
        try {  
            let regObj = {dayStart,idTour,phone,addressStart,tourGuide,expectedPeople,progress:0,type:"HT",status};
            const add = await axios.post(BaseUrl+'schedule',regObj)
            if(add?.data.status==0) {toast.error(add?.data.message);} else {
                props.thanhcong()
            }
          } catch (error) {
            console.error(error);
          }
    }
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
        
        <DatePicker   onChange={onChange} format={'MM/DD/YYYY'} required/>
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
        <button type='submit' >Thêm mới</button>
      <Button >Hủy</Button>
     </Form>
      
    </>
  )
}

export default AddSchedule