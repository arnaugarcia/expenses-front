import './App.css'
import Main from "./layout/Main";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Expenses from "./pages/expenses/Expenses";
import Groups from "./pages/groups/Groups";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Expenses />} />
            <Route path={"/groups"} element={<Groups />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
