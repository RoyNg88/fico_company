import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Media,Image} from 'react-bootstrap';
import PropTypes from 'prop-types'; 
import StarRating from './StarRating';
import Icofont from 'react-icofont';

// const url ="http://localhost:4001/api/users";
class Review extends Component {
  state = {
    user: [],
    name: '',
    comment: '',
}

// async fetchData(){    
//     await fetch(url,)
//         .then(response => response.json())
//         .then(json => this.setState({user: json}))
//         .catch(err => console.log(err))                     
// }


// componentDidMount() {
//     this.fetchData();
// }



render () {
    return (
      <div className="reviews-members pt-4 pb-4">
         <Media>
            <Link to="#"><Image alt="" src={this.props.image} className="mr-3 rounded-pill" /></Link>
            <Media.Body>
               <div className="reviews-members-header">
                  <div className="star-rating float-right">
                  	<StarRating fontSize={14} disabled={true} star={this.props.ratingStars} getValue={() => {}}/>
                  </div>
                  <h6 className="mb-1"><Link className="text-black" to={this.props.profileLink}>{this.props.name}</Link></h6>
                  <p className="text-gray">{this.props.reviewDate}</p>
               </div>
               <div className="reviews-members-body">
                  <p>{this.props.reviewText}</p>
               </div>
               <div className="reviews-members-footer">
                  <Link className="total-like" to="#"><Icofont icon="thumbs-up" /> {this.props.likes}</Link> <Link className="total-like" to="#"><Icofont icon="thumbs-down" /> {this.props.dislikes}</Link> 
                  <span className="total-like-user-main ml-2" dir="rtl">
                    {/* {renObjData} */}
                  </span>
               </div>
            </Media.Body>
         </Media>
      </div>
    );
  }
}

Review.propTypes = {
  image: PropTypes.string.isRequired,
  ImageAlt: PropTypes.string,
  ratingStars: PropTypes.number.isRequired,
  Name: PropTypes.string.isRequired,
  profileLink: PropTypes.string.isRequired,
  reviewDate: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  dislikes: PropTypes.string.isRequired,
  otherUsers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
};

export default Review;