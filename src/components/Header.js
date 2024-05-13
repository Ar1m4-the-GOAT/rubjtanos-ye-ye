import { Link } from 'react-router-dom';
import {useState, useContext} from "react";
import axios from "axios";
import {CarrelloContext,CarrelloProvider} from "../components/CarrelloContext";

function OptionBarButton({section, imgPath, link}){
    return(
        <Link
        className="option-bar-button" to={link}>
            <img src={imgPath} alt="" className="icon" />
            {section}
        </Link>
    )
}

function OpenCategories(){
    var menu = document.getElementById("menu");
    if(menu !== undefined){
        if(menu.classList.contains("animOut") === true) {
            menu.classList.remove("animOut");
            menu.classList.add("animIn");
            menu.style.maxHeight='100%';
        }else{
            menu.classList.add("animIn");
            menu.style.maxHeight='100%';
        }
    }
}

function CloseCategories(){
    var menu = document.getElementById("menu");
    if(menu !== undefined){
        if(menu.classList.contains("animIn") === true) {
            menu.classList.remove("animIn");
            menu.classList.add("animOut");
            menu.style.maxHeight='0%';
        }else{
            menu.classList.add("animOut");
            menu.style.maxHeight='0%';
        }
    }
}

function OpenCart(){
    var cart = document.getElementById("cart");
    if(cart !== undefined){
        if(cart.classList.contains("closeCart") === true){
            cart.classList.remove("closeCart");
            cart.classList.add("openCart");
            cart.style.left="70%";
        }else{
            cart.classList.add("openCart");
            cart.style.left="70%";
        }
    }
}

function CloseCart(){
    var cart = document.getElementById("cart");
    if(cart !== undefined){
        if(cart.classList.contains("openCart") === true){
            cart.classList.remove("openCart");
            cart.classList.add("closeCart");
            cart.style.left="100%";
        }else{
            cart.classList.add("closeCart");
            cart.style.left="100%";
        }
    }
}

export default function Header(){
    const[showMenu, setShowMenu] = useState(false);
    const[categories, setCategories] = useState();
    const{shop, setShop} = useContext(CarrelloContext);
        axios.get("http://localhost:5000/categories").then((response) => {
            setCategories(response.data);
        });
        
    return(
    <header>
    <div className="OurBrand">
        <img src="/cool.png" alt="JustUs" className="icon"></img>
        <p className="OurBrand-element" style={{margin: 0}}><b>RUBJ-TANOs</b></p>
    </div>


    <div className="option-bar">
        <OptionBarButton section={"HOME PAGE"} imgPath={"/home 1.png"} link={""}/>

        <div className="menu" id="menu">
            {  
            categories?.map((x) => 
            <div className='element-menu'>
                <img src="/Triangolo.png" alt="triangolino" className='img-menu'></img>
                <Link className="cats" to={"/Categorie/" + x.name}>{x.name}</Link><br/>
            </div>
                ) 
            }
        </div>

        <div className="option-bar-button" 
                onClick=
                {()=>{
                    setShowMenu(!showMenu);
                    showMenu ? CloseCategories() : OpenCategories();
                }}>
            <img src="/categories.png" alt="" className="icon"/>
            CATEGORIE
        </div>

        <OptionBarButton section={"PRODOTTI"} imgPath={"/all.png"} link={"/Prodotti"}/>
        <OptionBarButton section={"CHI SIAMO"} imgPath={"/ChiSiamo.png"} link={"/ChiSiamo"}/>             
    </div>


    <div>
        <button className="icon" style={{backgroundColor:'rgb(9, 39, 64)'}} onClick={OpenCart}>
            <img src="/carrello.png" alt="" className="cart icon" style={{borderRadius:'15px'}}/>
        </button>
    </div>

    <div className='cartMenu' id="cart">
        <div className="cartHeader">
            <p className='cartTitle'>Il mio carrello</p><p className='cartX' onClick={CloseCart}>X</p>
        </div>
        <hr className='cartHr'/>
        {shop.length === 0 ? <div>Il tuo carrello è vuoto</div> : 
        shop.map((x)=>
        <div className='element-in-cart'>
            <div className='element-name'><img src={x.imgSrc} alt="RIP" className='img-in-cart'/><p>{x.name}</p></div>
            <div><button className="button-element-in-cart">-</button><button className="button-element-in-cart">+</button></div><button className="button-element-in-cart"><img className="bin-img" src="/bin.png" alt="delete"/></button>
            <p>{x.price}</p>
        </div>)}
    </div>
    </header>
    );
}