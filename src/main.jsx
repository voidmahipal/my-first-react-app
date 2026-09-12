import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './about.jsx'
import Profile from './Profile.jsx'
import ErrorPage from './ErrorPage.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Dashboard from './Dashboard.jsx'
import Settings from './Settings.jsx'
import DefaultProfile from './Default.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    errorElement : <ErrorPage/>,
  },
  {
    path : "about",
    element : <About/>,
  },
  {
    path : "profile/:name",
    element : <Profile/>,
  },
  {
    path : "dashboard",
    element : <Dashboard/>,
    children : [
      { index : true,element : <DefaultProfile/>},
      { path : "profile",element : <Profile/>},
      { path : "settings",element : <Settings/>},
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
