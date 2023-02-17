import React from "react";
import { FaCommentAlt } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";

import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
 
 export const convertDateToString =  (timestamp) => {
  let date = new Date(timestamp);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = date;
  return (
    d.getDate() +
    ", " +
    monthNames[Number(d.getMonth())] +
    " " +
    d.getFullYear()
  );

  // return date;
}

const BlogCard = (prop) => {

  console.log(prop.blog) ;

  const { title,image, _id,comments, views, description,created_at, category } =
    prop.blog;

    const cleanHTML = DOMPurify.sanitize(description, {
      USE_PROFILES: { html: true },
    });
    

  return (
    <div className="item">
      <div className="img">
        <img src={image.url} alt="" />
      </div>
      <div className="description">
        <p className="date__desktop">
          <BiTime />
          {convertDateToString(created_at)}
        </p>
        <h3 className="title">{title}</h3>

        <p className="description__text"> {parse(cleanHTML)} </p>

        <div className="comment_views">
          <p className="comments">
            <FaCommentAlt className="comment__icon" />
            <span> {comments.length} </span>
          </p>

          <p className="views">
            <BsEyeFill className="comment__icon" />
            <span> {views} </span>
          </p>
        </div>

        {/* <a href="" className="read__more">
          {" "}
          Read more
          <img src="assets/images/arrow_right_alt.svg" alt="" />
        </a> */}

        <Link to={`/blog/${_id}`} className="read__more "> Read more </Link>
      </div>
    </div>
  );
};

export default BlogCard;
