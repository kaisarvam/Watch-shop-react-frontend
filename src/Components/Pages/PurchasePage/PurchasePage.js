import React from 'react';
import { useParams } from 'react-router';
import Navbar from '../../shared/Navbar/Navbar';
import { useEffect ,useState } from 'react';
import { useForm } from "react-hook-form";
import Rating from 'react-rating';
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';
import './PurchasePage.css';
import { useHistory } from 'react-router';
import Footer from '../../shared/Footer/Footer';



const PurchasePage = () => {
    const {id} = useParams();
    const history = useHistory();
    const {user,} = useAuth();
    const [product,setProduct] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
       // eslint-disable-next-line no-restricted-globals
       const result = confirm("Do you want to order this item ?");
        console.log(data)
        if(result){
            const order = {...data ,...product};
            order.uid = user.uid;
            delete order._id;
            order.status = "Pending";
            const url = `https://afternoon-sea-57536.herokuapp.com/addOrder`;
            axios.post(url,order)
            .then((res)=>{
            console.log("response from order create : ",res,data);
            alert("Order created SuccessFully !!! ")
            history.push('/dashbord/myOrders');
            })
        }
       
    
    };

    useEffect(()=>{
        const baseId = id;
        console.log("baseid is here : ",baseId);
     const  url = `https://afternoon-sea-57536.herokuapp.com/product/${baseId}`;
        axios.get(url)
        .then((res)=>{
            console.log("response is",res.data);
            setProduct(res.data);
        })
    },[id])
    const {watchName,watchImage,watchPrice,watchDescription,rating,rated,brand} = product;
    return (
        <>
        <Navbar/>
        <div className="container">
            {
                product?.watchName?
                <div className="container">
                    <div className="row mt-3">
                    <div className="col-sm-12 col-md-6">
                        <img className="img-rotate" src={watchImage} width="200px" alt="" />
                        <h3>{watchName}</h3>
                        <p className="text-muted">Brand : {brand}</p>
                        <h5 className="fw-bold"> Price : {Number(watchPrice).toFixed(2)}$</h5>
                        <p>{watchDescription}</p>
                        <span className="m-0 fw-bold">Rating : </span>
                        <Rating 
               readonly
            fullSymbol="fas fa-star star-color text-warning"
            emptySymbol="far fa-star star-color text-warning"
           initialRating={rating}>
               </Rating> 
               <span className="fw-bold"> ( {Number(rating).toFixed(2)} ) </span>
               <br/>
               <span className="m-0 fw-bold">Rated : </span>
               <i className="fas fa-user-check"></i>
               <span className="fw-bold"> ( {rated} ) </span>
               

                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h1 className="m-5" >Payment Form</h1>

                        <form onSubmit={handleSubmit(onSubmit)}>
      <p className="mt-3 fw-bold">Name</p>
      <input className="mb-2 w-100"  defaultValue={user.displayName} {...register("name")} />
      <br/>
      <p className="m-0 fw-bold">Email</p>
      <input className="mb-2 w-100"   defaultValue={user.email} {...register("email")} />
      <br/>
      <p className="m-0 fw-bold">Phone</p>
      <input className="mb-2 w-100" placeholder="Enter your Phone Number here ... " {...register("PhoneNumber", { required: true })} />
      <br/>
      <p className="mb-2 fw-bold">Shipping Address</p>
      <textarea className="mb-3"  cols="2" rows="3" placeholder="Enter your Address here ... " {...register("address", { required: true })} />
    
      <br/>
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>

                    </div>
                    </div>
                </div>
        :
        <> </>
            }
   
        </div>
        <Footer/>
        </>
    );
};

export default PurchasePage;