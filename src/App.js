import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import IndexPage from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage />}/>
        <Route path='/dasboard'element={<DashboardPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
