import { BrowserRouter, useRoutes, Outlet } from 'react-router-dom'
import Home from './Home'
import Rip1 from './Rip1'
import Rip2 from './Rip2'
import Navbar from '../Components/Navbar'
import '../App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <Home />
    },
    {
      path: '/rip-1',
      element: <Rip1 />
    },
    {
      path: '/rip-2',
      element: <Rip2 />
    },
  ])
  return routes
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Outlet />
    </BrowserRouter>
  )
}

export default App
