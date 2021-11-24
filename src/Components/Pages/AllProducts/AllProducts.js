import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import WatchCard from '../../shared/WatchCard/WatchCard';

const AllProducts = () => {
const [products,SetProducts] = useState([]);
useEffect(()=>{
   const  url = `https://afternoon-sea-57536.herokuapp.com/products`;
   axios.get(url)
   .then((res)=>{
       SetProducts(res.data);
   })
},[])

if(products.length<1){
    return(
        <div className="container text-center"> <div class="spinner-border text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      </div>
    )
}
else{
    return (
        <>
            <div className="container">
                <hr/>
                <h1 className="m-5 fw-bold">Update<span className="text-warning"> Watch </span> Information </h1>
                <hr/>
            <div className="container">
                <div className="row">
                {
                    products.map((product)=>{
                       return ( 
                       <WatchCard product={product} key={product._id} /> 
                       )
                    })
                }
                </div>
                </div>
    
    
            </div>
        </>
        );
}
    
    
};

export default AllProducts;