import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import BaseUrl from '../../util/BaseUrl';
import axios from 'axios';
import { Spin } from 'antd';
ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement);
function DoanhThuTheoThangChart(props) {
    const [loading,setLoading] =useState(true);
    const [labels,setLables] =useState(["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12",]);
    const [data,setData] =useState([]);
    async function fetchData(year) {
        setLoading(true)
        try {  
          const res = await axios.get(BaseUrl+'thongke/doanhthutheothang/'+year)
          let arr=res?.data;
          setData([arr.t1,arr.t2,arr.t3,arr.t4,arr.t5,arr.t6,arr.t7,arr.t8,arr.t9,arr.t10,arr.t11,arr.t12]);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false)
        }
      }
    useEffect(() => {
        fetchData(props.year)
      }, [props.year]);

    return (
    <Spin spinning={loading}>

<Bar 
    data={{
      labels: labels,
      datasets: [
        {
          label: "Doanh thu theo tháng năm "+props.year,
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#c45850",
            "#e8c3b9",
          ],
          data: data
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
    </Spin>
  )
}

export default DoanhThuTheoThangChart