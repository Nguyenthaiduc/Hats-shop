import React from 'react';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
function App() {

  const HatsPage = () => {
    return <>
      <h1>Hats Page</h1>
    </>
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
      </Routes>

    </div>
  )
}

export default App
