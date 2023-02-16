import React from 'react'
import {FaCommentAlt} from 'react-icons/fa';
import {BsEyeFill} from 'react-icons/bs';
import {BiTime} from 'react-icons/bi';



const BlogCard = (prop) => {
  console.log(prop)
  const {title, id, image, comments, views, description,category} = prop.blog
  return (
    <div className="item">
    <div className="img">
      <img src="assets/images/blog_1.jpg" alt="" />
    </div>
    <div className="description">
      <p className="date__desktop">
        <BiTime />
        December , 20
        2022
      </p>
      <h3 className="title">
       {title}
      </h3>

      <p className="description__text">
        {description}
      </p>

      <div className="comment_views">
        <p className="comments">
          <FaCommentAlt className='comment__icon'  />
          <span>12</span>
        </p>

        <p className="views">
          <BsEyeFill className='comment__icon'  />

          <span>12</span>
        </p>
      </div>

      <a href="" className="read__more"
        >Read more
        <img src="assets/images/arrow_right_alt.svg" alt="" />
      </a>
    </div>
  </div>
  )
}

export default BlogCard
