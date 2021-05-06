import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'


// the App component should render out the GifListContainer component 

const App = () => {

  return (
    <div>
      <div>
          < NavBar color='black' title="Giphy Search" />
      </div>
      <div>
        < GifListContainer />
      </div>
    </div>
  )
}

export default App
