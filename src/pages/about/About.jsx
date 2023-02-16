import React from 'react'
import './about.scss';
import me from '../../assets/images/anathole_on_desk.png';

const About = () => {
  return (
    <section id="about__me">
    <div className="heading container">
      <h2>About me</h2>
    </div>

    <div className="container aboutme_container">
      <div className="photo">
        <img src={me} alt="" />
      </div>
      <div className="profile__description">
        <p>
          Anathole is a hardworking, self-motivated, critical thinker and
          always upbeat individual.
          <br />
          <br />
          I am a software engineer and full-stack developerwith expertise
          in PHP and JavaScript.
        </p>
      </div>

      <div className="education__exprience">
        <div className="education">
          <div className="sub__heading">
            <h2>Education</h2>
          </div>

          <div className="content education__container">
            <div className="item">
              <h3 className="degree">Andela</h3>
              <h3 className="certificate">ATLP</h3>
              <p className="time__frame">2022 - now</p>
              <h4 className="institution">Kigali, Rwanda (Remote)</h4>
            </div>
            <div className="item">
              <h3 className="degree">Bachelor's</h3>
              <h3 className="certificate">Computer science</h3>
              <p className="time__frame">2016 - 2020</p>
              <h4 className="institution">University of Rwanda</h4>
            </div>
          </div>
        </div>

        <div className="exprience">
          <div className="sub__heading">
            <h2>Exprience</h2>
          </div>

          <div className="content exprience__container">
            <div className="item">
              <h3 className="role">Software developer</h3>
              <h3 className="company">SANTECH Ltd</h3>
              <p className="time__frame">2021 - now</p>
              <h4 className="work__mode">Full time (on desk)</h4>
              <div className="roles__outline">
                <p></p>
              </div>
            </div>

            <div className="item">
              <h3 className="role">Software developer</h3>
              <h3 className="company">Muhahe Ltd</h3>
              <p className="time__frame">2020 - 2021</p>
              <h4 className="work__mode">Part time (remote)</h4>
              <div className="roles__outline">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
