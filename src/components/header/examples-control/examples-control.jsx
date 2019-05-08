import Button from '@material-ui/core/Button'
import React, { useContext } from 'react'

import { NoteContext, PageContext } from '../../../containers/app'

const ExamplesControl = () => {
  const { page } = useContext(PageContext)
  const showInner = page === 'examples'
  const { changeShowPop, showPop } = useContext(NoteContext)
  const showPopText = showPop ? ' Hide Note' : 'Show Note'
  return (
    <div className="examples-control">
      {showInner && (
        <div className="examples-control-show">
          <div className="examples-control-wings" />
          <div className="examples-control-center">Center</div>
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
