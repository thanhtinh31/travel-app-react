import React from 'react'
import axios from 'axios';
import BaseUrl from '../../util/BaseUrl';
import { useState } from 'react';
export const CheckoutSuccess = () => {
  let c=[]
  async function fetchData() {
    try {
      const result = await axios.get(BaseUrl+'category')
      console.log(result.data);
      c=(result.data.content)
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
  console.log(c);
  return (
    <div>
ầddafa
    </div>
  )
}
