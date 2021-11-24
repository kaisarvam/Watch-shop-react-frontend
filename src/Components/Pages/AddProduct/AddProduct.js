import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import { useHistory } from 'react-router';

const AddProduct = () => {
    const {user} = useAuth();
    const { register,handleSubmit,formState: { errors },reset } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        const sendData = data;
        sendData.creatorName = user?.displayName;
         sendData.creatorEmail = user?.email;
        const url = `https://afternoon-sea-57536.herokuapp.com/addProduct`
        axios.post(url,sendData)
        .then((res)=>{
            console.log("after adding product",res.data);
            if(res.data.insertedId){
             // eslint-disable-next-line no-restricted-globals
             const result = confirm("product Added Successfully !!!")
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
             <h1 className="fw-bold m-5"> Product Adding  Page </h1>
             <form onSubmit={handleSubmit(onSubmit)}>
             <h3> Watch Name </h3>
      <input className="mb-3 w-50 rounded p-2"  {...register("watchName", { required: true })} />
      <br/>
      <h3> Watch Brand </h3>
      <input className="mb-3 w-50 rounded p-2"  {...register("brand", { required: true })} />
      <br/>
             <h3> watchImage URL </h3>
      <input className="mb-3 w-50 rounded p-2"  {...register("watchImage", { required: true })} />
      <br/>
      <h3> Watch Price </h3>
      <input className="mb-3 w-50 rounded p-2"  {...register("watchPrice", { required: true })} />
      <br/>
      <h3 >Watch Description</h3>
      <textarea className="mb-3 w-50 rounded p-2"  cols="2" rows="3" placeholder="Enter watch description here ... " {...register("watchDescription", { required: true })} />
    
      <br/>
      {errors.exampleRequired && <span>This field is required</span>}
      <h3> Watch Rating </h3>
      <input type="number" min="0" max="5" step="0.01" className="mb-3 w-50 rounded p-2"  {...register("rating", { required: true })} />
      <br/>
      <h3> Watch Rated count </h3>
      <input className="mb-3 w-50 rounded p-2"  {...register("rated", { required: true })} />
      <br/>

             <input className="btn btn-success w-50" type="submit" />
             </form>
            
        </div>
    );
};

export default AddProduct;