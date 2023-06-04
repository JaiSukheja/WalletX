import React from 'react'
import '../CSS/Sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3594/3594397.png"
            className="logoImg"
            alt="logo"
          />
          <h2>WalletX</h2>
        </div>
        <hr />
        <div className="sidebar-menu">
          <ul className="sidebar-ul">
            <li>
              <i className="bx bxs-dashboard"></i
              ><a href="Dashboard.html">Dashboard</a>
            </li>
            <li>
              <i className="bx bx-money-withdraw"></i
              ><a href="Income.html">Income</a>
            </li>
            <li>
              <i className="bx bx-credit-card"></i
              ><a href="expense.html">Expense</a>
            </li>
            <li>
              <i className="bx bxs-wallet"></i
              ><a href="Transactions.html">Transactions</a>
            </li>

          </ul>
        </div>
        <div className='logout'>
            <button><a href="">Logout</a></button>
        </div>
    </div>
  )
}

export default Sidebar