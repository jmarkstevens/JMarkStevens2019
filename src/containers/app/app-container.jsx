import React, { createContext, useState } from 'react'

import AppComponent from '../../components/app'

export const ExamplePageContext = createContext(null)
export const NoteContext = createContext(null)
export const PageContext = createContext(null)

const AppContainer = () => {
  const [page, setPage] = useState('home')
  const [examplePage, setExamplePage] = useState(1)
  const [showPop, setShowPop] = useState(0)

  const changePage = nextPage => setPage(nextPage)
  const changeExamplePage = index => setExamplePage(index + 1)
  const changeShowPop = () => setShowPop(!showPop)

  return (
    <ExamplePageContext.Provider value={{ changeExamplePage, examplePage }}>
      <NoteContext.Provider value={{ changeShowPop, showPop }}>
        <PageContext.Provider value={{ changePage, page }}>
          <AppComponent page={page} />
        </PageContext.Provider>
      </NoteContext.Provider>
    </ExamplePageContext.Provider>
  )
}

export default AppContainer
