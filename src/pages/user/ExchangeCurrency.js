import React from 'react'
import tourservice from '../../service/tourservice'
import { useState } from 'react'
import { useEffect } from 'react';
function ExchangeCurrency() {
  const [tour,setTour] =useState([]);
  useEffect(() => {
  setTour();
  const res=tourservice.getTour();
  console.log(res)
//   console.log(tourservice.getTour().then((value) => {
//     console.log(value);
//   }))
  //console.log(tourservice.getTour());
  }, []);
  return (
    <div>
    â
    </div>
  )
}

export default ExchangeCurrency