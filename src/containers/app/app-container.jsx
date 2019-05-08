import React, { createContext, useState } from 'react'

import AppComponent from '../../components/app'

export const NoteContext = createContext(null)
export const PageContext = createContext(null)

const AppContainer = () => {
  const [page, setPage] = useState('home')
  // const [examplePage, setExamplePage] = useState(0)
  const [showPop, setShowPop] = useState(0)

  const changePage = nextPage => setPage(nextPage)
  // const changeExamplePage = nextPage => setExamplePage(nextPage)
  const changeShowPop = () => setShowPop(!showPop)

  return (
    <NoteContext.Provider value={{ changeShowPop, showPop }}>
      <PageContext.Provider value={{ changePage, page }}>
        <AppComponent page={page} />
      </PageContext.Provider>
    </NoteContext.Provider>
  )
}

export default AppContainer
