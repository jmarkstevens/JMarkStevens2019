import React, { useContext } from 'react'

import { AppContext } from '../../containers/app'
import Notes from './notes'

const useTest = true
const testOrNot = useTest ? 'test.' : ''
const urls = [
  'index placeholder',
  `http://${testOrNot}bergstromgardens.org`,
  `http://${testOrNot}codeview.jmarkstevens.com`,
  `http://${testOrNot}palminfo.org`
]

const innerHeight = window.innerHeight * 0.968
const iFrameSty = { height: innerHeight }

const Examples = () => {
  const { examplePage, showPop } = useContext(AppContext)
  const noteText = Notes[examplePage]
  const urlSrc = urls[examplePage]
  return (
    <div className="example-container">
      <iframe
        className="example-iframe"
        id="iFrame"
        src={urlSrc}
        style={iFrameSty}
        title="Example"
      />
      {showPop && <div className="example-note-pop">{noteText}</div>}
    </div>
  )
}

export default Examples
