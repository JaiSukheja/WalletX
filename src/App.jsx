
import { useEffect, useState, useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Login from './components/Login'
import Expence from './components/Expence'
import Income from './components/Income'
import Transaction from './components/Transactions'
import AlertState from './context/StateFiles/AlertState'
import LoginState from './context/StateFiles/LoginState'

function App() {


  return (

    <>
      {/* {console.log(mode)} */}
      <LoginState>

        <AlertState>
          <BrowserRouter>

            <Routes>
              <Route exact path="/" element={<Login />}>
                {/* exact path instead of path is used to avoid partial matching of react */}
              </Route>
              <Route exact path="/signup" element={<Signup />}>
                {/* exact path instead of path is used to avoid partial matching of react */}
              </Route>
              <Route exact path="/login" element={<Login />}>
                {/* exact path instead of path is used to avoid partial matching of react */}
              </Route>
              <Route exact path="/dashboard" element={<Dashboard />}>
                {/* exact path instead of path is used to avoid partial matching of react */}
              </Route>
              <Route exact path="/expence" element={<Expence />}>
              </Route>
              <Route exact path="/income" element={<Income />}>
              </Route>
              <Route exact path="/userplaylist" element={<Transaction />}>
              </Route>

            </Routes>


          </BrowserRouter>
        </AlertState>
      </LoginState>



    </>
  );
}

export default App;
