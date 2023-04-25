import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import BaseUrl from '../../util/BaseUrl';
import axios from 'axios';
ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement);
function DetailSchedule(props) {
    const [id,setId] =useState(props.id)
    const [dulieu,setdulieu]=useState([])
    async function fetchData(e) {
        try {  
          const res = await axios.get(BaseUrl+'invoice/thongkebyidschedule/'+e)
          setdulieu([res?.data.choxacnhan,res?.data.chuathanhtoan,res?.data.dathanhtoan,res?.data.dahuy])
        } catch (error) {
          console.error(error);
        }
      }
    useEffect(() => {
        setId(props.id)
        fetchData(props.id)
      }, [props]);
  return (
    <div>
   <Bar
    data={{
      labels: [
        "Chờ xác nhận",
        "Chưa thanh toán",
        "Đã thanh toán",
        "Đã hủy",
      ],
      datasets: [
        {
          label: "Biểu đồ thống kê",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#c45850",
            "#e8c3b9"
          ],
          data: dulieu
        }
      ]
    }}
    options={{
      legend: { display: false },
      title: {
        display: true,
        text: "Predicted world population (millions) in 2050"
      }
    }}
  />
    </div>
  )
}

export default DetailSchedule