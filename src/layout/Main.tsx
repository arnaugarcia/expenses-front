import React from "react";
import Menu from "./Menu";
import {Outlet} from "react-router-dom";

function Main() {
    return (
        <>
            <Menu/>
            <main>
                <header>
                    <h1>Group Expenses</h1>
                </header>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>);
}

export default Main;
