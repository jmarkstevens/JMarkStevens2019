import Button from '@material-ui/core/Button'
import React, { useContext } from 'react'

import { AppContext } from '../../../containers/app'
import PageIndicator from '../../common/PageIndicator'

const pageNumber = 2

const ExamplesControl = () => {
  const {
    changeExamplePage,
    changeShowPop,
    examplePage,
    page,
    showPop
  } = useContext(AppContext)
  const showInner = page === 'examples'
  const showPopText = showPop ? ' Hide Note' : 'Show Note'
  const pageDesc = `Page ${examplePage} of ${pageNumber}`
  return (
    <div className="examples-control">
      {showInner && (
        <div className="examples-control-show">
          <div className="examples-control-wings" />
          <div className="examples-control-center">
            {pageDesc}
            <PageIndicator
              activeIndex={examplePage - 1}
              count={pageNumber}
              onClick={changeExamplePage}
            />
          </div>
          <div className="examples-control-wings">
            <Button className="common-button" onClick={changeShowPop}>
              <span className="examples-control-text">{showPopText}</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExamplesControl
