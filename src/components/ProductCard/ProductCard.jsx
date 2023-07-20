import { AiFillHeart, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { getAllGames, setFavorite } from "../../services/games-service";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addOneToCart, getAllCart } from "../../services/cart-service";
import { GameContext } from "../../context/GameContext";

const ProductCard = ({game}) => {
  const { setCart } = useContext(CartContext);
  const { setGames } = useContext(GameContext);

  const handleFavorite = async () => {
      await setFavorite(game.id, !game.favorite)
      setGames(await getAllGames());
  };

  const handleAddToCart = async () => {
    await addOneToCart(game);
    setCart(await getAllCart());
  }

  return (
    <article className="group border border-solid rounded bg-gradient-to-r from-[#2C7EF4] to-[#FF5757] cursor-pointer p-2 xl:w-[300px]">
      <div className="w-full overflow-hidden rounded-t-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Link to={`product/${game.id}`}>
          <img
            src={game.imagesUrl[0]}
            alt={game.title}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </Link>  
      </div>
      <div className="bg-white rounded-b-lg grid grid-cols-2">
        <div>
          <h3 className="text-sm text-gray-700 p-2">{game.title}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900 pl-2">${game.priceApp}</p>
        </div>
        <div className="flex items-start justify-end">
          <button onClick={handleFavorite} className="p-2">
            {game.favorite ? <AiFillHeart size={30} className="text-red-600"/> : <AiOutlineHeart size={30} className="text-red-600"/>}
          </button>
          <button className="p-2" onClick={handleAddToCart}>
            <AiOutlineShoppingCart className="" size={30}/>
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard