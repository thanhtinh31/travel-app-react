import { Button, Col, Form, Input, Radio, Row, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React from 'react'
import { useState } from 'react';
import { storage } from '../../firebase';
import { toast } from 'react-toastify';
import axios from 'axios';
import BaseUrl from '../../util/BaseUrl';

function CreateCategory(props) {
  const [loading,setLoading] =useState(true);
    
    const [name,setName] =useState(null);
    const [content,setContent] =useState(null)
    const [status,setStatus]=useState(true);
    const [image,setImage] =useState(null);
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
    const uploadButton = (
      <div>
        <div className="ant-upload-text">Upload</div>
      </div>
      );
      const handleSubmit=async()=>{
        if(window.confirm("Xác nhận thêm mới")){
        try{
          let obj={name,content,image,status}
          const cate=await axios.post(BaseUrl+'category',obj);
          if(cate?.data.status=="1") {
            toast.success("Thêm mới thành công")
            props.parentCallback(true)
          }else{
            toast.warning(cate?.data.message)
          }

        }
        catch{
          toast.error("Lỗi kết nối")
        }
      }

      }

  return (
    <>
     <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit}
      >
       
        <Form.Item label="Tên danh mục">
          <Input value={name} onChange={(e)=>{setName(e.target.value)}} required />
        </Form.Item>
                 
        <Form.Item label="Nội dung" onChange={(e)=>{setContent(e.target.value)}}>
          <TextArea rows={4} value={content} required/>
        </Form.Item>
       
        <Form.Item label="Hình Ảnh" valuePropName="fileList">
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
        <Row gutter={[24, 0]}>
        <Col span={10}>
          
        </Col>
        <Col span={12}>
        <Form.Item>
      <Button type="primary" htmlType="submit">
        Save
      </Button>
      <Button type="dashed" onClick={()=>{props.parentCallback(false)}}>
        Canncel
      </Button>
    </Form.Item>
         </Col>
    </Row> 
      </Form>
    </>
  )
}

export default CreateCategory