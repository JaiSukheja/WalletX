import React, {useContext, useEffect, useState} from 'react'
import TransactionContext from '../ContextFiles/TransactionContext'
import ProfileContext from '../ContextFiles/ProfileContext'

const TransactionState = (props)=> {
    const [transactions, setTransactions] = useState([])
    const [income, setIncome] = useState([])
    const [expense, setExpense] = useState([])
    const [balance, setBalance] = useState(0)
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalExpense, setTotalExpense] = useState(0)
    const profileProps = useContext(ProfileContext)
  
    const fetchTransactions = async () => {
     
      try {
        if(profileProps.checkUser) {
  
          const res = await fetch(`http://localhost:5000/api/transaction/fetchalltransactions/${profileProps.User._id}`)
          const data = await res.json()
          console.log(data)
          setTransactions(data)
          const income = data.filter((el)=> {
            if(el.isIncome) {
              return el
            }
          })
          // console.log(income)
          setIncome(income)
          const expense = data.filter((el)=> {
            if(!el.isIncome) {
              return el
            }
          }
          )
          // console.log(expense)
          setExpense(expense)
        }
      } catch (err) {
        console.error(err)
      }
    }
    useEffect(() => {
      fetchTransactions()
     
    }, [profileProps.checkUser])
    const getBalance = () => {
      let incomeAmount = 0
      let expenseAmount = 0
      income.forEach((el)=> {
        incomeAmount+=el.amount
      })
      expense.forEach((el)=> {
        // console.log(el.amount)
        expenseAmount+=el.amount
      })
      console.log(incomeAmount,expenseAmount)
      setBalance(incomeAmount-expenseAmount)
      setTotalIncome(incomeAmount)
      setTotalExpense(expenseAmount)
    }
  
    useEffect(() => { 
      getBalance()
    }, [income,expense])
    return (
        <TransactionContext.Provider value={{transactions,setTransactions,income,setIncome,expense,setExpense,balance,setBalance,totalIncome,setTotalIncome,totalExpense,setTotalExpense,fetchTransactions}}>
           
            {props.children}
        </TransactionContext.Provider>
    )
    }
export default TransactionState 