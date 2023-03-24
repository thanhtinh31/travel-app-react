import axios from 'axios';
import React, { useState } from 'react'
import UserLayout from '../../layout/UserLayout'
import BaseUrl from '../../util/BaseUrl';
function SearchPage() {
    var url_string = window.location;
    var url = new URL(url_string);
    var k= url.searchParams.get("key");
    const [key,setKey] = useState("");
    const [tours,setTours] = useState([])
    async function fetchData(k) {
        try {  
           console.log(k);
          const tours = await axios.get(BaseUrl+'tour/search?key='+k)
          setTours(tours?.data);
        } catch (error) {
          console.error(error);
        }
      }
    useState(() => {
        setKey(k);
        fetchData(k);
      }, []);
  return (
    <UserLayout>
        {tours.map((item) => {
            return(
                <div>
                        Title: {item.title}
                        Address: {item.address}
                </div>
            )})}
    </UserLayout>
  )
}
export default SearchPage