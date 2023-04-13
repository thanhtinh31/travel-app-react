
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import AdminLayout from '../../layout/AdminLayout';
import BaseUrl from '../../util/BaseUrl';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { PlusOutlined } from '@ant-design/icons';
import { Button, Table, Modal, Input, Drawer, Space, Checkbox, Select, Upload, Form, Radio } from "antd";
import firebase, { db, storage, storageRef } from '../../firebase';
import TextArea from 'antd/es/input/TextArea';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';



function ListAccount() {
    const [loading,setLoading] =useState(true);
    const [id,setId] =useState(null);
    const [nameAccount,setNameAccount] =useState(null);
    const [phoneNumber,setPhoneNumber] =useState(null);
    const [email,setEmail] =useState(null);
    const [typeAccount,setTypeAccount] =useState(null);
    const [status,setStatus]=useState(true);
    const [open, setOpen] = useState(false);
    const columns = [
        {
          title: 'Tên tài khoản',
          dataIndex: 'nameAccount',
        },
        {
          title: 'Số điện thoại',
          dataIndex: 'phoneNumber',
        },
        {
          title: 'Email',
          dataIndex: 'email',
        },
        {
          title: 'Loại tài khoản',
          dataIndex: 'typeAccount',
        },
        {
          title: 'Status',
          render: (record) => {
            return (
              record.status?<><button className='bg'>Mở</button></>:<><button>Khóa</button></>
            )}
        },
        {
            key: "5",
            title: "Actions",
            render: (record) => {
              return (
                <>
                  <EditOutlined
                  onClick={() => {
                  showDrawer(record)
                }}
                style={{ color: "green", marginLeft: 12,fontSize: '20px'}}
                  />
                  <DeleteOutlined
                    onClick={() => {
                        console.log(record.id)
                      deleteHandle(record.id);
                    }}
                    style={{ color: "red", marginLeft: 12 ,fontSize: '20px'}}
                  />
                </>
              );
            },
          },
      ];      
      const showDrawer =(record) => {
        setId(record.id);
        setNameAccount(record.nameAccount);
        setPhoneNumber(record.phoneNumber);
        setEmail(record.email);
        setTypeAccount(record.typeAccount);
        console.log(record.status)
        setOpen(true);
      };
   
    const [account, setAccount] = useState([]);
   // const [categories,setCategories] = useState([]);

    const  deleteHandle= async(e)=>{
        if(window.confirm("Xác nhận xóa")){
        const xoa = await axios.delete(BaseUrl+'account/'+e)
        fetchData()
        toast.success(xoa?.data);
        }  
      }
    
    async function fetchData() {
      try {  
        const account= await axios.get(BaseUrl+'account')
        setAccount(account.data)
        console.log(account.data)
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    }
    useState(() => {
      fetchData();
    }, []);
    
      const handSubmit = async(e)=>{
        e.preventDefault();
        if(window.confirm("Xác nhận cập nhật")){
        let regObj = {id,nameAccount,phoneNumber,email,typeAccount,status};
        try{
          console.log(regObj);
            const res= await axios.put(BaseUrl+'account', regObj);    
            console.log(res?.data);  
             toast.success("thanh cong")
             fetchData()
             setOpen(false)
          }catch(err){alert('Khong co ket noi');}
        }
      }
      const uploadButton = (
        <div>
          <div className="ant-upload-text">Upload</div>
        </div>
        );
    return <>
    <h1>QUẢN LÝ DANH SÁCH TÀI KHOẢN</h1>
      <Table rowKey={account.id} columns={columns} dataSource={account} loading={loading}/> 
      {/* <Modal
        title="Chỉnh sửa danh mục"
        okText='Save'
        okType='primary'
        centered
        open={open}
        onOk={(e) => handSubmit(e)}
        onCancel={() => setOpen(false)}
        width={1000}   
      >         
        
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
       
        <Form.Item label="Tên Tài Khoản">
          <Input value={nameAccount} onChange={(e)=>{setNameAccount(e.target.value)}} />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} />
        </Form.Item>
        <Form.Item label="Email">
          <Input value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </Form.Item>
        <Form.Item label="Loại tài khoản">
          <Input value={typeAccount} onChange={(e)=>{setTypeAccount(e.target.value)}} />
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
      </Form>
      </Modal> */}
      </>
}

export default ListAccount