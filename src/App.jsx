import './App.css'
import Register from './Pages/Register/Register'
import Hero from './Components/Hero/Hero'
import Account from './Pages/Account/Account'
import Cart from './Pages/Cart/Cart'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Account' element={<Account/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
