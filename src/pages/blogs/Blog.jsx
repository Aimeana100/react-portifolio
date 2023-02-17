import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import axios from "axios";
import Breadcumb from "../../components/Breadcumb";
import {convertDateToString} from "../../components/BlogCard";
import { BiTime } from "react-icons/bi";
import "./blogs.scss";


const Blog = () => {
  let { id } = useParams();
  console.log(id);
  const baseUrl = "https://indigo-barracuda-wig.cyclic.app";

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    loadBlog();
  }, []);

  const loadBlog = async () => {
   await  axios
    .get(`${baseUrl}/api/blogs/${id}`)
    .then((response) => {
      console.log(response.data);
      setBlog(response.data.blog);
    })
    .catch((error) => {
      console.log(error);
    });
  }


  const cleanHTML = DOMPurify.sanitize(blog.description, {
    USE_PROFILES: { html: true },
  });

  console.log(blog.comments);

  return (
    <main>
      <Breadcumb title="How to start Software development as a career" />

      <section className="blog__single">
        <div className="container blog__single__container">
          <div className="blog" id="blog">
            <div className="blog__img">
              <img src={blog.image?.url} alt={blog.title} />
            </div>

            <div className="blog__content">
              <div className="date__published">
                <p>
                  <BiTime />
                  {convertDateToString(blog.created_at)}
                </p>
              </div>

              <h2 className="title">
               {blog.title}
              </h2>

              <div className="content">
                <div className="blog__content_text">

                {parse(cleanHTML)}

                </div>
              </div>
            </div>

            <div className="comments">
              <div className="comment__form">
                <h3>Leave a comment here</h3>
                <form
                  name="commentFrm"
                  id="commentFrm"
                  action="#"
                  method="POST"
                >
                  <div className="form__group">
                    <div className="form__row">
                      <input
                        name="Names"
                        id="Names"
                        type="text"
                        placeholder="Names"
                        required
                      />
                    </div>
                    <div className="form__row">
                      <input
                        name="Email"
                        id="Email"
                        type="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="form__row">
                    <textarea
                      name="comment__description"
                      id="comment__description"
                      rows="4"
                      placeholder="Comment message"
                      required
                    ></textarea>
                  </div>

                  <input type="hidden" id="blog_id" name="blog_id" />

                  <div className="form__row">
                    <button type="submit"> Send </button>
                  </div>
                </form>
              </div>

              <div className="comments__list">
                <h3 className="comment__title">
                  {blog.comments?.length} <span>Comment(s)</span>
                </h3>

                <div className="comment__content">

                  <div className="coment__item">
                    <div className="commenter__photo">
                      <img src="assets/images/Ana10_icon.svg" alt="" />
                    </div>
                    <div className="commenter__description">
                      <p>
                        <span className="name">Karinganire Anathole</span>
                        <span className="comment__date"> June, 30 2020 </span>
                      </p>
                      <p className="comment__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        tenetur ex nesciunt perferendis saepe fuga nostrum
                        cupiditate soluta labore,
                        <br />
                        <br />
                        eaque necessitatibus ullam assumenda, sunt voluptatibus!
                        Sunt vel asperiores aspernatur porro vero blanditiis non
                        facilis,?
                      </p>

                      <div className="reply">
                        <a href="">Reply</a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="right__summary">
            <div className="categories">
              <div className="category_item">
                <img src="assets/images/arrow_right_alt_red.svg" alt="" />
                Software development
              </div>
              <div className="category_item">
                <img src="assets/images/arrow_right_alt_red.svg" alt="" />
                Data science
              </div>
            </div>

            <div className="latest__blog__container most_viewed_blogs">
              <div className="blog__item">
                <div className="img">
                  <img src="assets/images/blog_1.jpg" alt="" />
                </div>
                <div className="description">
                  <h4 className="title">
                    How to start Software development as a career
                  </h4>
                  <p className="time__frame">
                    <img src="assets/images/Alarm.svg" alt="" /> Dec, 22 2022
                  </p>
                  <div className="comment_views">
                    <p className="comments">
                      <img src="assets/images/inser_ comment.svg" alt="" />
                      <span>12</span>

                      <img src="assets/images/views.svg" alt="" />
                      <span>12</span>
                    </p>
                    <img
                      className="read__more"
                      width="30"
                      src="assets/images/arrow_right_alt.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="blog__item">
                <div className="img">
                  <img src="assets/images/blog_1.jpg" alt="" />
                </div>

                <div className="description">
                  <h4 className="title">
                    How to start Software development as a career
                  </h4>
                  <p className="time__frame">
                    <img src="assets/images/Alarm.svg" alt="" /> Dec, 22 2022
                  </p>
                  <div className="comment_views">
                    <p className="comments">
                      <img src="assets/images/inser_ comment.svg" alt="" />
                      <span> 12 </span>

                      <img src="assets/images/views.svg" alt="" />
                      <span> 12 </span>
                    </p>

                    <img
                      className="read__more"
                      width="30"
                      src="assets/images/arrow_right_alt.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="blog__item">
                <div className="img">
                  <img src="assets/images/blog_1.jpg" alt="" />
                </div>
                <div className="description">
                  <h4 className="title">
                    How to start Software development as a career
                  </h4>
                  <p className="time__frame">
                    <img src="assets/images/Alarm.svg" alt="" /> Dec, 22 2022
                  </p>
                  <div className="comment_views">
                    <p className="comments">
                      <img src="assets/images/inser_ comment.svg" alt="" />
                      <span>12</span>

                      <img src="assets/images/views.svg" alt="" />
                      <span>12</span>
                    </p>
                    <img
                      className="read__more"
                      width="30"
                      src="assets/images/arrow_right_alt.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="blog__item">
                <div className="img">
                  <img src="assets/images/blog_1.jpg" alt="" />
                </div>
                <div className="description">
                  <h4 className="title">
                    How to start Software development as a career
                  </h4>
                  <p className="time__frame">
                    <img src="assets/images/Alarm.svg" alt="" /> Dec, 22 2022
                  </p>
                  <div className="comment_views">
                    <p className="comments">
                      <img src="assets/images/inser_ comment.svg" alt="" />
                      <span>12</span>

                      <img src="assets/images/views.svg" alt="" />
                      <span>12</span>
                    </p>

                    <img
                      className="read__more"
                      width="30"
                      src="assets/images/arrow_right_alt.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
