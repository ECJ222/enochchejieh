import React from 'react'
import resume from '../../assets/Resume/resume.pdf'

const Contact = () => {
  return (
    <footer id="contact">
      <h3>Get in Touch</h3>
      <div className="socials-container">
        <span>Want to work together or have any questions?</span>
        <div className="socials">
          <a href="mailto:enochchejieh@gmail.com">Email</a>
          <a href="https://github.com/ECJ222">GitHub</a>
          <a href="https://twitter.com/EnochChejieh">Twitter</a>
          <a href="https://www.linkedin.com/in/enoch-chejieh-a39652155/">
            LinkedIn
          </a>
          <a href={resume} download>
            Resumé
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Contact
