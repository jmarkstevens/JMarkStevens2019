import React, { useState } from 'react'

import AppComponent from '../../components/app'

const AppContainer = () => {
  const [page, setPage] = useState('home')

  const changePage = nextPage => setPage(nextPage)

  return <AppComponent page={page} changePage={changePage} />
}

export default AppContainer
