import { useEffect, useState } from "react"
import Carousel from "../../components/Carousel/Carousel"
import Navbar from "../../components/Navbar/Navbar"
import ProductList from "../../containers/ProductList/ProductList"
import { getAllGames } from "../../services/games-service"
import Footer from "../../components/Footer/Footer"

const HomePage = () => {
  const [games, setGames] = useState([]);
  
  useEffect(() => {
    getAllGames()
      .then((gamesData) => setGames(gamesData))
      .catch((err) => console.log(err))
  },[]);

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