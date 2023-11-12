import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Cart from './Components/Cart/Cart'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
