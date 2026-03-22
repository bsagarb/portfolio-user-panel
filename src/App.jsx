import React from "react";
import Home from "./home/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserNotFound from "./pages/UserNotFound";
import { PortfolioProvider } from "./context/PortfolioContext";


export default function App() {
  return (
  
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/:username" element={<PortfolioProvider><Home/></PortfolioProvider>} />
      <Route path="*" element={<UserNotFound/>}/>
    </Routes>
 
    
  );
}
