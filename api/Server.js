const express = require("express");
const app = express();

const categories = [
    {id:0, name:"Scarpe",},
    {id:1, name:"Abbigliamento"},
    {id:2, name:"Accessori"},
    {id:3, name:"Tech"},
    {id:4, name:"Gino"},
]

const products = [
    {id:0, name:"Nike", imgSrc:"/Nike.png", price:"€45", categories:[categories[0].name,""]},
    {id:1, name:"Adidas", imgSrc:"/Adidas.png", price:"€49", categories:[categories[0].name,""]},
    {id:2, name:"Puma", imgSrc:"/Puma.png", price:"€35", categories:[categories[0].name,""]},
    {id:3, name:"NorthFace", imgSrc:"/NF.png", price:"€55", categories:[categories[0].name,""]},
    {id:4, name:"Felpa", imgSrc:"/felpa.png", price:"€59", categories:[categories[1].name,""]},
    {id:5, name:"Giacca", imgSrc:"/giacca.png", price:"€59", categories:[categories[1].name,""]},
    {id:6, name:"Jeans", imgSrc:"/jeans.png", price:"€25", categories:[categories[1].name,""]},
    {id:7, name:"Maglia", imgSrc:"/maglia.png", price:"€12", categories:[categories[1].name,""]},
    {id:8, name:"Coppola", imgSrc:"/coppola.png", price:"€25", categories:[categories[2].name,""]},
    {id:9, name:"Cappello", imgSrc:"/john.png", price:"€15", categories:[categories[2].name,""]},
    {id:10, name:"Cintura", imgSrc:"/cintura.png", price:"€9", categories:[categories[2].name,""]},
    {id:11, name:"Guanti", imgSrc:"/guanti.png", price:"€7", categories:[categories[2].name,""]},
    {id:12, name:"MAC", imgSrc:"/mac.png", price:"€1499", categories:[categories[3].name,""]},
    {id:13, name:"MSI", imgSrc:"/msi.png", price:"€1999", categories:[categories[3].name,""]},
    {id:14, name:"PS5", imgSrc:"/ps5.png", price:"€649", categories:[categories[3].name,""]},
    {id:15, name:"TV", imgSrc:"/tv.png", price:"€3199", categories:[categories[3].name,""]},
    
]

app.use((req,res,next)=>{

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');


    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Content-Type", "application/json");
    next();
})

app.get("/categories", (req, res)=>{
    res.send(categories);
});

app.get("/products", (req, res) => {
    res.send(products);
});

app.get("/products/:id", (req, res) => {
    const {id} = req.params;

    var product = products.filter((p)=> p.id === parseInt(id));
    res.send(product[0]);
});

app.get("/products/category/:category", (req, res) => {
    const {category} = req.params;

    var product = products.filter((x) => x.categories.includes(category));
    res.send(product);
});

app.listen(5000, ()=> console.log("server Started"));