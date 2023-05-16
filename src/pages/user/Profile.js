import React from "react";
import { Button, Checkbox, DatePicker, Form, Input, Select, Upload } from "antd";
import { PlusOutlined ,LoadingOutlined} from '@ant-design/icons';
import dayjs from "dayjs";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import BaseUrl from "../../util/BaseUrl";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Profile() {
    const [account,setAccount]=useState()
    const [nameAccount,setNameAccount]=useState("");
    const [email,setEmail]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [address,setAddress]=useState("");
    const [avt,setAvt]=useState("");
    const [oldPass,setOldPass]=useState("");
    const [newPass,setNewPass]=useState("");
    const [rNewPass,setRNewPass]=useState("");
    const navigate=useNavigate();
    const onFinish = async() => {
      let obj={id:sessionStorage.getItem('user'),nameAccount,email,phoneNumber,address,image:avt}
        try{
          const acc= await axios.put(BaseUrl+'account',obj)
          if(acc?.data.status==="1")
          toast.success('Cập nhật thành công');
          else toast.error(acc?.data.message)
        }catch{
          toast.error('Lỗi kết nối')
        }

    };
    const onChangePass = async() => {
      let obj={id:sessionStorage.getItem('user'),oldPass,newPass}
        try{
          const changepass= await axios.post(BaseUrl+'account/changepassword',obj)
          setOldPass("");
          setNewPass("");
          setRNewPass("");
          if(changepass?.data.status==="1") {
            toast.success('Đổi mật khẩu thành công')
          }else{
            toast.error(changepass?.data.message)
          }
         
        }catch{
          toast.error('Lỗi kết nối')
        }

    };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const checkLogin=async()=>{
    if(sessionStorage.getItem('user'))
    try{
        const user= await axios.get(BaseUrl+'account/getAccount/'+sessionStorage.getItem('user'))
    }catch{sessionStorage.removeItem('user');window.location='/home'}
  }
  const getAccount=async()=>{
    if(sessionStorage.getItem('user'))
    {
      try{
        const user=await axios.get(BaseUrl+'account/getAccount/'+sessionStorage.getItem('user'));
        setNameAccount(user?.data.nameAccount)
        setEmail(user?.data.email)
        setPhoneNumber(user?.data.phoneNumber)
        setAddress(user?.data.address)
        setAvt(user?.data.image)
      }catch{alert('Không có kết nối')}
    }
    else{
      navigate('/login')
    }
  }
  useEffect(() => {
    checkLogin()
    getAccount()          
  }, []);
  const [loading, setLoading] = useState(false);
  const customUpload = async({ onError, onSuccess, file }) => {
    const fileName = `uploads/avatar/${sessionStorage.getItem('user')}-avt`;
    const imageRef = ref(storage, fileName);
  await uploadBytes(imageRef, file)
    .then(() => {
      getDownloadURL(imageRef)
        .then((url) => {                         
          setAvt(url);
        })
        .catch((error) => {
          console.log(error.message, "error getting the image url");
        });
      setAvt(null);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div className="max-w-screen-md bg-sky-100 mx-auto shadow-md mt-28">
      <h2 className="font-semibold text-xl uppercase p-3">Thông tin cá nhân</h2>
      <div className="flex flex-col md:flex-row px-4 py-2">
        <div className="w-36 rounded-full flex flex-col mx-auto items-center">
        <Upload
        showUploadList={false}
        style={{width:'300px'}}
        customRequest={customUpload}>
        <div >
          {avt ? <img  src={avt} alt="avatar" style={{ width:'300px' }} /> : uploadButton}
        </div>
      </Upload>
         
        </div>
        <div className="w-full px-4">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Tên tài khoản"
              rules={[{ required: true, message: "Tên không được để trống" }]}
            >
              <Input value={nameAccount} onChange={(e)=>{setNameAccount(e.target.value)}} required />
            </Form.Item>
            <Form.Item
              label="Ngày sinh"
              rules={[
                { required: true, message: "Ngày sinh không được để trống" },
              ]}
            >
              <DatePicker placeholder="Chọn ngày sinh" format="DD-MM-YYYY"/>
            </Form.Item>
            
            <Form.Item
              label="Email"
              rules={[{ required: true, message: "Email không được để trống" }]}
            >
              <Input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} readOnly/>
            </Form.Item>
            <Form.Item
              label="Số điện thoại"
              rules={[{ required: true, message: "Số điện thoại không được để trống" }]}
            >
              <Input type="tel" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}  />
            </Form.Item>
            <Form.Item
              label="Địa chỉ"
              rules={[{ required: true, message: "Số điện thoại không được để trống" }]}
            >
              <Input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
          <hr className="mb-4" />
          
          <hr className="mb-4" />
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onChangePass}
            autoComplete="off"
          >
            <Form.Item
              label="Mật khẩu cũ"
              rules={[
                { required: true, message: "mật khẩu không được để trống" },
              ]}
            >
              <Input.Password required minLength={6}  value={oldPass} onChange={(e)=>{setOldPass(e.target.value)}}/>
            </Form.Item>

            <Form.Item
              label="Mật khẩu mới"
              rules={[
                { required: true, message: "mật khẩu không được để trống" },
              ]}
            >
              <Input.Password required minLength={6} value={newPass} onChange={(e)=>{setNewPass(e.target.value)}}/>
            </Form.Item>
            <Form.Item
              label="Nhập lại mật khẩu"
              rules={[
                { required: true, message: "mật khẩu không được để trống" },
              ]}
            >
              <Input.Password required minLength={6} value={rNewPass}  onChange={(e)=>{setRNewPass(e.target.value)}}/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Profile;