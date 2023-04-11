import React from "react";
import Menu from "./Menu";
import Expenses from "../pages/expenses/Expenses";

function Main() {
    return (
        <>
            <Menu/>
            <main>
                <header>
                    <h1>Group Expenses</h1>
                </header>
                <div className="container">
                    <Expenses/>
                </div>
            </main>
        </>);
}

export default Main;
