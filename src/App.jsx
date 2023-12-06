import Register from './Pages/Register/Register'
import Account from './Pages/Account/Account'
import Cart from './Pages/Cart/Cart'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import DetailsProduct from './Pages/DetailsProduct/DetailsProduct'
import ProductCollection from './Pages/ProductCollection/ProductCollection'
import ContactUs from './Pages/ContactUs/ContactUs'
import Stores from './Pages/Stores/Stores'
import QuestionAndAnswers from './Pages/F&Q/QuestionAndAnswers'
import TermsOfService from './Pages/TermsOfService/TermsOfService'
import RefundPolicy from './Pages/RefundPolicy/RefundPolicy';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Account' element={<Account/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Product/:id' element={<DetailsProduct/>}/>
          <Route path='/Collection/:collectionName' element={<ProductCollection/>}/>
          <Route path='/Contact-Us' element={<ContactUs/>}/>
          <Route path='/Stores' element={<Stores/>}/>
          <Route path='/Q&A' element={<QuestionAndAnswers/>}/>
          <Route path='/TermsOfService' element={<TermsOfService/>}/>
          <Route path='/RefundPolicy' element={<RefundPolicy/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>      
    </>
  )
}

export default App
