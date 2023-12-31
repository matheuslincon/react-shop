import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import { getGameById } from "../../services/games-service";
import Footer from "../../components/Footer/Footer";
import NotFound from "../../components/NotFound/NotFound";

const ProductPage = () => {
  const [game, setGame] = useState(null);
  const [error, setError] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    getGameById(id)
      .then((game) => setGame(game))
      .catch((e) => setError(e))
  },[id])

  return (
    <>
      <Navbar/>
      {error && <NotFound/>}
      {game && <Product game={game} setGame={setGame}/>}
      <Footer/>
    </>
  )
}

export default ProductPage