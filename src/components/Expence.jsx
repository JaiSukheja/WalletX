import React from "react";
import "../CSS/Dashboard.css";
import "../CSS/Expence.css";
const Expence = () => {
  return (
    <div className="Expence">
      <div class="content">
        <h1>Expence</h1>
      </div>
      <div class="Expence-tracker">
        <div class="left">
          <div class="left-top">
            <div class="tracker-item">
              <h2>Expence</h2>
              <div class="amount">$ 1000</div>
            </div>
            <div class="tracker-item">
              <h2>Balance</h2>
              <div class="amount">$ 1000</div>
            </div>
          </div>
          <div class="left-bottom">
            <div class="add">
              <h2>Add Expence</h2>
              <form id="Expence-form" action="">
                <div class="form-control">
                  <input
                    type="text"
                    id="Expence-input"
                    placeholder="Expence Description"
                  />

                  <input
                    type="number"
                    id="Expence-input"
                    placeholder="Expence amount"
                  />
                </div>
                <div class="form-control">
                  <button type="submit">Add Expence</button>
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

export default Expence;
