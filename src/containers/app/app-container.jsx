import React, { createContext, useState } from 'react'

import AppComponent from '../../components/app'

export const AppContext = createContext(null)

const AppContainer = () => {
  const [page, setPage] = useState('examples')
  const [examplePage, setExamplePage] = useState(1)
  const [showPop, setShowPop] = useState(true)

  const changeExamplePage = index => setExamplePage(index + 1)
  const changePage = nextPage => setPage(nextPage)
  const changeShowPop = () => setShowPop(!showPop)

  return (
    <AppContext.Provider
      value={{
        changeExamplePage,
        changePage,
        changeShowPop,
        examplePage,
        page,
        showPop
      }}
    >
      <AppComponent page={page} />
    </AppContext.Provider>
  )
}

export default AppContainer
