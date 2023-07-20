import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import Product from "./pages/ProductPage/ProductPage";
import SuccessPage from "./pages/SuccessPage/SucessPage";
import { CartProvider } from "./context/CartContext";
import { GameProvider } from "./context/GameContext";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


const App = () => {
  return (
    <>
    <GameProvider>
      <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/product/:id' element={<Product/>}/>
              <Route path='/success' element={<SuccessPage/>}/>
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
          </BrowserRouter>
      </CartProvider>
      </GameProvider>
    </>
  )
}

export default App