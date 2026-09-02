import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './greeting.jsx'
import { MyFavFood } from './My-fav-food.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greeting/>
    <MyFavFood/>
  </StrictMode>,
)
