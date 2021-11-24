import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import { useState,useEffect } from 'react';
import WatchCard from '../../shared/WatchCard/WatchCard';
import axios from 'axios';
import AllReviewCard from '../AllReviewCard/AllReviewCard';

const Home = () => {

    const [products,SetProducts] = useState([]);
useEffect(()=>{
   const  url = `https://afternoon-sea-57536.herokuapp.com/products`;
   axios.get(url)
   .then((res)=>{
       SetProducts(res.data);
   })
},[])

    return (
        <>
            <Navbar/>
            <hr/>
            <h1 className="fw-bold m-5"> Watches <span className="text-warning"> Home </span> Page</h1>
            <hr/>
            <section className="banner-section m-5">
                <img src="https://i.ibb.co/xSCVQd3/89670937352801-573d3df298ad9.jpg" width="100%" alt=""/>

            </section>
            <section className="container">
            <hr/>
            <h1 className="fw-bold m-5"> Our <span className="text-warning">Watches </span> </h1>
            <hr/>
            <br/>
            <div className="row">
                {
                    (products.length<1) && <div className="container text-center"> <div class="spinner-border text-success" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  </div>
                }
                
            {
                products.slice(0,6).map((product)=>{
                   return ( 
                   <WatchCard product={product} key={product._id}/> 
                   )
                })
            }
            </div>
            </section>
            <hr/>
            <section className="container">
                <AllReviewCard/>
            </section>
            <br/>
            <section className="m-2">
            <div className="container-fluid w-75 bg-warning pb-3 pt-3">
            <h2><strong>Contact Form </strong></h2>
  <form action="/action_page.php">
    <label htmlFor="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

    <label htmlFor="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

    <label htmlFor="country">Country</label>
    <select id="country" name="country" >
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label htmlFor="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something."></textarea>
    <button className="btn btn-primary w-50">Submit</button>
    
  </form>

  </div>   
            </section>

            <Footer/>
        </>
    );
};

export default Home;