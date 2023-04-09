// import { Button } from '@material-tailwind/react';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify';
// import SellerLayout from '../../layout/SellerLayout'
// import BaseUrl from '../../util/BaseUrl';
// import Pagination from 'react-js-pagination';

// const ListTourPage = () => {
//   const [page,setPage] = useState(1);
//   const [tours, setTours] = useState([]);
//   const [categories,setCategories] = useState([]);
//   const [totalElements,setTotalElements] =useState(1);
//   const [totalPages,setTotalPages] =useState(1);
//     const onHandlePage= async (e)=>{
//     console.log(e);
//     setPage(e);
//     fetchData(e);
//     }
//   const editHandle=(e)=>{
//     window.location='/edittour?id='+e;
//   }
//   const  deleteHandle= async(e)=>{    
//     if(window.confirm("Xác nhận xóa")){
//     console.log(e);
//     const xoa = await axios.delete(BaseUrl+'tour/'+e)
//     fetchData(page);
//     toast.success(xoa?.data);
//     }
//   }
//   const viewHandle=(e)=>{
//     window.location='/edittour?id='+e;
//   }
  
//   async function fetchData(p) {
//     try {  
//       const categories = await axios.get(BaseUrl+'category')
//       const tours = await axios.get(BaseUrl+'tour?size=10&page='+p)
//       setCategories(categories.data.content)
//       setTours(tours.data.content)
//       setTotalElements(tours.data.totalElements)
//       setTotalPages(tours.data.totalPages)
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   useState(() => {
//     fetchData(1);
//   }, []);
  
//   return (
//     <>
//         <SellerLayout>
//         <Button className='button' onClick={(e)=>{window.location='/addtour'}}>Thêm Mới Tour</Button>
        
// <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    
//     <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//         <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
                
//                 <th scope="col" class="px-6 py-3">
//                     Tour
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Address
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Price
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Sale
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Action
//                 </th>
//             </tr>
//         </thead>
//         <tbody>

//             {tours.map((item) => {
//           return(<tr key={item.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                
//                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     {item.title}
//                 </th>
//                 <td class="px-6 py-4">
//                     {item.address}
//                 </td>
//                 <td class="px-6 py-4">
//                     {item.price}
//                 </td>
//                 <td class="px-6 py-4">
//                     {item.sale}
//                 </td>
//                 <td class="px-6 py-4">
//                     <button onClick={()=>editHandle(item.id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View & Edit</button> / 
//                     <button onClick={()=>viewHandle(item.id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Schedule</button> /
//                     <button onClick={()=>deleteHandle(item.id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
//                 </td>
//             </tr>)})}
           
//         </tbody>
//     </table>
//     <nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
//         <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Page {page} of {totalPages}</span>
        
        
//          <ul class="inline-flex items-center -space-x-px">
//             <li> <button onClick={()=>onHandlePage(page-1) } disabled={page<=1} >
//                 <a href="#" class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                     <span class="sr-only">Previous</span>
//                     <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
//                 </a>
//                 </button>
//             </li>
//             <>___{page}___</>
            
//             <li><button onClick={()=>onHandlePage(page+1)} disabled={page>=totalPages} >
//                 <a href="#" class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                     <span class="sr-only">Next</span>
//                     <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
//                 </a>
//             </button>
//             </li>
//         </ul> 
//     </nav>
// </div>

//         </SellerLayout>
//     </>
//   )
// }

// export default ListTourPage


import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import AdminLayout from '../../layout/AdminLayout';
import BaseUrl from '../../util/BaseUrl';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { PlusOutlined } from '@ant-design/icons';
import { Button, Table, Modal, Input, Drawer, Space, Checkbox, Select, Upload, Form, Radio, Col, Row, InputNumber } from "antd";
import firebase, { db, storage, storageRef } from '../../firebase';
import TextArea from 'antd/es/input/TextArea';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import SellerLayout from '../../layout/SellerLayout';

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
    const [tours, setTours] = useState([]);
    const [images,setImages]=useState([]);
    const columns = [
        {
          title: 'Tour',
          dataIndex: 'title',
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
            dataIndex: 'price',
        },
        {
            title: 'Lịch trình',
            dataIndex: '1',
        },
        
        {
          title: 'Hình ảnh',
          render: (record) => {
            return (
              <>
               <img src={record.image[0].url} width='80px'></img>
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
        console.log(record.status)
        setOpen(true);
      };
   
    const [categories, setCategories] = useState([]);

    const  deleteHandle= async(id)=>{
        if(window.confirm("Xác nhận xóa")){
        const xoa = await axios.delete(BaseUrl+'tour/'+id)
        fetchData()
        toast.success(xoa?.data);
        }  
      }
    
    async function fetchData() {
      try {  
        const tour = await axios.get(BaseUrl+'tour?size=1000')
        setTours(tour?.data.content)
        const category = await axios.get(BaseUrl+'category?size=1000')
        setCategories(category?.data.content)
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => {
      fetchData();
      console.log(image)
    }, []);
    
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
    
    const handSubmit = async(e)=>{
        e.preventDefault();
        if(window.confirm("Xác nhận cập nhật")){
        let regObj = {id,title,subTitle,image,describe,interesting,address,inteval,vehicle,price,sale,status,idCategory};
        console.log(regObj)
        try{
          console.log(regObj);
            const res= await axios.put(BaseUrl+'tour', regObj);    
            console.log(res?.data);  
             toast.success("thanh cong")
             fetchData()
             setOpen(false)
          }catch(err){alert('Khong co ket noi');}
        }
    }

        const handleChangeCate = (value) => {
            setIdCategory(value)
            console.log(`selected ${value}`);
        };


//
const [fileList, setFileList] = useState([
    {
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
]);

  const onChange = (infor,fileList) => {
    console.log(infor)
    const new_arr = image.filter(item => item !== infor);
    console.log(new_arr)
    setImage(new_arr)

  };
  
    return (<>
      <Table rowKey={tours.id} columns={columns} dataSource={tours} loading={loading}/> 
      <Modal loading
        title="Chi tiết tour"
        okText='Cập nhật'
        cancelText='thoát'
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
        style={{ maxWidth: 1000 }}
      >
       
    <Row gutter={[24, 0]}>
        <Col span={12}><Form.Item label="Title">
          <Input value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        </Form.Item></Col>
        <Col span={12}><Form.Item label="Subtitle">
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
    //optionLabelProp="label"
  >
      {categories.map((item) => {
            return (
    <Option value={item.id}  >
      <Space>
        {item.name}
      </Space>
    </Option>
            )})}
   
  </Select>
        </Form.Item></Col>
        <Col span={12}><Form.Item label="Địa chỉ">
          <Input value={address} onChange={(e)=>{setAddress(e.target.value)}} />
        </Form.Item></Col>
    </Row> 

    <Row gutter={[24, 0]}>
        <Col span={12}><Form.Item label="Mô tả">
        <TextArea rows={4} value={describe} onChange={(e)=>{setDescribe(e.target.value)}}/>
        </Form.Item></Col>
        <Col span={12}><Form.Item label="Hấp dẫn">
        <TextArea rows={4} value={interesting} onChange={(e)=>{setInteresting(e.target.value)}}/>
        </Form.Item></Col>
    </Row>  
    <Row gutter={[24, 0]}>
        <Col span={12}><Form.Item label="Thời gian">
          <Input value={inteval} onChange={(e)=>{setInteval(e.target.value)}} />
        </Form.Item></Col>
        <Col span={12}><Form.Item label="Phương tiện">
          <Input value={vehicle} onChange={(e)=>{setVehicle(e.target.value)}} />
        </Form.Item></Col>
    </Row>  
    <Row gutter={[24, 0]}>
    <Col span={12}><Form.Item label="Giá tour">
    <InputNumber min={0} value={price} defaultValue={0} onChange={(e)=>{setPrice((e))}} />VNĐ
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
        <Col span={12}><Form.Item label="Hinh anh">

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

        <Col span={12}><Form.Item label="Status">
        
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
        </Form.Item></Col>
    </Row>  
     



        {/* <Form.Item label="Title">
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
        </Form.Item> */}
      </Form>
      </Modal></>
    )
}

export default ListTourPage