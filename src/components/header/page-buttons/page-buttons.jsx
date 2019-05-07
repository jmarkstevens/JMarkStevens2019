import Button from '@material-ui/core/Button'
import classNames from 'classnames'
import React from 'react'

const PageButtons = ({ changePage, page }) => {
  const showExamples = page === 'examples'
  const showHome = page === 'home'
  const showResume = page === 'resume'

  const HomeClass = classNames('common-icon-button', 'page-buttons-button', {
    'page-buttons-button-selected': showHome
  })
  const ExamplesClass = classNames(
    'common-icon-button',
    'page-buttons-button',
    {
      'page-buttons-button-selected': showExamples
    }
  )
  const ResumeClass = classNames('common-icon-button', 'page-buttons-button', {
    'page-buttons-button-selected': showResume
  })

  return (
    <div className="page-buttons">
      <Button
        className={HomeClass}
        disabled={showHome}
        onClick={() => changePage('home')}
      >
        Home
      </Button>
      <Button
        className={ExamplesClass}
        disabled={showExamples}
        onClick={() => changePage('examples')}
      >
        Examples
      </Button>
      <Button
        className={ResumeClass}
        disabled={showResume}
        onClick={() => changePage('resume')}
      >
        Resume
      </Button>
    </div>
  )
}

export default PageButtons
