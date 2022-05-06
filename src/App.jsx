import React from "react";
import { Fragment } from "react";
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import NavBar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Fragment>
        <NavBar/>
      <AllRoutes/>
      </Fragment>
          
    </div>
  );
}

export default App;
