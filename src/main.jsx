import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './Context/PlayerContext.jsx'

import { PlayerContext } from './Context/PlayerContext.jsx'
import Layout from './Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PlayerContextProvider>
        <App />
        {/* <Layout/> */}
      </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
