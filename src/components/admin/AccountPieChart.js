import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import BaseUrl from '../../util/BaseUrl';
import axios from 'axios';
import { Spin } from 'antd';
ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement);

function AccountPieChart() {
    const [loading,setLoading] =useState(true);
    const [labels,setLables] =useState([]);
    const [data,setData] =useState([]);
    async function fetchData(top) {
        setLoading(true)
        try {  
          const res = await axios.get(BaseUrl+'thongke/taikhoan')
          setData([res?.data.admin,res?.data.seller,res?.data.user]);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false)
        }
      }
    useEffect(() => {
        fetchData()
      }, []);

    return (
    <Spin spinning={loading}>

<Doughnut

        data={{
          labels: [
            "Admin",
            "Seller",
            "User"
          ],
          datasets: [
            {
              label: "Số lượng tài khoản",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850"
              ],
              data: data
            }
          ]
        }}
        option={{
          title: {
            display: true,
            text: "Predicted world population (millions) in 2050"
          }
        }}
      />
    </Spin>
  )
}

export default AccountPieChart