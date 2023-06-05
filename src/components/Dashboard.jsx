import React, { useContext } from 'react'
import '../CSS/Dashboard.css'
import Sidebar from './Sidebar'
import TransactionContext from '../context/ContextFiles/TransactionContext'
import ActivityGraph from './ActivityGraph'
const Dashboard = () => {
  const transactionProps = useContext(TransactionContext)
  return (
    <>
    <div className="main" style={{display:"flex", width:"95%",height:"90%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",gap:"10px"}}>
    <Sidebar/>
    <div className='dashboard'>
        <div className="content">
          <h2>Dashboard</h2>
        </div>
        <div className="tracker">
          <div className="tracker-item">
            <h2>Income</h2>
            <div className="amount">{transactionProps.totalIncome}</div>
          </div>
          <div className="tracker-item">
            <h2>Expense</h2>
            <div className="amount">{transactionProps.totalExpense}</div>
          </div>
          <div className="tracker-item">
            <h2>Balance</h2>
            <div className="amount">{transactionProps.balance}</div>
          </div>
        </div>
        <div className="charts">
           <div className="leftCharts">
            <div className="activityGraph">
              <h2>Activity Graph</h2>
              <div style={{width:"400px"}}>
                <ActivityGraph/>
              </div>
            </div>
            {/* <div className="distribution">
              <h2>Expence</h2>
              <div>
                <canvas id="distributionChart"></canvas>
              </div>
            </div> */}
          </div>
          {/* <div className="rightCharts">
            <div className="pieChart">
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
    
    </>
    
  )
}

export default Dashboard