import { async } from '@firebase/util';
import { Textarea } from '@material-tailwind/react';
import axios from 'axios';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react'
import { toast } from "react-toastify";
import { storage } from '../../firebase';
import AdminLayout from '../../layout/AdminLayout';
import BaseUrl from '../../util/BaseUrl';

function AddCategoryPage() {
    const [name,setName] = useState(null);
    const [content,setContent] = useState(null);
    const [image,setImage] = useState(null);
    const [status,setStatus] =useState(true);
    
    
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
      console.log(image);   
      let regObj = {name,content,image,status};
      console.log(regObj);
      try{
        const res= await axios.post(BaseUrl+'category', regObj);
        if(res?.data.status=="0"){
            toast.error(res?.data.message)
        }else{    
        console.log(res?.data);  
        toast.success("Thêm mới thành công")
        window.location='/listcategory';
        }
  
      }catch(err){
        alert('Khong co ket noi');}
      }

    useState(() => {
      
      
      
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
          <button  onClick={handSubmit}>Create</button> || <button >Cancle</button>
        </form>
        </AdminLayout>
      </>
  )
}

export default AddCategoryPage