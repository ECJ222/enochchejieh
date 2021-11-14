import React from 'react'
import Profile from '../profile'
import Typewriter from 'typewriter-effect'

const About = () => {
  return (
    <>
      <div id="about">
        <div className="info">
          <Typewriter
            options={{
              strings: "Hello I'm Enoch Chejieh",
              autoStart: true,
              loop: true
            }}
          />
          <p>
            I&apos;m a software developer and content creator based in Nigeria
            with a love for open source and exploring new things.
          </p>
          <em>„Faber est Suae Quisque Fortunae“</em>
        </div>
        <Profile />
      </div>
    </>
  )
}

export default About
