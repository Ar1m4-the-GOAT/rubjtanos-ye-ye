import {useContext, useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import {CarrelloContext,CarrelloProvider} from "../components/CarrelloContext";
import Header from "../components/Header";
import {TotaleContext,TotaleProvider} from "../components/TotaleContext";

function Caratteristiche({product}){
    const [title, setTitle] = useState("NO CARATTERISTICHE");
    const [caratteristiche, setCaratteristiche] = useState();
 
    useEffect(
    () => {
        if (product && product.categories)
        {
            if (product.categories.includes("Scarpe"))
                { setTitle("NUMERO"); setCaratteristiche([18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]); }
            else if
                ( product.categories.includes("Abbigliamento") || product.categories.includes("Accessori") )
            { setTitle("TAGLIA"); setCaratteristiche(["XS", "S", "M", "L", "XL"]); }
        }
            }, [product.categories]
    );

    return(
        <>
        <h4 className="h-prodotto-scelto h4 " style={{fontSize:"25px"}}>{title}</h4>
        <div className="div-car-prod-scelto">
            {title !== "NO CARATTERISTICHE" &&
            caratteristiche.map((c, index) => (
                <button
                key={index}
                className="caratteristica-prodotto-scelto"
                >
                {c}
                </button>
            ))}
        </div>
        </>
    );
}

export default function Prodotto() {   
    const[product, setProduct] = useState();
    const {shop, setShop} = useContext(CarrelloContext);
    const{totale, setTotale} = useContext(TotaleContext);

    function Totale(){
        let prezzo="";
        setTotale(0)
        shop.forEach(x => {
            prezzo=x.price.substring(1,x.price.length);
            setTotale(parseFloat(totale)+parseFloat(prezzo));
        });
    }
    function AddCarrello(){
        setShop([...shop, product])
    }

    useEffect(() => {
        Totale()
        console.log(shop)
    }, [shop])
    let { id } = useParams();

    axios.get("http://localhost:5000/products/" + id).then((response) => {
            setProduct(response.data);
        });

    if(product === undefined) 
    return(
            <div style={{width:"1400px", height:"630px", backgroundColor:"white"}}>   
            Loading...
            </div>
    );

    return (
      <div className="main">

        <div className="prodotto-scelto">
            <div className="div-img-prodotto-scelto border">
                <img src={product.imgSrc} alt="RIP" className="img-prodotto-scelto" />
            </div>

            <div className="div-caratteristiche-prodotto-scelto border">
                <div>
                    <h1 className="h-prodotto-scelto h1" style={{fontSize:"45px"}}>{product.name}</h1>
                    <p className="prezzo-prodotto-scelto">prezzo: {product.price}</p>

                    <hr style={{marginRight:"auto", marginLeft:"auto", marginTop:"10px", marginBottom:"10px", width:"85%", borderWidth:"3px", borderColor:"rgb(9,39,64)"}}/>

                    <Caratteristiche product={product}/>
                </div>
                <button className="agg-prodotto-scelto" onClick={()=>{AddCarrello();}}>AGGIUNGI AL CARRELLO</button>
            </div>
        </div>
      </div>  
    );
}