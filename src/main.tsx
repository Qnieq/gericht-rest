import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/gl_styles/_global.scss'
import Routing from './components/Routing/Routing'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
)
