import React from 'react'
import {
  FaEnvelope,
  FaLinkedin,
  FaStackOverflow,
  FaGithub
} from 'react-icons/fa'

const emailLink = 'mailto:jms@jmarkstevens.com'

const ContactLinks = () => {
  return (
    <div className="contact-links">
      <a className="contact-links-link" href={emailLink} title="email">
        <FaEnvelope className="contact-icon" aria-hidden="true" />
      </a>
      <a
        href="https://www.linkedin.com/in/j-mark-stevens-1653a516/"
        title="LinkedIn"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedin className="contact-icon" aria-hidden="true" />
      </a>
      <a
        href="http://stackoverflow.com/users/5248398/j-mark-stevens?tab=profile"
        title="StackOverflow"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaStackOverflow className="contact-icon" aria-hidden="true" />
      </a>
      <a
        href="https://github.com/jmarkstevens"
        title="StackOverflow"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub className="contact-icon" aria-hidden="true" />
      </a>
    </div>
  )
}

export default ContactLinks
