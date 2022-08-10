import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import IndexPage from "./pages/index";
import Footer from "./sections/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Footer/>}>
          <Route path='/' element={<IndexPage />}/>
          <Route path='/dasboard' element={<DashboardPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
