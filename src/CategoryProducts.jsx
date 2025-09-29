import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
function CategoryProducts() {
    var {cslug}=useParams();
    var [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${cslug}`)
        .then(res=>res.json())
        .then(data=>setProducts(data.products))
    },[cslug])
    return(
        <div>
            <h1>{cslug}</h1>
            <ul>
                {products.map(product=>(
                   
                    
                    <img key={product.id} src={product.thumbnail} alt={product.title} />
                ))}
            </ul>
        </div>
    )
}
export default CategoryProducts;