import React from 'react'
import '../CSS/Dashboard.css'
const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className="content">
          <h1>Dashboard</h1>
        </div>
        <div className="tracker">
          <div className="tracker-item">
            <h2>Income</h2>
            <div className="amount">$ 1000</div>
          </div>
          <div className="tracker-item">
            <h2>Expence</h2>
            <div className="amount">$ 500</div>
          </div>
          <div className="tracker-item">
            <h2>Balance</h2>
            <div className="amount">$ 500</div>
          </div>
        </div>
        <div className="charts">
          {/* <div className="leftCharts">
            <div className="activityGraph">
              <h2>Activity Graph</h2>
              <div>
                <canvas id="activityGraphChart"></canvas>
              </div>
            </div>
            <div className="distribution">
              <h2>Expence</h2>
              <div>
                <canvas id="distributionChart"></canvas>
              </div>
            </div>
          </div>
          <div className="rightCharts">
            <div className="pieChart">
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
  )
}

export default Dashboard