import React, { useContext } from "react";
import "../CSS/Dashboard.css";
import "../CSS/Expence.css";
import Sidebar from './Sidebar'
import ProfileContext from "../context/ContextFiles/ProfileContext";
import TransactionContext from "../context/ContextFiles/TransactionContext";
import ExpenseChart from "./ExpenseChart";
const Expence = () => {
  const profileProps = useContext(ProfileContext)
  const transactionProps = useContext(TransactionContext)
  const addExpense = async(e) => {

    e.preventDefault()
    const ExpenceDescription = document.getElementById('expenceDescription')
    const ExpenceAmount = document.getElementById('expenceAmount')
    // console.log(ExpenceDescription,ExpenceAmount)
    let expObj = {
      description:ExpenceDescription.value,
      amount:ExpenceAmount.value,
      isIncome:false,
      user:profileProps.User._id
    }
    console.log(expObj)
    const response = await fetch('http://localhost:5000/api/transaction/addtransaction', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(expObj), // body data type must match "Content-Type" header
    });
    const data = await response.json()
    console.log(data)
    transactionProps.setTotalExpense(transactionProps.totalExpense+parseInt(ExpenceAmount.value))
    transactionProps.setBalance(transactionProps.balance-parseInt(ExpenceAmount.value))
    transactionProps.fetchTransactions()
  }

  return (
    <>
    <div className="main" >
    <Sidebar/>
    <div className="Expence">
      <div class="content">
        <h2>Expense</h2>
      </div>
      <div class="Expence-tracker">
        <div class="left">
          <div class="left-top">
            <div class="tracker-item">
              <h2>Expense</h2>
              <div class="amount">{transactionProps.totalExpense}</div>
            </div>
            <div class="tracker-item">
              <h2>Balance</h2>
              <div class="amount">{transactionProps.balance}</div>
            </div>
          </div>
          <div class="left-bottom">
            <div class="add">
              <h2>Add Expense</h2>
              
                
                  <input
                    type="text"
                    id="expenceDescription"
                    placeholder="Expence Description"
                  />

                  <input
                    type="number"
                    id="expenceAmount"
                    placeholder="Expence-Amount"
                  />
                
                <div class="form-control">
                  <button class="expenseSubmit"  type="submit" onClick={addExpense}>Add Expense</button>
                </div>
              
            </div>
          </div>
        </div>
        <div class="right">
           <div class="right-top">
              <div class="activityGraph">
                  <h2>Activity Graph</h2>
                  <div>
                      {/* <canvas id="activityGraphChart"></canvas> */}
                      <ExpenseChart/>
                  </div>
              </div>
          </div>
          {/* <div class="right-bottom">
              <div class="pieChart">
                  <h2>Monthly In Out</h2>
                  <canvas
                  id="pieChartGraph"
                  style="width: 100%; max-width: 800px; height: 280px"
                  ></canvas>
                  <hr />
              </div>
            </div>  */}
    </div>
      </div>
    </div>
    </div>
    
    </>
    
  );
};

export default Expence;
