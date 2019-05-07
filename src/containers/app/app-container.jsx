import React, { useState } from 'react'

import AppComponent from '../../components/app'

const AppContainer = () => {
  const [page, setPage] = useState('home')
  const [examplePage, setExamplePage] = useState(0)

  const changePage = nextPage => setPage(nextPage)
  const changeExamplePage = nextPage => setExamplePage(nextPage)

  return (
    <AppComponent
      page={page}
      changePage={changePage}
      examplePage={examplePage}
      changeExamplePage={changeExamplePage}
    />
  )
}

export default AppContainer
