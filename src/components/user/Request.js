import React, { useEffect } from 'react'
import { Button, Col, DatePicker, Form, Input, message, Row, Steps, theme } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import BaseUrl from '../../util/BaseUrl';
import { toast } from 'react-toastify';

function Request(props) {
    const [dayStart,setDayStart]=useState();
    const [addressStart,setaddressStart]=useState();
    const [people,setPeople]=useState(1);
    const [email,setEmail]=useState();
    const [phone,setPhone]=useState();
    const [fullName,setFullname]=useState();
    const [address,setAddress]=useState();
    const [image,setImage]=useState();
    const [title,setTitle]=useState();
    const [price,setPrice]=useState();
    const [sale,setSale]=useState();
    const [addressTour,setAddressTour]=useState();
    const fetchData=async()=>{
        try{
            const user=await axios.get(BaseUrl+'account/getAccount/'+sessionStorage.getItem('user'))
            console.log(user?.data)
            setEmail(user?.data.email)
            setPhone(user?.data.phoneNumber)
            setAddress(user?.data.address)
            setFullname(user?.data.nameAccount)
            const tour=await axios.get(BaseUrl+'tour/'+props.idTour);
            setTitle(tour?.data.title)
            setImage(tour?.data.image[0].url)
            setAddressTour(tour?.data.address)
            setPrice(tour?.data.price)
            setSale(tour?.data.sale)

        }catch{
            
        }
    }
    useEffect(() => {
        fetchData();
      }, []);
    const onChange = (date, dateString) => {
        let a=new Date(dateString);
        let now=new Date();
        if(a<now) message.error('Ngày không hợp lệ');
        else setDayStart(dateString)
      };
      const handleCreate=async()=>{
        let reg={idAccount:sessionStorage.getItem('user'),email,phone,address,addressStart,dayStart,people,fullName,idTour:props.idTour}
        try{
            const req= await axios.post(BaseUrl+'request',reg)
            if(req?.data.status)
            message.success('Đặt thành công!')
            setPeople(1);
            setaddressStart("");
            setDayStart(null);

            props.thanhcong(false);
            setCurrent(0);
        }
        catch{

        }
        
        
      }
    const steps = [
        {
          title: 'Nhập thông tin',
          content: <>
          <Form
           labelCol={{ span: 10 }}
           wrapperCol={{ span: 10 }}
          layout="horizontal"
         style={{ maxWidth: 600 }}
          onFinish={()=>{next()}}
        >
        <Form.Item label="Ngày xuất phát" >
        <DatePicker   onChange={onChange} format={'MM/DD/YYYY'} required/>
        </Form.Item>
       <Form.Item label="Nhập điểm xuất phát">
         <Input value={addressStart} onChange={(e)=>{setaddressStart(e.target.value)}} required />
       </Form.Item>
       <Form.Item label="Số lượng người">
         <Input type='number' value={people} onChange={(e)=>{setPeople(e.target.value)}} required />
       </Form.Item>
        </Form>

          </>,
        },
        {
          title: 'Nhập thông tin liên hệ',
          content: <>

        <Form
          
           labelCol={{ span: 10 }}
           wrapperCol={{ span: 10 }}
          layout="horizontal"
         style={{ maxWidth: 600 }}
          onFinish={()=>{next()}}
        >
        <Form.Item label="Họ và tên" >
        <Input value={fullName} onChange={(e)=>{setFullname(e.target.value)}} required />
        </Form.Item>
        <Form.Item label="Địa chỉ ">
         <Input value={address} onChange={(e)=>{setAddress(e.target.value)}} required />
        </Form.Item>
        <Form.Item label="Số điện thoại">
         <Input type='phone'  value={phone} onChange={(e)=>{setPhone(e.target.value)}} required />
        </Form.Item>
        <Form.Item label="Email ">
         <Input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
        </Form.Item>
        </Form>
          </>
          ,
        },
        {
          title: 'Hoàn tất',
          content: <>
          <Row>
            <Col span={12}> 
              <img src={image} width={'300px'} />
              <br/>
              {title}-{addressTour}
              <br/>
              {price-price*sale} / 1 người

            </Col>
            <Col span={12}>
                Xuất phát ngày: {dayStart}
                <br/>
                Điểm xuất phát: {addressStart}
                <br/>
                Điểm đến: {addressTour}
                <br/>
                Số khách: {people} người
                <br/>
                Tổng tiền thanh toán: {(price-price*sale)*people} VNĐ
                <br/>
                <br/>
                <br/>
                <br/>
                
                Chúng tôi sẽ kiểm tra và thông báo tới bạn bằng email
                Vui lòng kiểm tra và thanh toán.
            </Col>
         </Row>
          </>,
        },
      ];
      const { token } = theme.useToken();
      const [current, setCurrent] = useState(0);
      const next = () => {
        if(current==0) {
          if(dayStart==null||addressStart==null||dayStart===""||addressStart==="") message.error('vui lòng điền đầy đủ thông tin đặt tour');
          else
          setCurrent(current + 1);
        }else
        if(current==1)
        {
          if(email==null||address==null||phone==null||fullName==null||email==""||address==""||phone==""||fullName=="") message.error('vui lòng điền đầy đủ thông tin liên hệ');
          else
          setCurrent(current + 1);
        }
        
      };
      const prev = () => {
        setCurrent(current - 1);
      };
      const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
      }));
      const contentStyle = {
       
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
      };
      return (
        <>
          <Steps current={current} items={items} />
          <div style={contentStyle}>{steps[current].content}</div>
          <div
            style={{
              marginTop: 1,
            }}
          >
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={handleCreate}>
                Xác nhận
              </Button>
            )}
            {current > 0 && (
              <Button
                style={{
                  margin: '0 8px',
                }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
          </div>
        </>
      );
    };

export default Request