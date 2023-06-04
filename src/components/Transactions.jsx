import React from 'react'
import "../CSS/Dashboard.css";
import "../CSS/Transactions.css";
const Transactions = () => {
  return (
    <div className='transactions'>
        <div class="content">
          <h1>Transactions</h1>
        </div>
        <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2023-06-01</td>
                <td>Groceries</td>
                <td>$50.00</td>
              </tr>
              <tr>
                <td>2023-06-02</td>
                <td>Dinner with friends</td>
                <td>$30.00</td>
              </tr>
              <tr>
                <td>2023-06-03</td>
                <td>Movie tickets</td>
                <td>$20.00</td>
              </tr>
              <tr>
                <td>2023-06-02</td>
                <td>Dinner with friends</td>
                <td>$30.00</td>
              </tr>
            </tbody>
            <tfoot>
                <tr>
                  <th>-</th>
                  <th>Balance</th>
                  <th>$500</th>
                </tr>
              </tfoot>
          </table>
    </div>
  )
}

export default Transactions