
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



function ListCategory() {
    const [loading,setLoading] =useState(true);
    const [id,setId] =useState(null);
    const [name,setName] =useState(null);
    const [content,setContent] =useState(null)
    const [status,setStatus]=useState(true);
    const [image,setImage] =useState(null);
    const [open, setOpen] = useState(false);
    const columns = [
        {
          title: 'Tên danh mục',
          dataIndex: 'name',
        },
        {
          title: 'Nội dung',
          dataIndex: 'content',
        },
        {
          title: 'Hình ảnh',
          render: (record) => {
            return (
              <>
               <img src={record.image} width='100px'></img>
              </>
            );
          },
        },
        {
          title: 'Status',
          render: (record) => {
            return (
              record.status?<>Mở</>:<>Khóa</>
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
        setId(record.id)
        setImage(record.image);
        setName(record.name)
        setContent(record.content);
        setStatus(record.status);
        console.log(record.status)
        setOpen(true);
      };
   
    const [categories, setCategories] = useState([]);
   // const [categories,setCategories] = useState([]);

    const  deleteHandle= async(e)=>{
        if(window.confirm("Xác nhận xóa")){
        const xoa = await axios.delete(BaseUrl+'category/'+e)
        fetchData()
        toast.success(xoa?.data);
        }  
      }
    
    async function fetchData() {
      try {  
        const categorie = await axios.get(BaseUrl+'category?size=1000')
        setCategories(categorie?.data.content)
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    }
    useState(() => {
      fetchData();
    }, []);
    
    const customUpload = async({ onError, onSuccess, file }) => {
        const fileName = `uploads/images/${Date.now()}-${file.name}`;
        const imageRef = ref(storage, fileName);
      await uploadBytes(imageRef, file)
        .then(() => {
          getDownloadURL(imageRef)
            .then((url) => {                         
              setImage(url);
            })
            .catch((error) => {
              console.log(error.message, "error getting the image url");
            });
          setImage(null);
        })
        .catch((error) => {
          console.log(error.message);
        });
      }
    
      const handSubmit = async(e)=>{
        e.preventDefault();
        if(window.confirm("Xác nhận cập nhật")){
        let regObj = {id,name,content,image,status};
        try{
          console.log(regObj);
            const res= await axios.put(BaseUrl+'category', regObj);    
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
      <Table rowKey={categories.id} columns={columns} dataSource={categories} loading={loading}/> 
      <Modal
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
       
        <Form.Item label="Name">
          <Input value={name} onChange={(e)=>{setName(e.target.value)}} />
        </Form.Item>
                 
        <Form.Item label="Content" onChange={(e)=>{setContent(e.target.value)}}>
          <TextArea rows={4} value={content}/>
        </Form.Item>
       
        <Form.Item label="Image" valuePropName="fileList">
          <Upload maxCount="1" fileList={[{url:image}]} listType="picture-card"
           showUploadList={false}
           customRequest={customUpload}>
            <div>
              {image ? <img src={image} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </div>
          </Upload>
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
      </Modal>
      </>
}

export default ListCategory