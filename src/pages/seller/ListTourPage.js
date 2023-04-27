
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import BaseUrl from '../../util/BaseUrl';
import { EditOutlined, DeleteOutlined,MinusCircleOutlined } from "@ant-design/icons";
import { PlusOutlined } from '@ant-design/icons';
import { Button, Table, Modal, Input, Space, Select, Upload, Form, Radio, Col, Row, InputNumber } from "antd";
import { storage} from '../../firebase';
import TextArea from 'antd/es/input/TextArea';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import CreateTourPage from './CreateTourPage';

const { Option } = Select;

function ListTourPage() {
    const [loading,setLoading] =useState(true);
    const [id,setId] =useState(null);
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
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [tours, setTours] = useState([]);
    const [hanhtrinh,setHanhtrinh]=useState([]);
    const [form,form1] = Form.useForm();
    const [categories, setCategories] = useState([]);
    const [fileList, setFileList] = useState([]);
    const [service,setService]=useState([]);
    const [idService,setIdService]=useState([]);
    const columns = [
        {
          title: 'Tour',
          dataIndex: 'title',
          width: '25%',
        },
        {
          title: 'Địa chỉ',
          dataIndex: 'address',
        }
        ,
        {
          title: 'Thời gian',
          dataIndex: 'inteval',
        }, 
        {
            title: 'Giá tour',
            render: (record) => {
              return (
                <>
                 {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
                }).format(record.price)}
                </>
              );
            }
        },
        {
          title: 'Hình ảnh',
          render: (record) => {
            return (
              <>
               {record.image[0]?<img src={record.image[0].url} width='80px'></img>:<>...</>}
              </>
            );
          },
        },
        {
          title: 'Hành trình',
          key:'10',
          render: (record) => {
            return (
              <Button onClick={()=>xem(record,record.hanhtrinh)}>Xem</Button>
            )}
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
            title: "Hành động",
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
      const xem =(record,hanhtrinh) => {
        form.setFieldsValue({hanhtrinh});
        setId(record.id)
        setTitle(record.title)
        setSubTitle(record.subTitle)
        setIdCategory(record.idCategory)
        setAddress(record.address)
        setDescribe(record.describe)
        setInteresting(record.interesting)
        setInteval(record.inteval)
        setVehicle(record.vehicle)
        setPrice(record.price)
        setSale(record.sale)
        setImage(record.image)
        setStatus(record.status);
        setHanhtrinh(record.hanhtrinh)
        setIdService(record.idService)
        //console.log(hanhtrinh)
        setOpen1(true);
      };

      const callbackFunction = (childData) => {
        if(childData){
              fetchData()
        }
        setOpen2(false)
      }
    
      const showDrawer =(record) => {
        setId(record.id)
        setTitle(record.title)
        setSubTitle(record.subTitle)
        setIdCategory(record.idCategory)
        setAddress(record.address)
        setDescribe(record.describe)
        setInteresting(record.interesting)
        setInteval(record.inteval)
        setVehicle(record.vehicle)
        setPrice(record.price)
        setSale(record.sale)
        setImage(record.image)
        setStatus(record.status);
        setHanhtrinh(record.hanhtrinh)
        setIdService(record.idService)
        console.log(record.hanhtrinh)
        setOpen(true);
      };

    const  deleteHandle= async(id)=>{
        if(window.confirm("Xác nhận xóa")){
        const xoa = await axios.delete(BaseUrl+'tour/'+id)
        fetchData()
        toast.success(xoa?.data);
        }  
      }
      const [ids,setIds]=useState([]);
      const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          setIds(selectedRowKeys);
        },
        getCheckboxProps: (record) => ({
          disabled: record.id === 'Disabled User',
          // Column configuration not to be checked
          name: record.id,
        }),
      };
      const deleteList=async(ids)=>{
        if(window.confirm("Xác nhận xóa")){
        try {  
          const tour = await axios.delete(BaseUrl+'tour/deletelist/'+ids)
          toast.info(tour?.data)
          fetchData();
        } catch (error) {
          console.error(error);
        }
      }
      }
    
    async function fetchData() {
      try {  
        const tour = await axios.get(BaseUrl+'tour/all')
        let arr=tour?.data;
        arr.map((item)=>{
          Object.assign(item,{key:item.id})
        })
        setTours(arr)
        const category = await axios.get(BaseUrl+'category/active')
        setCategories(category?.data)
        const services = await axios.get(BaseUrl+'service/active')
        setService(services?.data)
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => {
      fetchData();
    }, [tours]);
    
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
         // setImage(null);
        })
        .catch((error) => {
          console.log(error.message);
        });
        onSuccess=(e)=>{
                
        }
        
    }
    
    const handSubmit = async(values)=>{
      if(values.hanhtrinh)
      console.log(values)
        if(window.confirm("Xác nhận cập nhật")){
        let regObj = {id,title,subTitle,image,describe,interesting,address,inteval,vehicle,price,sale,status,hanhtrinh:values.hanhtrinh?values.hanhtrinh:hanhtrinh,idCategory,idService};
        console.log(regObj); 
        try{
            const res= await axios.put(BaseUrl+'tour', regObj);    
            console.log(res?.data);  
             toast.success("thanh cong")
             fetchData()
             setOpen(false)
             setOpen1(false)
          }catch(err){alert('Khong co ket noi');}
        }
    }

        const handleChangeCate = (value) => {
            setIdCategory(value)
            
        };
        const handleChangeService = (value) => {
          setIdService(value)
          console.log(`selected ${value}`);
      };

