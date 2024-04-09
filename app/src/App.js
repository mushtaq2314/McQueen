import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./components/Landing";
import Search from "./components/Search";
import SignIn from "./components/SignIn";
import SignIn1 from "./components/SignIn1";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Trasactions from "./components/Transactions";
import CheckOut from "./components/CheckOut";
import Purchase from "./components/Purchase";
import Done from "./components/Done";
import Done1 from "./components/Done1";
import Sell from "./components/Sell";

export default function App() {
  const [user, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [TID,setTID] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<Search setData={setData}/>} />
        <Route path="/signin" element={<SignIn setToken={setToken}/>} />
        <Route path="/signin1" element={<SignIn1 setData={setData} data={data}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/transactions" element={<Trasactions />} />
        <Route path="/checkout" element={<CheckOut data={data} setData={setData}/>} />
        <Route path="/purchase" element={<Purchase setTID={setTID}/>} />
        <Route path="/done" element={<Done TID={TID}/>} />
        <Route path="/done1" element={<Done TID={TID}/>} />
        <Route path="/sell" element={<Sell setTID={setTID}/>} />
        
      </Routes>
    </Router>
  );
}