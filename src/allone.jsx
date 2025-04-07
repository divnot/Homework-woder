import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function All(){
    return(
        <>

        <Header/>
        <Outlet/>
        <Footer/> 
        </>
    )
}

export default All;