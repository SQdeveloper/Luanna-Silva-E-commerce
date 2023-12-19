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
      // <BrowserRouter>        
      //   <Routes>
      //     <Route path='/LuannaSilva/' element={<Home/>}/>
      //     <Route path='/LuannaSilva/Cart' element={<Cart/>}/>
      //     <Route path='/LuannaSilva/Account' element={<Account/>}/>
      //     <Route path='/LuannaSilva/Register' element={<Register/>}/>
      //     <Route path='/LuannaSilva/Product/:id' element={<DetailsProduct/>}/>
      //     <Route path='/LuannaSilva/Collection/:collectionName' element={<ProductCollection/>}/>
      //     <Route path='/LuannaSilva/Contact-Us' element={<ContactUs/>}/>
      //     <Route path='/LuannaSilva/Stores' element={<Stores/>}/>
      //     <Route path='/LuannaSilva/Q&A' element={<QuestionAndAnswers/>}/>
      //     <Route path='/LuannaSilva/TermsOfService' element={<TermsOfService/>}/>
      //     <Route path='/LuannaSilva/RefundPolicy' element={<RefundPolicy/>}/>
      //   </Routes>
        <Footer/>
      // </BrowserRouter>      
  )
}

export default App
