import axios from 'axios';
import React, { useState } from 'react'
import ItemTour from '../../components/user/ItemTour';
import BaseUrl from '../../util/BaseUrl';

function AddSchedulePage() {
 
  const [listSchedule,setListSchedule] = useState([]);
  
  useState(async() => {    
    const res= await axios.get(BaseUrl+'schedule/all');
    setListSchedule(res?.data)
    
  }, []);
return (
  <div className="checkList">
    <div className="title">Your CheckList:</div>
    <div className="list-container">
      {listSchedule.map((item) => (
         <div key={item.id}>
           <ItemTour data={item}></ItemTour>
         </div>
      ))}
    </div>
  </div>
);
}

export default AddSchedulePage