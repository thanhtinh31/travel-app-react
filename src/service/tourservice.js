import axios from 'axios';
import React, { Component } from 'react'
import BaseUrl from '../util/BaseUrl';

class Tour {
      getTour= async()=>{
        let tours= await axios.get(BaseUrl + "account?size=6");
        return tours.data;
     }
}
const tourservice = new Tour();
export default tourservice