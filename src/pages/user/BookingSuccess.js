import React from 'react'
import DetailInvoice from '../../components/user/DetailInvoice'
import { Spin } from 'antd'
import { useState } from 'react'
import { useEffect } from 'react'

function BookingSuccess() {
    var url_string = window.location;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    const [loading,setLoading]=useState(true)
    
    useEffect(() => {
        setLoading(false)
      }, []);
  return (
    <Spin spinning={loading}>
    <div className="max-w-screen-lg mx-auto bg-white shadow-lg mt-28">
        {id?
        <DetailInvoice id={id}/>:<></>
        }
    </div>
    </Spin>
  )
}

export default BookingSuccess