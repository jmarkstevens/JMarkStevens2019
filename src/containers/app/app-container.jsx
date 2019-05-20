import React, { createContext, useState } from 'react'

import AppComponent from '../../components/app'

export const AppContext = createContext(null)

const AppContainer = () => {
  const [page, setPage] = useState('home')
  const [examplePage, setExamplePage] = useState(2)
  const [showPop, setShowPop] = useState(true)

  const changeExamplePage = index => setExamplePage(index)
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
