import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {CloseCategories} from "../components/Header.js";

export default function MainLayout(){
    return (
        <div onClick={clickHandler}>
            <Header/>
        <div style={{minHeight:"80vh"}}>
            <Outlet/></div>
            <Footer/>
        </div>
    );
}

function clickHandler(event) {
    // if (event.target !== "div.option-bar-button" && event.target !== "div.element-menu") CloseCategories();
    if(!["menu", "option-bar-button", "icon", "element-menu"].includes(event.target.id)) CloseCategories()
}