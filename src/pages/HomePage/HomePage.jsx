import Carousel from "../../components/Carousel/Carousel"
import Navbar from "../../components/Navbar/Navbar"
import ProductList from "../../containers/ProductList/ProductList"
import Footer from "../../components/Footer/Footer"
import { useContext } from "react"
import { GameContext } from "../../context/GameContext"

const HomePage = () => {
  const { games } = useContext(GameContext);


  return (
    <>
      <Navbar/>
      <Carousel/>
      <ProductList games={games}/>
      <Footer/>
    </>
  )
}

export default HomePage