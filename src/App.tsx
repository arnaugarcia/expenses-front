import './App.css'
import Main from "./layout/Main";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ExpensesListing from "./pages/expenses/ExpensesListing";
import GroupsListing from "./pages/groups/listing/GroupsListing";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<GroupsListing />} />
            <Route index path={"/groups"} element={<GroupsListing />} />
            <Route index path={"groups/:groupId/expenses"} element={<ExpensesListing />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
