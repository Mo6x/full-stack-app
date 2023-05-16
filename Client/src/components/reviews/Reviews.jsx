import React from 'react'
import "./Reviews.scss";
import Review from '../review/Review';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';



const Reviews = ({gigId}) => {

    const { isLoading, error, data} = useQuery({
        queryKey: ["reviews"],
        queryFn: () => newRequest.get(`/reviews/${gigId}`).then((res) => {
            return res.data;
        }),
    });

    
    const handleSubmit = (e) => {
        e.preventDefualt();
        const desc = e.target[0].value;
        const star = e.target[1].value;
        mutation.nutata({ desc, star});
    } 


   return (
    <div className="reviews">
            <h2>Reviews</h2>
            {isLoading ? "loading" : error ? "Something went wrong!" : 
            data.map((review) => <Review key={review._id} review = {review} /> )}
            <div className="add">
               <h3>Add a review</h3>
               <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Share your opinion" />
                <select name="" id="">
                    <opinion value={1}>1</opinion>
                    <opinion value={2}>2</opinion>
                    <opinion value={3}>3</opinion>
                    <opinion value={4}>4</opinion>
                    <opinion value={5}>5</opinion>
                </select>
                <botton>Send</botton>
               </form>
            </div>
          </div>
  ) 
}

export default Reviews;