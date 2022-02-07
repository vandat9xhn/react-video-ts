import React from 'react'

import { Video } from 'react-video-ts'
import 'react-video-ts/dist/index.css'

const App = () => {
  return (
    <div style={{ margin: 'auto', width: '700px', height: '450px' }}>
      <Video video='https://media.w3.org/2010/05/sintel/trailer.mp4	' />
    </div>
  )
}

export default App
