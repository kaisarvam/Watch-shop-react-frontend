import axios from 'axios';
import React from 'react';
import Rating from 'react-rating';
import { useState,useEffect } from 'react';
import './AllReviewCard.css';


const AllReviewCard = () => {
    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        const url =`https://afternoon-sea-57536.herokuapp.com/reviews`;
         axios.get(url)
         .then((res)=>{
             setReviews(res.data);
         })
     },[])

    return (
        <>
          <h1 className="fw-bold m-5"> Review <span className="text-warning"> Section </span> </h1>
          <div className="container row g-4 review-bg pt-3">
        {
            reviews.map((review)=>{

                return(
                    <div className="col-md-4 col-sm-12 rounded-3 mb-5 " key={review._id}>
                    <div className="review-card shadow-lg d-flex justify-content-center align-items-center bg-light rounded-3" >
                    <div className="card-body">
                      <h5 className="card-title"><span className="fw-bold">"</span>{review.reviewDescription}<span className="fw-bold">"</span></h5>
                      <br/>
                      <Rating
                              readonly
                              fullSymbol="fas fa-star text-warning"
                              emptySymbol="far fa-star text-warning"
                              initialRating={review?.rating}
                            ></Rating>
                           <span className="fw-bold"> ({review?.rating}) </span>
                            <br/>
                            <br/>
                      <p className="card-text fw-bold">--- {review.creatorName} <i className="fas fa-user"></i> </p>
                      
                    </div>
                    </div>
                  </div>

                )

            })
        }
        </div>
       
</>
    );
};

export default AllReviewCard;