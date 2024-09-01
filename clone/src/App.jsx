import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import MT from "./Components/M&T";
import TA from "./Components/T&A";
import HK from "./Components/H&K";
import SignUp from "./Components/SignUp";
import TopOffer from "./Components/TopOffer";
import Electronic from "./Components/Electronic";
import Fashion from "./Components/Fashion";
import Beauty from "./Components/Beauty";
import Furniture from "./Components/Furniture";
import Travel from "./Components/Travel";
import Grocery from "./Components/Grocery";
import BecomeASeller from "./Components/BecomeASeller";
import Layout1 from "./Layout/Layout1";
import Layout2 from "./Layout/Layout2";
import Layout3 from "./Layout/Layout3";
import Cart from "./Components/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-gray-300">
        
        <Routes>
        <Route element={<Layout1/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/topOffer" element={<TopOffer />} />
          <Route path="/mobile&Tablet" element={<MT />} />
          <Route path="/TV&Appliances" element={<TA />} />
          <Route path="/electronic" element={<Electronic />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/home&Kitchen" element={<HK />} />
          <Route path="/furniture" element={<Furniture />} />
          
          
          
        </Route>
        <Route element={<Layout2/>}>

        <Route path="/" element={<Home />} />
          <Route path="/becomeAseller" element={<BecomeASeller />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/Cart" element={<Cart/>}/>

        </Route>
          
          
          <Route element={<Layout3/>}>

          <Route path="/travel" element={<Travel />} />

        </Route>
          

        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
