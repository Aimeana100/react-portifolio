import React from "react";
import { Link } from "react-router-dom";
import "./blogs.scss";
import Breadcumb from "../../components/Breadcumb";
import BlogCard from "../../components/BlogCard";

const Blogs = () => {

  const blogs = [
    {
      id: 1,
      title: "title 1",
      category: "category 1",
      description: "description 1",
      views: 10,
      status: "unmuted",
      comments: [
        {
          id: 1,
          names: "name 1",
          email: "hzdkv@example.com",
          description: "description 1"
        },
        {
          id: 2,
          names: "name 2",
          email: "hzdkv@example.com",
          description: "description 2"
        }
      ]
    },
{
  id: 2,
  title: "title 2",
  category: "category 2",
  description: "description 2",
  views: 20,
  status: "unmuted",
  comments: [
    {
      id: 1,
      names: "name 1",
      email: "hzdkv@example.com",
      description: "description 1"
    },
    {
      id: 2,
      names: "name 2",
      email: "hzdkv@example.com",
      description: "description 2"
    }
  ]

},
{
  id: 3,
  title: "title 2",
  category: "category 3",
  description: "description 2",
  views: 20,
  status: "unmuted",
  comments: [
    {
      id: 1,
      names: "name 1",
      email: "hzdkv@example.com",
      description: "description 1"
    },
    {
      id: 2,
      names: "name 2",
      email: "hzdkv@example.com",
      description: "description 2"
    }
  ]

}

  ];
  return (
    <main>
      <Breadcumb title="All Blogs" />

      <section className="all__blogs">
        <div className="container all__blogs_content">
          <div id="blogs">
            <div className="blogs_container">
              {
                blogs.map(blog => {
                  return <BlogCard key={blog.id} blog={blog} />
                })
              }

            </div>

            <div className="pagination__container">
              <div className="left__navigation"> prev </div>
              <div className="navigation__items">
                <span className="item__1">1</span>
                <span className="item__2">2</span>
                <span className="item__3">3</span>
                <span className="item__4">4</span>
              </div>
              <div className="right__navigation">Next</div>
            </div>
          </div>

          <div className="right__summary">
            <div className="categories">
              <p className="category_item">
                <img src="assets/images/arrow_right_alt_red.svg" alt="" />
                Data science
              </p>
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
                    <a className="more__arrow" href="blog-single.html">
                      <img
                        className="read__more"
                        width="30"
                        src="assets/images/arrow_right_alt.svg"
                        alt=""
                      />
                    </a>
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

export default Blogs;
