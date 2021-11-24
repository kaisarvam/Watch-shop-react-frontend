import React from 'react';
import { NavLink } from 'react-router-dom';
import './WatchCard.css'
import useAuth from '../../../Hooks/useAuth';
// import useAuth from '../../../Hooks/useAuth';

const WatchCard = (props) => {
    const {admin} = useAuth();
    // const {user} = useAuth();

    // const handleAddToCart = (e,product)=>{
    //     e.preventDefault()
    //     const newProduct = {...product};
    //     newProduct.buyer = user.displayName;
    //     newProduct.uid = user.uid;
    //     newProduct.buyerEmail = user.email;
    //     console.log("Adding to cart" ,newProduct);
    // }

    const {watchName,watchImage,watchPrice,_id,brand,watchDescription} = props.product;
    return (
        <div className=" col-sm-12 col-md-6 col-xl-4 mb-4">
            <div className="wrapper">
            <div className="card text-center shadow-lg">
        <div className="image"> <img src={watchImage} width="300" alt="" /> </div>
        <div className="about-product  text-center text-dark bg-white fw-bold">
            <h3>{watchName.slice(0,25)}</h3>
            <h4 className="fw-bold" >$<span>{Number(watchPrice).toFixed(2)}</span></h4>
            <h4 className="f" >Brand: <span className="text-muted">{brand}</span></h4>
           <p> {watchDescription.slice(0,30)} ... </p>
            {
               admin && <NavLink to={`/dashbord/updateProduct/${_id}`}> <button className="btn btn-success buy-now">UpdateProduct</button> </NavLink>
           }
            { 
            !admin &&  <NavLink to={`/purchase/${_id}`}> <button className="btn btn-success buy-now">Buy Now</button> </NavLink>
           }
          
          
        </div>
        </div>
    </div>    
        </div>
        
    );
};

export default WatchCard;