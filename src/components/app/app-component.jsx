import React from 'react'

import Examples from '../examples'
import Header from '../header'
import Home from '../home'
import Resume from '../resume'

const AppComponent = ({ page, changePage }) => {
  const showExamples = page === 'examples'
  const showHome = page === 'home'
  const showResume = page === 'resume'
  return (
    <div className="app-container">
      <Header changePage={changePage} page={page} />
      {showExamples && <Examples />}
      {showHome && <Home />}
      {showResume && <Resume />}
    </div>
  )
}

export default AppComponent
