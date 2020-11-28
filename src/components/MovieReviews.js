// Code MovieReviews Here
import React from 'react'
 
const Review = (props) => {
//    console.log(props)
    return (<div className="review" key={props.link.url}>{props.display_title}</div>)
}

const MovieReviews = ({ content }) => <div className="review-list">{ content.map(Review) }</div>;

MovieReviews.defaultProps = {
  reviews: []
};
export default MovieReviews

