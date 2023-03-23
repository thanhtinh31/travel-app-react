import { async } from '@firebase/util';
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from "react-toastify";
import AdminLayout from '../../layout/AdminLayout';
import BaseUrl from '../../util/BaseUrl';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../firebase';
import SellerLayout from '../../layout/SellerLayout';
const EditTourPage = () => {
  const [title,setTitle] = useState(null);
  const [subTitle,setSubTitle] = useState(null);
  const [image,setImage] = useState([]);
  const [describe,setDescribe] = useState(null);
  const [interesting,setInteresting] = useState("");
  const [address,setAddress] = useState(null);
  const [inteval,setInteval] = useState(null);
  const [vehicle,setVehicle] = useState(null);
  const [price,setPrice] = useState(0);
  const [sale,setSale] = useState(0);
  const [status,setStatus] = useState(true);
  const [account,setAccount] = useState(null);
  const [idCategory,setIdCategory] = useState(null);
  const [tour,setTour] =useState(null);
  const [categories,setCategories] = useState([]);
  var url_string = window.location;
  var urla = new URL(url_string);
  var id = urla.searchParams.get("id");

  const [url, setUrl] = useState(null);
  const [list,setList] = useState(null);
  const images=[]

  const getTourById=async()=>{
    try{
        const res= await axios.get(BaseUrl+'tour/'+id);   
        console.log(res?.data.image);
        setTour(res?.data);  
        setInteresting(res?.data.interesting)
        setTitle(res?.data.title)
        setSubTitle(res?.data.subTitle)
        setImage(res?.data.image)
        setDescribe(res?.data.describe)
        setAddress(res?.data.address)
        setInteval(res?.data.inteval)
        setSale(res?.data.sale)
        setPrice(res?.data.price)
        setIdCategory(res?.data.idCategory)
      }catch(err){alert('Khong co ket noi'); }
    
  }
  async function getlistcategory() {
    try {
      const categories = await axios.get(BaseUrl+'category?size=100')
      setCategories(categories.data.content) 
    } catch (error) {console.error(error);}
  }
  const onChange = (e) => {
    setList(e.target.files)
    
  };

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
  }
  const handSubmit = async(e)=>{
    e.preventDefault();
    let regObj = {id, title, subTitle,image,describe,interesting,address,inteval,vehicle,price,sale,status,account,idCategory};
    try{
      console.log(regObj);
        const res= await axios.put(BaseUrl+'tour', regObj);    
        console.log(res?.data);  
        toast.success("thanh cong")
      }catch(err){alert('Khong co ket noi');}
  }
  useState(() => {  
    getTourById();
    getlistcategory();
    }, []);
  return (
    <>
      <SellerLayout>
      <form>
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
        type={Text}
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
        <select  className="form-control"
        value={idCategory}
        onChange={(e) => setIdCategory(e.target.value)}>
          <option >Danh mục tour</option>
        { categories.map((item) => {
          return(
        <option value={item.id} >{item.name}</option>
          )})
        }
        </select>
        <br/>
        image
        <input
        type="file" multiple onChange={onChange}
        >
        </input>
        <button onClick={uploadImageHandle} >Upload image to cloud</button> {(image!=null)?image.map((item) => {return(<img src={item}></img>)}):<></>}
        <br/>
          <input type="checkbox" id="action" value="1" checked={status} onChange={()=>{setStatus(!status);console.log(status)}}/> <label>active</label>
        <br/>
        <button type='submit' onClick={handSubmit}>Update</button>
        <button type='submit' >Cancle</button>
      </form>
      </SellerLayout>
    </>
  )
}

export default EditTourPage