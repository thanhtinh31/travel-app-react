import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import BaseUrl from '../../util/BaseUrl';
import { Button, Input, Space, Select, Upload, Form, Radio, Col, Row, InputNumber } from "antd";
import  {  storage} from '../../firebase';
import TextArea from 'antd/es/input/TextArea';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
const { Option } = Select;
const CreateTourPage = (props) => {
    const [title,setTitle] =useState(null);
    const [idCategory,setIdCategory] =useState([]);
    const [address,setAddress] =useState(null);
    const [subTitle,setSubTitle] =useState(null);
    const [describe,setDescribe] =useState(null);
    const [interesting,setInteresting] =useState(null);
    const [inteval,setInteval] =useState(null);
    const [vehicle,setVehicle] =useState(null);
    const [price,setPrice] =useState(0);
    const [sale,setSale] =useState(0);
    const [status,setStatus] =useState(true);
    const [image,setImage] =useState([]);
    const [hanhtrinh,setHanhtrinh]=useState([]);
    const [categories, setCategories] = useState([]);
    const [fileList, setFileList] = useState([]);
    const [service,setService]=useState([]);
    const [idService,setIdService]=useState([]);
    const handleSubmit=async()=>{
      if(window.confirm("Xác nhận tạo tour")){
        let regObj = {idAccount:sessionStorage.getItem('user'),idService,title,subTitle,image,describe,interesting,address,inteval,vehicle,price,sale,status,hanhtrinh,idCategory};
        console.log(regObj); 
        try{
          const res= await axios.post(BaseUrl+'tour', regObj);    
          console.log(res?.data);  
          toast.success("Thêm mới tour thành công")
          props.parentCallback(true);
        }catch(err){alert('Không có kết nối');}
    
    }
    }
    const handleChangeCate = (value) => {
      setIdCategory(value)
  };
  const handleChangeService = (value) => {
    setIdService(value)
    console.log(`selected ${value}`);
};
  const customUpload = async({ onError, onSuccess, file }) => {
    console.log(file)
    const fileName = `uploads/images/${Date.now()}-${file.name}`;
    const imageRef = ref(storage, fileName);
  await uploadBytes(imageRef, file)
    .then(() => {
      getDownloadURL(imageRef)
        .then((url) => {
            console.log(url)
            setImage(image => [...image, {'url':url,'name':fileName}])
        })
        .catch((error) => {
          console.log(error.message, "error getting the image url");
        });
    })
    .catch((error) => {
      console.log(error.message);
    });
    onSuccess=(e)=>{
            
    }
    
}
  
const onChange = (infor,fileList) => {
  
  const new_arr = image.filter(item => item !== infor);
  setImage(new_arr)
};
  const getCategories= async()=>{
    try {  
      const category = await axios.get(BaseUrl+'category/active')
      setCategories(category?.data)
    } catch (error) {
      console.error(error);
    }
  }
  useState(async() => {
    getCategories()
    const services = await axios.get(BaseUrl+'service/active')
    setService(services?.data)
    
  }, []);

  return (
    <>       
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 1000 }}
        onFinish={handleSubmit}
      >
    <Row gutter={[24, 0]}>
        <Col span={12}>
          <Form.Item label="Tiêu đề"> 
          <Input value={title} onChange={(e)=>{setTitle(e.target.value)}} required />
        </Form.Item></Col>
        <Col span={12}><Form.Item label="Tiêu đề phụ">
          <Input value={subTitle} onChange={(e)=>{setSubTitle(e.target.value)}} />
        </Form.Item></Col>
    </Row>  
    <Row gutter={[24, 0]}>
        <Col span={12}>
            <Form.Item label="Danh mục">
            <Select 
            mode="multiple"
            style={{
            width: '100%',
            }}
            placeholder="select one country"
            value={idCategory}
            onChange={handleChangeCate}
            >
      {categories.map((item) => {
            return (
              <Option value={item.id} key={item.id} >
              <Space>
              {item.name}
              </Space>
              </Option>
            )})}
            </Select>
        </Form.Item></Col>
        <Col span={12}><Form.Item label="Địa chỉ">
          <Input value={address} onChange={(e)=>{setAddress(e.target.value)}} required />
        </Form.Item></Col>
    </Row> 

    <Row gutter={[24, 0]}>
        <Col span={12}><Form.Item label="Mô tả">
        <TextArea rows={4} value={describe} onChange={(e)=>{setDescribe(e.target.value)}} required/>
        </Form.Item></Col>
        <Col span={12}><Form.Item label="Hấp dẫn">
        <TextArea rows={4} value={interesting} onChange={(e)=>{setInteresting(e.target.value)}}/>
        </Form.Item></Col>
    </Row>  
    <Row gutter={[24, 0]}>
        <Col span={12}><Form.Item label="Thời gian">
          <Input value={inteval} onChange={(e)=>{setInteval(e.target.value)}} required />
        </Form.Item></Col>
        <Col span={12}><Form.Item label="Phương tiện">
          <Input value={vehicle} onChange={(e)=>{setVehicle(e.target.value)}} />
        </Form.Item></Col>
    </Row>  
    <Row gutter={[24, 0]}>
    <Col span={12}><Form.Item label="Giá tour">
    <InputNumber min={0} value={price} defaultValue={0} onChange={(e)=>{setPrice((e))}} required/>VNĐ
        </Form.Item></Col>
        <Col span={12}><Form.Item label="Giảm giá">
        <InputNumber
        value={sale*100}
        defaultValue={0}
        min={0}
        max={100}
        formatter={(value) => `${value}%`}
        parser={(value) => value.replace('%', '')}
        onChange={(e)=>{setSale((e/100))}}
    />
        </Form.Item></Col>
    </Row> 
    <Row gutter={[24, 0]}>
        <Col span={12}><Form.Item label="Hình ảnh">

        <Upload
        listType="picture-card"
        fileList={image}
        customRequest={customUpload}
        //onChange={onChange}
        onRemove={onChange}
        >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
       
        </Form.Item>
        </Col>

        <Col span={12}><Form.Item label="Trạng thái">
        
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
        <Form.Item label="Dịch vụ">
          <Select required
    mode="multiple"
    style={{
      width: '100%',
    }}
    placeholder="select one country"
    value={idService}
    onChange={handleChangeService}
  >
      {service.map((item) => {
            return (
    <Option value={item.id} key={item.id} >
      <Space>
        {item.name}
      </Space>
    </Option>
            )})}
   
  </Select>
          </Form.Item>
        
        </Col>
    </Row>  
    <Row gutter={[24, 0]}>
        <Col span={10}>
          
        </Col>
        <Col span={12}>
        <Form.Item>
      <Button htmlType="submit" style={{marginRight:'10px',backgroundColor:'#7CFC00'}}>
        Thêm mới
      </Button>
      <Button style={{marginRight:'10px',backgroundColor:'#FF0000'}} onClick={()=>{props.parentCallback(false)}}>
        Hủy
      </Button>
    </Form.Item>
         </Col>
    </Row> 
      </Form>
      
    </>
  )
}

export default CreateTourPage