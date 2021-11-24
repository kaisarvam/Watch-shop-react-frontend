import axios from 'axios';
import React from 'react';
import Rating from 'react-rating';
import { useState,useEffect } from 'react';


const AllReviews = () => {
    const [reviews,setReviews] = useState([]);
    const [check,setcheck] = useState([]);
    let i = 0;
    useEffect(()=>{
       const url =`https://afternoon-sea-57536.herokuapp.com/reviews`;
        axios.get(url)
        .then((res)=>{
            setReviews(res.data);
        })
    },[check])

    const deleteReview = (id)=>{

        // eslint-disable-next-line no-restricted-globals
        const result = confirm("Do you really want to delete this review ?");

        if(result){

            const url =`https://afternoon-sea-57536.herokuapp.com/deleteReview/${id}`
            axios.delete(url)
            .then((res)=>{
                setcheck(res.data);
                console.log(res.data);
                if(res.data.deletedCount>0){
                    alert("Review Successfully deleted !!!")
                }
                
            })

        }

        
    }

    return (
        <div>
              <h1 className="fw-bold m-5"> Manage All Reviews  </h1>
              <table className="table table-dark table-striped">
           <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Review by</th>
      <th scope="col">Product name</th>
      <th scope="col">Review Description</th>
      <th scope="col">Rating</th>
      <th scope="col">Option</th>
      
    </tr>
  </thead>
  <tbody>
              {
                reviews.map((review)=>{
                    i++;
                    return(
                        <tr key={review?._id}>
                <th scope="row">{i}</th>
                       <td> {review?.creatorName}<br/> email:{review?.creatorEmail}</td>
                       <td> {review?.watchName} </td>
                       <td>{review?.reviewDescription} </td>
                       <td>
                       <Rating
                              readonly
                              fullSymbol="fas fa-star text-warning"
                              emptySymbol="far fa-star text-warning"
                              initialRating={review?.rating}
                            ></Rating>
                            ({review?.rating})</td>
                       <td> <button className="btn btn-danger" onClick={()=>{deleteReview(review?._id)}}>Delete review</button> </td>
                      
                      
                        </tr>
                        
                    )
                    
                })
            }


  <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      </tbody>
            </table> 
        </div>
    );
};

export default AllReviews;