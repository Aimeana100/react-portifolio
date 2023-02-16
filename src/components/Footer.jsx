import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="container footer__container">
      <div className="copyright">
        <p>Copy right &copy; KARINGANIRE Anathole <span> {new Date().getFullYear()} </span></p>
      </div>
      <div className="social">
        <a href="https://github.com/Aimeana100" target="_blank" rel="noreferrer">
          <img src="assets/images/github.svg" alt="" /> github
        </a>
        <a href="https://www.linkedin.com/in/karinganire-anathole-610979185" target="_blank" rel="noreferrer">
          <img src="assets/images/linkedin.svg" alt="" /> linkedin
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer
