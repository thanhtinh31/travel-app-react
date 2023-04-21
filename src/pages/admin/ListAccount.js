import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import AdminLayout from '../../layout/AdminLayout';
import BaseUrl from '../../util/BaseUrl';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { PlusOutlined } from '@ant-design/icons';
import { Button, Table, Modal, Input, Drawer, Space, Checkbox, Select, Upload, Form, Radio, Switch, Avatar } from "antd";
import firebase, { db, storage, storageRef } from '../../firebase';
import TextArea from 'antd/es/input/TextArea';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';



function ListAccount() {
    const [loading,setLoading] =useState(true);
    const [account, setAccount] = useState([]);
    const [loadingstatus,setLoadingStatus]=useState(false);
    const columns = [
        {
          title: 'Tài khoản',
          render: (record) => {
            return (
              <><Avatar src={record.image?record.image:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"} />
              {record.nameAccount}</>
            )}
        },
        {
          title: 'Số điện thoại',
          dataIndex: 'phoneNumber',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
        },
        {
          title: 'Email',
          render: (record) => {
            return (
              <>
              {record.email?record.email:"Đăng nhập Facebook-Chưa cập nhật"}</>
            )}
        },
        {
          title: 'Đăng nhập gần nhất',
          render: (record) => {
            const a=new Date(record.timeLogin)
            console.log(a)
            return (
              <>
              {record.timeLogin?<>{a.getHours()}h{a.getMinutes()}p--{a.getDate()}/{a.getMonth()+1}/{a.getFullYear()}</>:"--"}</>
            )}
        },
        {
          title: 'Loại tài khoản',
          render: (record) => {
            return (
             record.typeAccount!=3?<><Select
              defaultValue={record.typeAccount}
              style={{
                width: 100,
              }}
              onChange={(value)=>{handleChange(value,record.id)}}
              options={[
                {
                  value: 1,
                  label: 'User',
                },
                {
                  value: 2,
                  label: 'Seller',
                },
              ]}
            /></>:<>Admin</>
            )}
        },
        {
          title: 'Status',
          render: (record) => {
            return (
              record.status?<><Switch disabled={record.typeAccount==3?true:false} loading={loadingstatus} checked={record.status}  onChange={(checked)=>{onChange(checked,record.id)}} /></>:<><Switch disabled={record.typeAccount==3?true:false} checked={record.status}  onChange={(checked)=>{onChange(checked,record.id)}} /></>
            )}
        },
    ];   
    const handleChange = async (value,id) => {
        console.log(value)
        try {  
            const account= await axios.post(BaseUrl+'account/changetypeaccount',{id,typeAccount:value})
            fetchData()
           // setLoadingStatus(false)
          } catch (error) {
            console.error(error);
           // setLoadingStatus(false)
          }
        
      };
    const onChange = async (checked,id) => {
        setLoadingStatus(true)
        try {  
            const account= await axios.post(BaseUrl+'account/changestatus',{id,status:checked})
            fetchData()
            setLoadingStatus(false)
          } catch (error) {
            console.error(error);
            setLoadingStatus(false)
          }
      };   
    async function fetchData() {
      try {  
        const account= await axios.get(BaseUrl+'account')
        setAccount(account.data)
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    }
    useState(() => {
      fetchData();
    }, []);
    
     
    return <>
    <h1>QUẢN LÝ DANH SÁCH TÀI KHOẢN</h1>
      <Table rowKey={account.id} columns={columns} dataSource={account} loading={loading}/> 
      </>
}

export default ListAccount