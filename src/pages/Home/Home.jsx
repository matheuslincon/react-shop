import { useEffect, useState } from "react"
import Carousel from "../../components/Carousel/Carousel"
import Navbar from "../../components/Navbar/Navbar"
import ProductList from "../../containers/ProductList/ProductList"
import { getAllGames } from "../../services/games-service"

const Home = () => {
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
    </>
  )
}

export default Home