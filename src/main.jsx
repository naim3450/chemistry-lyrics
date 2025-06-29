import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LyricsState from './Context/LyricsState.jsx'

createRoot(document.getElementById('root')).render(
  <LyricsState>
    <App />
  </LyricsState>,
)
