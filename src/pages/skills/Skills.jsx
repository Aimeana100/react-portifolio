import React from 'react'
import Breadcumb from '../../components/Breadcumb';
import './skills.scss';

const Skills = () => {
  return (
    <main>
    <Breadcumb title="What i can do" />{" "}

    <section id="skills">
    <div className="heading container">
      <h2>What i can do.</h2>
    </div>

    <div className="container skills_container">
      <div className="item mobile">
        <div className="item__heading">
          <h4>Mobile App</h4>
        </div>
        <div className="item__content">
          <p>Typescript</p>
          <p>JavaScript</p>
        </div>
        <div className="skills__framework">
          <p>React Native</p>
        </div>
      </div>

      <div className="item front__end">
        <div className="item__heading">
          <h4>Font end</h4>
        </div>

        <div className="item__content">
          <p>Typescript</p>
          <p>JavaScript</p>
          <p>HTML</p>
          <p>CSS (sass)</p>
        </div>
        <div className="skills__framework">
          <p>React js</p>
          <p>Next Js</p>
          <p>Tailwind css</p>
        </div>
      </div>

      <div className="item back__end">
        <div className="item__heading">
          <h4>Back end</h4>
        </div>

        <div className="item__content">
          <p>JavaScript</p>
          <p>Python</p>
          <p>PHP</p>
        </div>

        <div className="skills__framework">
          <p>Laravel</p>
          <p>Node Js</p>
          <p>Djago</p>
        </div>
      </div>

      <div className="item back__end">
        <div className="item__heading">
          <h4>UI / UX</h4>
        </div>

        <div className="item__content">
          <p>Prototyping</p>
          <p>Design</p>
          <p>Wireframing</p>
        </div>

        <div className="skills__framework">
          <p>Figama</p>
          <p>Adobe XD</p>
        </div>
      </div>
    </div>
  </section>
  </main>
  )
}

export default Skills
