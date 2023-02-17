import React from 'react'
import { convertDateToString } from './BlogCard'

const Comment = ({comment}) => {
  return (

    <div className="coment__item">
    <div className="commenter__photo">
      <img src="assets/images/Ana10_icon.svg" alt="" />
    </div>
    <div className="commenter__description">
      <p>
        <span className="name"> {comment.names} </span>
        <span className="comment__date"> {convertDateToString()} </span>
      </p>
      <p className="comment__text">
        
      </p>

      <div className="reply">
        <a href="">Reply</a>
      </div>
    </div>
  </div>
  )
}

export default Comment
