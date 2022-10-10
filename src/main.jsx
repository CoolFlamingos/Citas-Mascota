import React from 'react'  //obsoleto al menos que se use con versiones anteriores
import ReactDOM from 'react-dom/client' //quien tiene todos los eventos del DOM
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
