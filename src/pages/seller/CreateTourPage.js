import { async } from '@firebase/util';
import { Textarea } from '@material-tailwind/react';
import axios from 'axios';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react'
import { toast } from "react-toastify";
import { storage } from '../../firebase';
import SellerLayout from '../../layout/SellerLayout';
import BaseUrl from '../../util/BaseUrl';

const CreateTourPage = () => {
  const [title,setTitle] = useState(null);
  const [subTitle,setSubTitle] = useState(null);
  const [image,setImage] = useState([]);
  const [describe,setDescribe] = useState(null);
  const [interesting,setInteresting] = useState(null);
  const [address,setAddress] = useState(null);
  const [inteval,setInteval] = useState(null);
  const [vehicle,setVehicle] = useState(null);
  const [price,setPrice] = useState(0);
  const [sale,setSale] = useState(0);
  const [status,setStatus] = useState(true);
  const [account,setAccount] = useState(null);
  const [idCategory,setIdCategory] = useState(null);
  const [categories,setCategories] = useState([]);
  const [list,setList] = useState(null);
  const images=[]
  const [url, setUrl] = useState(null);
  const uploadImageHandle=(e)=>{
    e.preventDefault();
    uploadHandle(list);
  }
  const uploadHandle=async(e)=>{
    console.log(e);
    for(let i=0;i<e.length;i++){
    console.log(e[i]);
    const imageRef = ref(storage, "images/"+e[i].name);
    await uploadBytes(imageRef, e[i])
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
            
            images.push(url);
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
    console.log(images);
    setImage(images);
    // for(let i=0;i<e.length;i++){
    //   const imageRef = ref(storage, "images/"+e[i].name);
    // uploadBytes(imageRef, e.target.files[i])
    //   .then(() => {
    //     getDownloadURL(imageRef)
    //       .then((url) => {
    //         setUrl(url);
            
    //         images.push(url);
    //         console.log(images);
    //       })
    //       .catch((error) => {
    //         console.log(error.message, "error getting the image url");
    //       });
    //     setImage(null);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
    // }
  }
  const onChange = (e) => {
    setList(e.target.files)
    
  };

  const handSubmit = async(e)=>{
    e.preventDefault();
    console.log(image);
    let regObj = { title, subTitle,image,describe,interesting,address,inteval,vehicle,price,sale,status,idAccount:"123",idCategory:checked};
    console.log(regObj);
    try{
      const res= await axios.post(BaseUrl+'tour', regObj);     
      toast.success(res?.data.message)
    }catch(err){alert('Khong co ket noi');}
  }

    const [checkList,setCheckList] = useState([]);
    const [checked, setChecked] = useState([]);
    const handleCheck = (event) => {
      var updatedList = [...checked];
      if (event.target.checked) {
        updatedList = [...checked, event.target.value];
      } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
      }
      setChecked(updatedList);
      console.log(updatedList);
    };
  
  useState(async() => {
    const res= await axios.get(BaseUrl+'category');
    setCheckList(res?.data.content)
    console.log(checked);
  }, []);

  return (
    <>
      <SellerLayout>
      <form encType="multipart/form-data">
        Title
        <input
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}>
        </input>
        <br/>
        SubTitle
        <input
        value={subTitle}
        onChange={(e)=>{setSubTitle(e.target.value)}}>
        </input>
        <br/>
        Describe
        <input
        value={describe}
        onChange={(e)=>{setDescribe(e.target.value)}}>
        </input>
        <br/>
        Address
        <input
        value={address}
        onChange={(e)=>{setAddress(e.target.value)}}>
        </input>
        <br/>
        price
        <input
        value={price}
        onChange={(e)=>{setPrice(e.target.value)}}>
        </input>
        <br/>
        Sale
        <input
        type={Number}
        value={sale}
        onChange={(e)=>{setSale(e.target.value)}}>
        </input>
        <br/>
        Interesting
        <input
        type={Textarea}
        value={interesting}
        onChange={(e)=>{setInteresting(e.target.value)}}>
        </input>
        <br/>
        Inteval
        <input
        type={Text}
        value={inteval}
        onChange={(e)=>{setInteval(e.target.value)}}>
        </input>
        <br/>
        vehicle
        <input
        type={Text}
        value={vehicle}
        onChange={(e)=>{setVehicle(e.target.value)}}>
        </input>
        <br/>
        Category
        <div className="list-container">
      {checkList.map((item, index) => (
         <div key={index}>
           <input value={item.id} type="checkbox" onChange={handleCheck} checked={checked.includes(item.id)}/>
           <span>{item.name}</span>
         </div>
      ))}
    </div>

        <br/>
        image
        <input
        type="file" multiple onChange={onChange}
        >
        </input>
        <button onClick={uploadImageHandle} >Upload image to cloud</button> {(image!=null)?image.map((item) => {return(<img src={item}></img>)}):<></>}
        <br/>
        <button  onClick={handSubmit}>Create</button> || <button >Cancle</button>
      </form>
      </SellerLayout>
    </>
  )
}

export default CreateTourPage