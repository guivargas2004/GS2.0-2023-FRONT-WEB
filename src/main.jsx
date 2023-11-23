import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './componentes/Login.jsx'
import Register from './componentes/Register.jsx'
import './styles/reset.scss'
import Home from './componentes/Home.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/home', element: <Home /> }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
