import React from 'react';
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import Header from './components/Header/Header'
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp'
function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/signin" element={<SignInAndSignUpPage />}></Route>
      </Routes>

    </div>
  )
}

export default App
