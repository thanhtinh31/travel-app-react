import { Button } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import SellerLayout from '../../layout/SellerLayout'
import BaseUrl from '../../util/BaseUrl';

const ListTourPage = () => {
  const [page,setPage] = useState(1);
  const [tours, setTours] = useState([]);
  const [categories,setCategories] = useState([]);
  const [totalElements,setTotalElements] =useState(1);
  const [totalPages,setTotalPages] =useState(1);
    const onHandlePage= async (e)=>{
    console.log(e);
    setPage(e);
    fetchData(e);
    }
    
  const editHandle=(e)=>{
    window.location='/edittour?id='+e;
  }
  const  deleteHandle= async(e)=>{    
    if(window.confirm("Xác nhận xóa")){
    console.log(e);
    const xoa = await axios.delete(BaseUrl+'tour/'+e)
    fetchData(page);
    toast.success(xoa?.data);
    }
  }
  const viewHandle=(e)=>{
    window.location='/edittour?id='+e;
  }
  
  async function fetchData(p) {
    try {  
      const categories = await axios.get(BaseUrl+'category')
      const tours = await axios.get(BaseUrl+'tour?size=10&page='+p)
      setCategories(categories.data.content)
      setTours(tours.data.content)
      setTotalElements(tours.data.totalElements)
      setTotalPages(tours.data.totalPages)
    } catch (error) {
      console.error(error);
    }
  }
  useState(() => {
    fetchData(1);
  }, []);
  
  return (
    <>
        <SellerLayout>
        <Button onClick={(e)=>{window.location='/addtour'}}>Thêm Mới Tour</Button>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col" class="px-6 py-3">
                    Tour
                </th>
                <th scope="col" class="px-6 py-3">
                    Address
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Sale
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>

            {tours.map((item) => {
          return(<tr key={item.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.title}
                </th>
                <td class="px-6 py-4">
                    {item.address}
                </td>
                <td class="px-6 py-4">
                    {item.price}
                </td>
                <td class="px-6 py-4">
                    {item.sale}
                </td>
                <td class="px-6 py-4">
                    <button onClick={()=>editHandle(item.id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button> / 
                    <button onClick={()=>viewHandle(item.id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</button>/
                    <button onClick={()=>deleteHandle(item.id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                </td>
            </tr>)})}
           
        </tbody>
    </table>
    <nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Page {page} of {totalPages}</span>
        
        
         <ul class="inline-flex items-center -space-x-px">
            <li> <button onClick={()=>onHandlePage(page-1) } disabled={page<=1} >
                <a href="#" class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                </a>
                </button>
            </li>
            <>___{page}___</>
            
            <li><button onClick={()=>onHandlePage(page+1)} disabled={page>=totalPages} >
                <a href="#" class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a>
            </button>
            </li>
        </ul> 
    </nav>
</div>


        </SellerLayout>
    </>
  )
}

export default ListTourPage