import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './Context/ShopContext.jsx'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Register from './Pages/Register/Register.jsx'
import Account from './Pages/Account/Account.jsx'
import ProductCollection from './Pages/ProductCollection/ProductCollection.jsx'
import ContactUs from './Pages/ContactUs/ContactUs.jsx'
import Stores from './Pages/Stores/Stores.jsx'
import QuestionAndAnswers from './Pages/F&Q/QuestionAndAnswers.jsx'
import TermsOfService from './Pages/TermsOfService/TermsOfService.jsx'
import RefundPolicy from './Pages/RefundPolicy/RefundPolicy.jsx'
import DetailsProduct from './Pages/DetailsProduct/DetailsProduct.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/Cart',
    element: <Cart/>
  },
  {
    path: '/Product/:id',
    element: <DetailsProduct/>
  },
  {
    path: '/Account',
    element: <Account/>
  },
  {
    path: '/Collection/:collectionName',
    element: <ProductCollection/>
  },
  {
    path: '/Contact-Us',
    element: <ContactUs/>
  },
  {
    path: '/Stores',
    element: <Stores/>
  },
  {
    path: '/Q&A',
    element: <QuestionAndAnswers/>
  },
  {
    path: '/TermsOfService',
    element: <TermsOfService/>
  },
  {
    path: '/RefundPolicy',
    element: <RefundPolicy/>
  },
  {
    path: '/Register',
    element: <Register/>
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
