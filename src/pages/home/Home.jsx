import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss';

const Home = () => {
  return (
    <section id="home">
    <div className="container home__container home__container__dim">
      <p>Hello, <span>I ' am </span></p>
      <h1>KARINGANIRE</h1>
      <h2>Anathole</h2>

      <p className="intro">
        A full stack software developer, Optimistic and Future-Focused,
        embracing collabollation.

        <br />
        <br />

        With 3 years of web and mobile application using Javascript,
        Typescript,Python, React js, Node Js and React native .
      </p>

      <div className="home__option">
        <a className="download__cv" download="assets/Eng. Anathole - CV.pdf" href="assets/Eng. Anathole - CV.pdf"> Download CV </a>
        {/* <a className="hire__me" href="index.html#contact__me"> Hire me </a> */}
        <Link className="hire__me" to="/contact"> Hire me </Link>
      </div>
    </div>
  </section>  )
}

export default Home
