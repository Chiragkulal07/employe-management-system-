import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Auth from "./context/auth.jsx"
import Task from "./context/task.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Auth>
      <Task>
        <App />
      </Task>
    </Auth>
   
  </StrictMode>,
)