//


    const onChange = (infor,fileList) => {
    console.log(infor)
    const new_arr = image.filter(item => item !== infor);
    console.log(new_arr)
    setImage(new_arr)

  };
  
    return (
    <>
    <Row >
      <Col push={20}>
        <Button type='primary' onClick={()=>{setOpen2(true)}}>Thêm mới</Button>
       {ids==null||ids.length==0?<></>:<Button type='primary' onClick={()=>{deleteList(ids)}}>Xóa</Button>}
      </Col>
    </Row>
    
      <Table rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }} columns={columns} dataSource={tours} loading={loading}/> 
      <Modal
        title="Chi tiết tour"
        okText='Cập nhật'
        cancelText='thoát'
        footer={null}
        okType='primary'
        centered
        open={open}
        onOk={handSubmit}
        onCancel={() => setOpen(false)}
        width={1000}   
      >         
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 1000 }}
        onFinish={handSubmit}
      >
       
    <Row gutter={[24, 0]}>
        <Col span={12}>
          <Form.Item label="Title"> 
          <Input value={title} onChange={(e)=>{setTitle(e.target.value)}} required />
        </Form.Item></Col>
        <Col span={12}><Form.Item label="Subtitle">
          <Input value={subTitle} onChange={(e)=>{setSubTitle(e.target.value)}} />
        </Form.Item></Col>
    </Row>  
    <Row gutter={[24, 0]}>
        <Col span={12}>
            <Form.Item label="Danh mục">
            <Select required
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

        <Col span={12}>
          <Form.Item label="Trạng thái">
        
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
      <Button type="primary" htmlType="submit">
        Save
      </Button>
      <Button type="dashed" onClick={()=>{setOpen(false)}}>
        Canncel
      </Button>
    </Form.Item>
         </Col>
    </Row> 
    
     
      </Form>
      </Modal>
      <Modal
        title={"Hành trình cụ thể tour "+title}
        footer={null}
        okText=''
        cancelText='Thoát'
        okType='ghost'
        centered
        open={open1}
        onOk={handSubmit}
        onCancel={() => setOpen1(false)}
        width={800}   
      >         
      <Form
    form={form}
    name="dynamic_form_nest_item"
    onFinish={handSubmit}
    style={{
      maxWidth: 900,
    }}
    autoComplete="off"
  >
    <Form.List name="hanhtrinh">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              key={key}
              style={{
                display: 'flex',
                marginBottom: 8,
              }}
              align="baseline"
            >
              <Form.Item
                {...restField}
                name={[name, 'time']}
                rules={[
                  {
                    required: true,
                    message: 'Nhập thời gian',
                  },
                ]}
              >
                <TextArea rows={1} placeholder='Thời gian' autoSize={{ minRows: 1, maxRows: 3 }} style={{
                  resize:'revert',
                  
                  }} />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'todo']}
                rules={[
                  {
                    required: true,
                    message: 'Nhập lịch',
                  },
                ]}
                
              >
                <TextArea rows={1} placeholder='to do' autoSize={{ minRows: 1, maxRows: 3 }} style={{
                  resize:'revert',
                  
                  width: 500,
        
      }}  />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
             Thêm mới
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Save
      </Button>
      <Button type="dashed" onClick={()=>{setOpen1(false)}}>
        Canncel
      </Button>
    </Form.Item>
  </Form>
      </Modal>
      <Modal
        title={"Hành trình cụ thể tour "+title}
        footer={null}
        okText=''
        cancelText='Thoát'
        okType='ghost'
        centered
        open={open2}
        onOk={handSubmit}
        onCancel={() => setOpen2(false)}
        width={1000}   
      >         
      <CreateTourPage parentCallback={callbackFunction}/>
      </Modal>
      </>
    )
}

export default ListTourPage