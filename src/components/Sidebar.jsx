import React from 'react'
import '../CSS/Sidebar.css'
import { Link, useNavigate } from 'react-router-dom'
const Sidebar = () => {
  const navigate = useNavigate()
  const logout = ()=> {
    window.localStorage.clear()
    navigate('/login')
  }
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
              <Link to="/dashboard"> <i className="bx bxs-dashboard"></i
              ><span className='menuItems'>Dashboard</span> </Link>
            </li>
            <li>
              <Link to="/income"><i className="bx bx-money-withdraw"></i
              > <span className='menuItems'>Income</span> </Link>
            </li>
            <li>
              <Link to="/expense"><i className="bx bx-credit-card"></i
              > <span className='menuItems'>Expense</span> </Link>
            </li>
            <li>
              <Link to="/transaction"><i className="bx bxs-wallet"></i
              > <span className='menuItems'>Transactions</span> </Link>
            </li>

          </ul>
        </div>
        <div className='logout'>
            <button onClick={logout}>Logout</button>
        </div>
    </div>
  )
}

export default Sidebar