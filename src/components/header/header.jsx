import React from 'react'

import ContactLinks from './contact-links'
import ExamplesControl from './examples-control'
import PageButtons from './page-buttons'

const Header = () => {
  return (
    <div className="header-container">
      <PageButtons />
      <ExamplesControl />
      <ContactLinks />
    </div>
  )
}

export default Header
