import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import { useHistory, useParams } from 'react-router';
import { useEffect ,useState } from 'react';

const UpdateProduct = () => {
    const {id} = useParams();
    const [product,setProduct] = useState();
    const {user} = useAuth();
    const { register,handleSubmit,formState: { errors },reset } = useForm();
    const history = useHistory();

    useEffect(()=>{
        const url = `https://afternoon-sea-57536.herokuapp.com/product/${id}`;
        axios(url)
        .then((res)=>{
            setProduct(res.data);
            console.log("found product is ",res.data);
        })
    },[id])

    const onSubmit = data => {
        const sendData = data;
        const url2 = `https://afternoon-sea-57536.herokuapp.com/update/product/${id}`
        axios.put(url2,{sendData:sendData})
        .then((res)=>{
            console.log("after adding product",res.data);
            if(res.data.modifiedCount >0){
             // eslint-disable-next-line no-restricted-globals
             const result = confirm("product Updated Successfully !!!")
             if(result){
                 history.push("/allProducts");
             }
            }else{
                alert("Error Occured !!!");
            }
        })
    }
    return (
        <div>
            <h1 className="fw-bold m-5"> Product Update Page </h1>
             <form onSubmit={handleSubmit(onSubmit)}>
             <h3> Watch Name </h3>
      <input className="mb-3 w-50 rounded p-2" defaultValue={product?.watchName} {...register("watchName", { required: true })} />
      <br/>
      <h3> Watch Brand </h3>
      <input className="mb-3 w-50 rounded p-2" defaultValue={product?.brand} {...register("brand", { required: true })} />
      <br/>
             <h3> watchImage URL </h3>
      <input className="mb-3 w-50 rounded p-2"  defaultValue={product?.watchImage} {...register("watchImage", { required: true })} />
      <br/>
      <h3> Watch Price </h3>
      <input className="mb-3 w-50 rounded p-2"  defaultValue={product?.watchPrice} {...register("watchPrice", { required: true })} />
      <br/>
      <h3 >Watch Description</h3>
      <textarea className="mb-3 w-50 rounded p-2"  defaultValue={product?.watchDescription} cols="2" rows="3" placeholder="Enter watch description here ... " {...register("watchDescription", { required: true })} />
    
      <br/>
      {errors.exampleRequired && <span>This field is required</span>}
      <h3> Watch Rating </h3>
      <input type="number" min="0" max="5" step="0.01" className="mb-3 w-50 rounded p-2"   defaultValue={product?.rating} {...register("rating", { required: true })} />
      <br/>
      <h3> Watch Rated count </h3>
      <input className="mb-3 w-50 rounded p-2" defaultValue={product?.rated}  {...register("rated", { required: true })} />
      <br/>

             <button className="btn btn-success w-50"  type="submit" >Update Product</button>
             </form>
            
        </div>
    );
};

export default UpdateProduct;