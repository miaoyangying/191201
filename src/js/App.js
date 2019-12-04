import React from 'react';
import '../css/App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Add from "./Add"
import User from "./User"
import Profie from "./Profie"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="block">
      < Link to="/">首页</Link>
      < Link to="/profie">个人中心</Link>
      < Link to="/user">用户</Link>

      <Route path="/" exact component={Add}></Route>
      <Route path="/profie" component={Profie}></Route>
      <Route path="/user" component={User}></Route>
      
      </div>

      </BrowserRouter>


      
     
      
    </div>
  );
}

export default App;
