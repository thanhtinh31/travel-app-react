import { Button, Input, message, Spin, Steps, theme } from 'antd';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import BaseUrl from '../util/BaseUrl';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const [email,setEmail]=useState("");
    const [id,setId]=useState("");
    const [code, setCode] = useState();
    const [oldPass,setOldPass]=useState("");
    const [password,setPassword]=useState("");
    const [rpassword,setRPassword]=useState("");
    const [loading,setLoading] =useState(false);
    const navigate =useNavigate()

    const steps = [
        {
          title: 'Nhập email',
          content: <><div className="flex flex-col max-w-lg bg-slate-300 p-4 mx-auto items-center rounded-md">
          Nhập email
          <Input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="text"
            minLength={6}
          ></Input>
        </div></>,
        },
        {
          title: 'Nhập mã',
          content: <><div className="flex flex-col max-w-lg bg-slate-300 p-4 mx-auto items-center rounded-md">
          Nhập mã xác nhận
          <Input
      value={code}
      onChange={(e) => setCode(e.target.value)}
      type="text"
      minLength={6}
    ></Input>
        </div></>,
        },
        {
          title: 'Đổi mật khẩu',
          content: <>
         
         <div className="flex flex-col max-w-lg bg-slate-300 p-4 mx-auto items-center rounded-md">
          Nhập mật khẩu
          <Input
            type="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          ></Input>
        </div><div className="flex flex-col max-w-lg bg-slate-300 p-4 mx-auto items-center rounded-md">
          Xác nhận mật khẩu
          <Input
            type="password"
            value={rpassword}
            onChange={(e)=>{setRPassword(e.target.value)}}
          ></Input>
        </div>
        </>,
        },
      ];

    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const verify=()=>{}
    const next = async() => {
        setLoading(true)
        if(current+1==1) { 
            try{
                const r = await axios.post(BaseUrl+'account/forgotpass/'+email);
                if(r?.data.status==="1")
                {
                    sessionStorage.setItem('verify',r?.data.code)
                    setOldPass(r?.data.account.password);
                    setId(r?.data.account.id)
                    setCurrent(current + 1);
                    setLoading(false)
                }else
                {
                toast.error("Email không tồn tại");
                setLoading(false)
                }
              }catch(err){
                setLoading(false)
                console.log(err);
              }
        }
        else if(current+1==2) {
            
            if(sessionStorage.getItem('verify')===code) { setLoading(false); setCurrent(current + 1); }
            else {
              setLoading(false)
              toast.error("Mã xác nhận không chính xác")
            }
        }
        else if(current+1==3) setLoading(false)
        //setCurrent(current + 1);
    };
    const onDone=async(oldPass,newPass) =>{
        setLoading(true)
        console.log(oldPass)
        try{
            let reg={id,oldPass,newPass}
            const r = await axios.post(BaseUrl+'account/changepassword',reg);
            if(r?.data.status==="1")
            {
                setLoading(false)
                message.success('Đổi mk thành công');
                navigate('/login')
                
            }else
            {
                setLoading(false)
                message.error('không thành công');
            }
          }catch(err){
            setLoading(false)
            console.log(err);
          }

    } 
    const prev = () => {
      setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
      key: item.title,
      title: item.title,
    }));
    const contentStyle = {
      lineHeight: '50px',
      textAlign: 'center',
      color: token.colorTextTertiary,
      backgroundColor: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: `1px dashed ${token.colorBorder}`,
      marginTop: 16,
    };
  return (
    <>
    <div className=" max-w-lg bg-slate-300 p-4 mx-auto items-center rounded-md my-10">
      <Steps current={current} items={items} />
      <Spin spinning={loading}>
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => {onDone(oldPass,password)}}>
            Done
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
      </Spin>
      </div>
    </>
  )
}

export default ForgotPassword