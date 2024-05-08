import React  from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from "./pages/Home";
import EnterData from "./pages/Enter-Data";
import EmployeesData from "./pages/Employees-Data";

import "./css/style.css";
import "./css/custom.css";
import "./vendor/animate.css/animate.min.css";
import "./vendor/aos/aos.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./vendor/bootstrap-icons/bootstrap-icons.css";
import "./vendor/boxicons/css/boxicons.min.css";
import "./vendor/remixicon/remixicon.css";
import "./vendor/swiper/swiper-bundle.min.css";


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="" element={<HomePage></HomePage>}></Route>
    <Route path="enter" element={<EnterData></EnterData>}></Route>
    <Route path="employ" element={<EmployeesData></EmployeesData>}></Route>
   </Routes>
   </BrowserRouter>
  );
};

export default App;

// {useState}