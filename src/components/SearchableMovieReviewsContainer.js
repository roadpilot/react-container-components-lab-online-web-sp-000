import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  state = {
      reviews: [],
      searchTerm: ''
  }

    localFetch = (searchTerm='test') => {
    fetch(`${URL}&query=${searchTerm}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ reviews: res.results});
//        console.log(this.state.reviews)
      })        
    }

  componentDidMount() {
    console.log('SearchableMovieReviewsContainer mounts')
//    this.localFetch()
  }

    formHandler = (e) => {
        e.preventDefault()
        console.log(this.state.searchTerm)
        this.localFetch(this.state.searchTerm)
    }


  render() {
    return (
      <div>
        <form onSubmit={this.formHandler}>
        <
        input type="text" 
        value={this.state.searchTerm} 
        onChange = {e =>
            this.setState({searchTerm: e.target.value})
        }
        />
        </form>
        <MovieReviews content={this.state.reviews} />
      </div>
    )
  }
  
}
