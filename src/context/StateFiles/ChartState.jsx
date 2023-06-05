import React, {useContext, useEffect, useState} from 'react'
import ChartContext from '../ContextFiles/ChartContext'
import TransactionContext from '../ContextFiles/TransactionContext'
const ChartState = (props)=> {
  const TransactionProps = useContext(TransactionContext)
  const [incomeChart,setIncomeChart] = useState({})
  const [expenseChart,setExpenseChart] = useState({})
  const [balanceChart,setBalanceChart] = useState({})
  const setIncomeCharValues = () => {
    const incomeByDate ={}
    const incomeByDateArray = TransactionProps.income.reverse()
    //console.log(incomeByDateArray)
    incomeByDateArray.forEach((el)=> {
      const { date, amount } = el;
      let newDate = date.split("T")[0];
      if (incomeByDate[newDate]) {
        incomeByDate[newDate] += amount;
      } else {
        incomeByDate[newDate] = amount;
      }
    })
    console.log(incomeByDate)
    setIncomeChart(incomeByDate)
  }
  const setExpenseCharValues = () => {
    const expenseByDate ={}
    const expenseByDateArray = TransactionProps.expense.reverse()
    expenseByDateArray.forEach((el)=> {
      const { date, amount } = el;
      let newDate = date.split("T")[0];
      if (expenseByDate[newDate]) {
        expenseByDate[newDate] += amount;
      } else {
        expenseByDate[newDate] = amount;
      }
    })
    console.log(expenseByDate)
    setExpenseChart(expenseByDate)
  }
  const setBalanceCharValues = () => {
    // const balanceByDate = {}
    // const incomeXValues = Object.keys(incomeChart)
    // const incomeYValues = Object.values(incomeChart)
    // const expenseXValues = Object.keys(expenseChart)
    // const expenseYValues = Object.values(expenseChart)
    const allKeys = [...new Set([...Object.keys(incomeChart), ...Object.keys(expenseChart)])];
    // console.log(allKeys)
  const result = {};

  for (const key of allKeys) {
    const value1 = incomeChart[key] || 0;
    const value2 = expenseChart[key] || 0;
    result[key] = value1 - value2;
  }
  console.log(result)
  setBalanceChart(result)
  }

  useEffect(()=> {
    setIncomeCharValues()
    
  },[TransactionProps.income])
  useEffect(()=> {
    setExpenseCharValues()
    // console.log(Object.values(incomeChart))
    // console.log(Object.keys(incomeChart) || Object.keys(expenseChart))
  },[TransactionProps.expense])
  useEffect(()=> {
    setBalanceCharValues()
  },[incomeChart,expenseChart])
    return (
        <ChartContext.Provider value={{incomeChart,setIncomeChart,expenseChart,setExpenseChart,balanceChart,setBalanceChart,setIncomeCharValues,setExpenseCharValues,setBalanceCharValues}}>
           
            {props.children}
        </ChartContext.Provider>
    )
    }
export default ChartState 