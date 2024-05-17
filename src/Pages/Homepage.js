import {CloseCategories} from "../components/Header.js";

export default function Homepage() {
    return (
    <div className="container" onClick={CloseCategories}>
        <p className="overlay">
            <font style={{fontSize:"50px", letterSpacing:"7px"}} color={'white'}>
                <font style={{fontSize:"100px"}}>
                "
                

                <font style={{letterSpacing:"0px"}} color={'orange'}>
                    <b>PERFECTLY BALANCED</b>
                </font></font><br/>

                AS 

                <font style={{fontSize:"70px", paddingLeft:"25px", paddingRight:"25px", wordSpacing:"10px"}}>
                    EVERY PRICE
                </font>

                SHOULD BE..."
            </font>
        </p>
        <video autoPlay muted loop id="background-video">
            <source src="/PerfectlyBalanced.mp4" type="video/mp4"></source>
        </video>
    </div>
    );
}