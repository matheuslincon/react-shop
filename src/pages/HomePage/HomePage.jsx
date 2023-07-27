import Carousel from "../../components/Carousel/Carousel"
import Navbar from "../../components/Navbar/Navbar"
import ProductList from "../../containers/ProductList/ProductList"
import Footer from "../../components/Footer/Footer"

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <ProductList/>
      <Footer/>
    </>
  )
}

export default HomePage