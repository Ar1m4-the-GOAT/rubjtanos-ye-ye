import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function MainLayout(){
    return (
        <>
            <Header/>
        <div style={{minHeight:"80vh"}}>
            <Outlet/></div>
            <Footer/>
        </>
    );
}