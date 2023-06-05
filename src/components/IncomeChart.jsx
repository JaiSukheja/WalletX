import React, { useContext, useEffect, useState } from 'react'
import {} from 'react-chartjs-2'
import ChartContext from '../context/ContextFiles/ChartContext'
import {Chart as ChartJS} from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
const IncomeChart = () => {
    const chartProps = useContext(ChartContext)
    const [incomeData,setIncomeData] = useState({
        labels:Object.keys(chartProps.balanceChart),
        datasets: [
            {
              label: "Income",
              data: Object.values(chartProps.incomeChart),
              backgroundColor: [
                "green",
              ],
              borderColor: [
                "green",
              ],
              borderWidth: 1,
            },
            {
                label: "Balance",
              data: Object.values(chartProps.balanceChart),
              backgroundColor: [
                "blue",
              ],
              borderColor: [
                "blue",
              ],
              borderWidth: 1,
            }
          ],
    })
    useEffect(()=> {
        setIncomeData({
            labels:Object.keys(chartProps.balanceChart),
            datasets: [
                {
                  label: "Income",
                  data: Object.values(chartProps.incomeChart),
                  backgroundColor: [
                    "green",
                  ],
                  borderColor: [
                    "green",
                  ],
                  borderWidth: 1,
                },
                {
                    label: "Balance",
                  data: Object.values(chartProps.balanceChart),
                  backgroundColor: [
                    "blue",
                  ],
                  borderColor: [
                    "blue",
                  ],
                  borderWidth: 1,
                }
              ],
        })
    },[chartProps.incomeChart])
  return (
    <Line data={incomeData} />
  )
}

export default IncomeChart
