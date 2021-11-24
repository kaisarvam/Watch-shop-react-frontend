import axios from 'axios';
import React, { useState ,useEffect } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import { useHistory, useParams } from 'react-router';

const UpdateReview = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const { register,handleSubmit,formState: { errors },reset } = useForm();
    const history = useHistory();
    const [review,setReview] = useState([]);

    useEffect(()=>{
      const  url=`https://afternoon-sea-57536.herokuapp.com/review/${id}`;
        axios.get(url)
        .then((res)=>{
            setReview(res.data[0]);
            console.log("review data by id received is ",res.data);
        })
    },[id])



    const onSubmit = data => {
        const sendData = data;
        const url = `https://afternoon-sea-57536.herokuapp.com/UpdateReview/${id}`
        axios.put(url,{sendData:sendData})
        .then((res)=>{
            console.log("after adding Review",res.data);
            if(res.data. modifiedCount>0){
             // eslint-disable-next-line no-restricted-globals
             const result = confirm("Review Updated Successfully !!!")
             if(result){
                 history.push("/dashbord/myReviews");
             }
            }else{
                alert("Error Occured !!!");
            }
        })
    }
    return (
        <div>
             <h1 className="fw-bold m-5"> Review Updating  Page </h1>
             <form onSubmit={handleSubmit(onSubmit)}>
             <h3> watch Name </h3>
      <input className="mb-3 w-50 rounded p-2"  defaultValue={review?.watchName} {...register("watchName", { required: true })} />
      <br/>
      <h3 >Review Description</h3>
      <textarea className="mb-3 w-50 rounded p-2"  cols="2" rows="3" defaultValue={review?.reviewDescription} placeholder="Enter review description here ... " {...register("reviewDescription", { required: true })} />
    
      <br/>
      {errors.exampleRequired && <span>This field is required</span>}
      <h3> Review Rating </h3>
      <input type="number" min="0" max="5" step="0.01" className="mb-3 w-50 rounded p-2" defaultValue={review?.rating}  {...register("rating", { required: true })} />
      <br/>
 <input className="btn btn-success w-50" type="submit" />
             </form>
            
        </div>
    );
};

export default UpdateReview;