import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories(){
    var[categories,setCategories]=useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/products/categories")
        .then(res=>res.json())
        .then(data=>setCategories([...data]))
    },[])
    return(
        <div id="categories">
            <h1>Categories</h1>
            <ul>
                {categories?.map((cat)=>{
                    return(
                        <li>
                            <Link to={`/category/${cat.slug}`}>
                                {cat.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Categories;