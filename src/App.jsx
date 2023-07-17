import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/HomePage/HomePage"
import Product from "./pages/ProductPage/ProductPage"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App