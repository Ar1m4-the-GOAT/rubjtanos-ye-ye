import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {CloseCategories} from "../components/Header.js";

export default function MainLayout(){
    return (
        <div onClick={CloseCategories}>
            <Header/>
        <div style={{minHeight:"80vh"}}>
            <Outlet/></div>
            <Footer/>
        </div>
    );
}