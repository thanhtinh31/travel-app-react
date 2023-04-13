import React, { useState ,useEffect} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../../util/BaseUrl";
import { Button, Input, InputNumber } from "antd";
function VerifyPage() {
  const [code, setCode] = useState();
  const navigate = useNavigate();
    useEffect(()=>{
        const vrf  = sessionStorage.getItem('verify');
        if(!vrf){
          navigate('/login')
        }
      
      })
    
    const handleVerify =async()=>{
            const reg = JSON.parse(sessionStorage.getItem('verify')).account;
            const codeVerify =JSON.parse(sessionStorage.getItem('verify')).code;        
            console.log(codeVerify)    
        if(code==codeVerify){
            const res = await axios.post(BaseUrl+'account',reg);        
            alert("Đăng kí thành công");
          //  delete session
            sessionStorage.removeItem('verify');
            navigate('/login');
        }
        else{
            alert("Không trùng khớp");
        } 
    }
  return (
    <>
    <Input value={code} onChange={(e)=>setCode(e.target.value)} type="number" minLength={6}></Input>
    <Button onClick={handleVerify}>Ok</Button>
    </>
  )
}

export default VerifyPage