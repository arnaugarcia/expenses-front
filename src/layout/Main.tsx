import React from "react";
import Menu from "./Menu";
import {Outlet} from "react-router-dom";

function Main() {
    return (
        <>
            <Menu/>
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>);
}

export default Main;
