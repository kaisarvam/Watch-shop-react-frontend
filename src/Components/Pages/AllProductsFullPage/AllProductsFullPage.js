import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import {useState,useEffect} from 'react';
import axios from 'axios';
import WatchCard from '../../shared/WatchCard/WatchCard';
import Footer from '../../shared/Footer/Footer';

const AllProductsFullPage = () => {
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
        <Navbar/>
            <div className="container">
                <hr/>
                <h1 className="m-5 fw-bold">All <span className="text-warning"> Watches </span> </h1>
                <hr/>
            <div className="container">
                <div className="row">
                {
                    products.map((product)=>{
                       return ( 
                       <WatchCard product={product}  key={product._id}/> 
                       )
                    })
                }
                </div>
                </div>
            </div>
          <Footer/>
        </>
        );
            }
    };

export default AllProductsFullPage;