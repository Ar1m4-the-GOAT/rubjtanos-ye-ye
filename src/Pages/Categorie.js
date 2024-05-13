import { Link } from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import Homepage from "./Homepage";
export default function Categorie() {
    const[products, setProducts] = useState();
    const[filter, setFilter] = useState();
    let { category } = useParams();

    axios.get("http://localhost:5000/products/category/" + category).then((response) => {
            setProducts(response.data);
        });

        console.log(filter)

  

    return(
        <>
        <header style={{padding:"0px"}}>
            <h1 className="OurBrand-element" style={{margin:"0px"}}>{category}</h1>
            <div className="search-bar">
            <input placeholder="Cerca" className="search-bar-input" onChange={(v)=> {
                setFilter(v.currentTarget.value);
            }}/>
            <button className="icon lens"><img src="lente.png" alt="" className="icon lens" />
            </button>
        </div> 

        </header>

        {products === undefined ?   
            <div style={{width:"1400px", height:"630px", backgroundColor:"white"}}>   
             Loading...
            </div> 
            : 
            <div className="div-prodotti">
            {
            products?.filter((x)=>!filter ? true : x.name.toLowerCase().includes(filter.toLowerCase())).map((x)=>
            <>
                <Link className="casella-prodotti" to={"/Prodotti/" + x.id}>
                    <img src={x.imgSrc} alt="" className="img-prodotti" />
                    <p className="p-prodotti"><b>{x.name}</b></p>
                </Link>
            </>
            )}
        </div>}
        </>
    );
}