import React, { useState ,useEffect} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../../util/BaseUrl";
function VerifyPage() {
    useEffect(()=>{
        const vrf  = sessionStorage.getItem('verify');
        if(!vrf){
          window.location="/login"
        }
      })
    const [code, setCode] = useState("");
    const navigate = useNavigate();
    const handleVerify =async (e)=>{
        
            const reg = JSON.parse(sessionStorage.getItem('verify')).account;
            const codeVerify =JSON.parse(sessionStorage.getItem('verify')).code;            
        if(code==codeVerify){
            const res = await axios.post(BaseUrl+'account',reg);        
            alert("Đăng kí thành công");
            //delete session
            sessionStorage.removeItem('verify');
            navigate('/login');
        }
        else{
            alert("Không trùng khớp");
        }       
    }
  return (
    <form onSubmit={handleVerify}>
        Enter code
        <input
        value={code}
        type="number"
        minLength={6}
        onChange={(e) => setCode(e.target.value)} 
        placeholder="Enter code"
        required/>

        <button type="submit">ok</button>
    </form>

  )
}

export default VerifyPage