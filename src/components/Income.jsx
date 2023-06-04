import React from "react";
import "../CSS/Dashboard.css";
import "../CSS/Income.css";
const Income = () => {
  return (
    <div className="income">
      <div class="content">
        <h1>Income</h1>
      </div>
      <div class="income-tracker">
        <div class="left">
          <div class="left-top">
            <div class="tracker-item">
              <h2>Income</h2>
              <div class="amount">$ 1000</div>
            </div>
            <div class="tracker-item">
              <h2>Balance</h2>
              <div class="amount">$ 1000</div>
            </div>
          </div>
          <div class="left-bottom">
            <div class="add">
              <h2>Add Income</h2>
              <form id="income-form" action="">
                <div class="form-control">
                  <input
                    type="text"
                    id="income-input"
                    placeholder="Income Description"
                  />

                  <input
                    type="number"
                    id="income-input"
                    placeholder="Income amount"
                  />
                </div>
                <div class="form-control">
                  <button type="submit">Add Income</button>
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
  );
};

export default Income;
