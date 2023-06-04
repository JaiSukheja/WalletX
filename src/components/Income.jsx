import React, { useContext } from "react";
import "../CSS/Dashboard.css";
import "../CSS/Income.css";
import Sidebar from './Sidebar'
import ProfileContext from "../context/ContextFiles/ProfileContext";
import TransactionContext from "../context/ContextFiles/TransactionContext";

const Income = () => {
  const profileProps = useContext(ProfileContext)
  const transactionProps = useContext(TransactionContext)
  const addIncome = async(e) => {

    e.preventDefault()
    const IncomeDescription = document.getElementById('incomeDescription')
    const IncomeAmount = document.getElementById('incomeAmount')
    // console.log(ExpenceDescription,ExpenceAmount)
    let incObj = {
      description:IncomeDescription.value,
      amount:IncomeAmount.value,
      isIncome:true,
      user:profileProps.User._id
    }
    console.log(incObj)
    const response = await fetch('http://localhost:5000/api/transaction/addtransaction', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(incObj), // body data type must match "Content-Type" header
    });
    const data = await response.json()
    console.log(data)
    transactionProps.setTotalIncome(transactionProps.totalIncome+parseInt(IncomeAmount.value))
    transactionProps.setBalance(transactionProps.balance+parseInt(IncomeAmount.value))
  }
  return (
    <>
    <div className="main" style={{display:"flex", width:"95%",height:"90%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",gap:"10px"}}>
    <Sidebar/>
    <div className="income">
      <div class="content">
        <h1>Income</h1>
      </div>
      <div class="income-tracker">
        <div class="left">
          <div class="left-top">
            <div class="tracker-item">
              <h2>Income</h2>
              <div class="amount">{transactionProps.totalIncome}</div>
            </div>
            <div class="tracker-item">
              <h2>Balance</h2>
              <div class="amount">{transactionProps.balance}</div>
            </div>
          </div>
          <div class="left-bottom">
            <div class="add">
              <h2>Add Income</h2>
              <form id="income-form" action="">
                <div class="form-control">
                  <input
                    type="text"
                    id="incomeDescription"
                    placeholder="Income Description"
                  />

                  <input
                    type="number"
                    id="incomeAmount"
                    placeholder="Income amount"
                  />
                </div>
                <div class="form-control">
                  <button type="submit" onClick={addIncome}>Add Income</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="right">
          {/* <div class="right-top">
              <div class="activityGraph">
                  <h2>Activity Graph</h2>
                  <div>
                      <canvas id="activityGraphChart"></canvas>
                  </div>
              </div>
          </div>
          <div class="right-bottom">
              <div class="pieChart">
                  <h2>Monthly In Out</h2>
                  <canvas
                  id="pieChartGraph"
                  style="width: 100%; max-width: 800px; height: 280px"
                  ></canvas>
                  <hr />
              </div>
            </div> */}
    </div>
      </div>
    </div>
    </div>
    </>
    
  );
};

export default Income;
