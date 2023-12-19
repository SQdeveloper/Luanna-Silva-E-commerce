import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './Context/ShopContext.jsx'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Cart from './Pages/Cart/Cart.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/LuannaSilva/Cart',
    element: <Cart/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ShopContextProvider>
  </React.StrictMode>,
)
