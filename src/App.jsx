import './App.css'
import Register from './Pages/Register/Register'
import Account from './Pages/Account/Account'
import Cart from './Pages/Cart/Cart'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Account' element={<Account/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
