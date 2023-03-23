import { async } from '@firebase/util';
import { Textarea } from '@material-tailwind/react';
import axios from 'axios';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react'
import { toast } from "react-toastify";
import { storage } from '../../firebase';
import AdminLayout from '../../layout/AdminLayout';
import BaseUrl from '../../util/BaseUrl';

function EditCategoryPage() {
    const [name,setName] = useState(null);
    const [content,setContent] = useState(null);
    const [image,setImage] = useState(null);
    const [status,setStatus] =useState(true);
    var url_string = window.location;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
  
  
    const getTourById=async()=>{
      try{
          const res= await axios.get(BaseUrl+'category/'+id);   
          console.log(res?.data.image);
          setName(res?.data.name);
          setContent(res?.data.content);
          setImage(res?.data.image);
          setStatus(res?.data.status);
        }catch(err){alert('Khong co ket noi'); }      
    }

    const onChange = async(e) => {
        console.log(e.target.files[0]);
      const imageRef = ref(storage, "images/"+e.target.files[0].name);
      await uploadBytes(imageRef, e.target.files[0])
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
    };
    
   
    
    const handSubmit = async(e)=>{
      e.preventDefault();
      if(window.confirm("Xác nhận cập nhật")){
      let regObj = {id,name,content,image,status};
      try{
        console.log(regObj);
          const res= await axios.put(BaseUrl+'category', regObj);    
          console.log(res?.data);  
          toast.success("thanh cong")
        }catch(err){alert('Khong co ket noi');}
        window.location='/listcategory';
      }
    }
    useState(() => {  
      getTourById();
      }, []);
    return (
      <>
        <AdminLayout>
        <form encType="multipart/form-data">
          Name
          <input
          value={name}
          onChange={(e)=>{setName(e.target.value)}}>
          </input>
          <br/>
          Content
          <input
          value={content}
          onChange={(e)=>{setContent(e.target.value)}}>
          </input>
          <br/>          
          image
          <input
          type="file" onChange={onChange}
          >
          </input>
          {(image!=null)? (<img src={image}></img>):<></>}
          <br/>
          <input type="checkbox" id="action" value="1" checked={status} onChange={()=>{setStatus(!status);console.log(status)}}/> <label>active</label>
          <br/>
          <button  onClick={handSubmit}>Update</button> || <button >Cancle</button>
        </form>
        </AdminLayout>
      </>
    )
}

export default EditCategoryPage