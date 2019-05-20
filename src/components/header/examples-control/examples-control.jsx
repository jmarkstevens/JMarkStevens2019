import Button from '@material-ui/core/Button'
import classNames from 'classnames'
import React, { useContext } from 'react'

import { AppContext } from '../../../containers/app'

const ExamplesControl = () => {
  const {
    changeExamplePage,
    changeShowPop,
    examplePage,
    page,
    showPop
  } = useContext(AppContext)
  const showInner = page === 'examples1'
  const showPopText = showPop ? ' Hide Note' : 'Show Note'
  const showBergstrom = examplePage === 1
  const showCodeView = examplePage === 2
  const BergstromClass = classNames(
    'common-icon-button',
    'page-buttons-button',
    {
      'page-buttons-button-selected': showBergstrom
    }
  )
  const CodeViewClass = classNames(
    'common-icon-button',
    'page-buttons-button',
    {
      'page-buttons-button-selected': showCodeView
    }
  )
  return (
    <div className="examples-control">
      {showInner && (
        <div className="examples-control-show">
          <div className="examples-control-wings" />
          <div className="examples-control-center">
            <Button
              className={CodeViewClass}
              disabled={showCodeView}
              onClick={() => changeExamplePage(2)}
            >
              Code View
            </Button>
            <div className="examples-control-button-spacer" />
            <Button
              className={BergstromClass}
              disabled={showBergstrom}
              onClick={() => changeExamplePage(1)}
            >
              Bergstrom Gardens
            </Button>
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
