# react-video-ts

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-video-ts.svg)](https://www.npmjs.com/package/react-video-ts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-video-ts
```

## Usage

```tsx
import React from 'react'

import { Video } from 'react-video-ts'
import 'react-video-ts/dist/index.css'

const App = () => {
  return (
    <div style={{ margin: 'auto', width: '700px', height: '450px' }}>
      <Video video='http://media.w3.org/2010/05/bunny/movie.ogv' />
    </div>
  )
}

export default App

Note: Add style *{ box-sizing: border-box }
```

## License

MIT ©
