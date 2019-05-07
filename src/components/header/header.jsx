import React from 'react'

import ContactLinks from './contact-links'
import ExamplesControl from './examples-control'
import PageButtons from './page-buttons'

const Header = ({ changePage, page }) => {
  return (
    <div className="header-container">
      <PageButtons changePage={changePage} page={page} />
      <ExamplesControl page={page} />
      <ContactLinks />
    </div>
  )
}

export default Header
