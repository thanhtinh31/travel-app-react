import React, { useEffect, useState } from 'react'
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement,Title,Tooltip,LegendElement, Legend, CategoryScale, LinearScale, BarElement,LineElement ,Point,PointElement,ChartComponent} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import BaseUrl from '../../util/BaseUrl';
import axios from 'axios';
import { Spin } from 'antd';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function DoanhThuTheoNgay(props) {
  
    const [labels,setLables]=useState([]);
    const [data,setData] =useState([]);

    async function fetchData(date) {
        try {  
          console.log(date)
          const res = await axios.get(BaseUrl+'thongke/doanhthudenngay?date='+date)
          let a=[]
          let b=[]
          res?.data.map((item)=>{
            a.push(item.date)
            b.push(item.doanhthu)
          })
          setData(b)
          setLables(a)

        } catch (error) {
          console.error(error);
        }
      }
    useEffect(() => {
        fetchData(props.date)
      }, [props.date]);
  return (
    <Line
    data={{
      labels: labels,
      datasets: [
        {
          data: data,
          label: "Doanh thu (vnd)",
          borderColor: "#8e5ea2",
          fill: false
        }
       
      ]
    }}
    options={{
      title: {
        display: true,
        text: "World population per region (in millions)"
      },
      legend: {
        display: true,
        position: "bottom"
      }
    }}
  />

  )
}

export default DoanhThuTheoNgay