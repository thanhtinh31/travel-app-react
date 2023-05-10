
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import AdminLayout from '../../layout/AdminLayout';
import BaseUrl from '../../util/BaseUrl';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { PlusOutlined } from '@ant-design/icons';
import { Button, Table, Modal, Input, Drawer, Space, Checkbox, Select, Upload, Form, Radio, Row, Col } from "antd";
import firebase, { db, storage, storageRef } from '../../firebase';
import TextArea from 'antd/es/input/TextArea';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import CreateService from './CreateService';



function ListCategory() {
    const [loading,setLoading] =useState(true);
    const [id,setId] =useState(null);
    const [name,setName] =useState(null);
    const [describle,setDescrible] =useState(null)
    const [status,setStatus]=useState(true);
    const [icon,setIcon] =useState(null);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const columns = [
      {
        title: 'STT',
        render: (record) => {
          return (<>{services.indexOf(record)+1}</>);
        },
        width:'3%',  
      },
        {
          title: 'Tên dịch vụ',
          dataIndex: 'name',
        },
        {
          title: 'Mô tả',
          dataIndex: 'describle',
        },
        {
          title: 'Hình ảnh',
          render: (record) => {
            return (
              <>
               <img src={record.icon} width='70px' height='50px'></img>
              </>
            );
          },
        },
        {
          title: 'Trạng thái',
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
        setIcon(record.icon);
        setName(record.name)
        setDescrible(record.describle);
        setStatus(record.status);
        console.log(record.status)
        setOpen(true);
      };
   
    const [services, setServices] = useState([]);
   // const [categories,setCategories] = useState([]);

    const  deleteHandle= async(e)=>{
        if(window.confirm("Xác nhận xóa")){
        const xoa = await axios.delete(BaseUrl+'service/'+e)
        fetchData()
        toast.success(xoa?.data);
        }  
      }
    
    async function fetchData() {
      try {  
        const categorie = await axios.get(BaseUrl+'service/all')
        setServices(categorie?.data)
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    }
    useState(() => {
      fetchData();
    }, []);
    const handleSubmit=async()=>{

    }
    
    const customUpload = async({ onError, onSuccess, file }) => {
        const fileName = `uploads/images/${Date.now()}-${file.name}`;
        const imageRef = ref(storage, fileName);
      await uploadBytes(imageRef, file)
        .then(() => {
          getDownloadURL(imageRef)
            .then((url) => {                         
              setIcon(url);
            })
            .catch((error) => {
              console.log(error.message, "error getting the image url");
            });
          setIcon(null);
        })
        .catch((error) => {
          console.log(error.message);
        });
      }
    
      const handSubmit = async(e)=>{
        e.preventDefault();
        if(window.confirm("Xác nhận cập nhật")){
        let regObj = {id,name,describle,icon,status};
        try{
          console.log(regObj);
            const res= await axios.put(BaseUrl+'service', regObj);    
            console.log(res?.data);  
             toast.success("thanh cong")
             fetchData()
             setOpen(false)
          }catch(err){alert('Khong co ket noi');}
        }
      }
      const callbackFunction = (childData) => {
        if(childData){
              fetchData()
        }
        setOpen2(false)
      }
      const uploadButton = (
        <div>
          <div className="ant-upload-text">Upload</div>
        </div>
        );
    return <>
    <Row style={{marginBottom:15}}>
    <Col span={21} ><h2 style={{fontSize:20,textAlign:'center',color:'royalblue'}}>DANH SÁCH DỊCH VỤ</h2></Col>
      <Col span={3}>
        <Button type='primary' onClick={()=>{setOpen2(true)}}>Thêm mới</Button>
       {/* {ids==null||ids.length==0?<></>:<Button type='primary' onClick={()=>{deleteList(ids)}}>Xóa</Button>} */}
      </Col>
    </Row>
      <Table  columns={columns} dataSource={services} loading={loading}/> 
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
       
        <Form.Item label="Tên dịch vụ">
          <Input value={name} onChange={(e)=>{setName(e.target.value)}} />
        </Form.Item>
                 
        <Form.Item label="Mô tả" onChange={(e)=>{setDescrible(e.target.value)}}>
          <TextArea rows={4} value={describle}/>
        </Form.Item>
       
        <Form.Item label="Hình Ảnh" valuePropName="fileList">
          <Upload maxCount="1" fileList={[{url:icon}]} listType="picture-card"
           showUploadList={false}
           customRequest={customUpload}>
            <div>
              {icon ? <img src={icon} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
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
      <Modal
        title={"Thêm mới Dịch vụ "}
        footer={null}
        okText=''
        cancelText='Thoát'
        okType='ghost'
        centered
        open={open2}
        onOk={handleSubmit}
        onCancel={() => setOpen2(false)}
        width={800}   
      >         
      <CreateService  parentCallback={callbackFunction}/>
      
      </Modal>
      </>
}

export default ListCategory