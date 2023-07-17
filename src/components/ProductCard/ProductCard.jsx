import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { setFavorite } from "../../services/games-service";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductCard = ({game}) => {
  const [isFavorite, setIsFavorite] = useState(game.favorite);

  const handleFavorite = async () => {
      await setFavorite(game.id, !game.favorite)
      setIsFavorite(!game.favorite)
  };

  return (
    <article className="group border border-solid rounded bg-gradient-to-r from-[#2C7EF4] to-[#FF5757] cursor-pointer p-2">
      <div className="w-full overflow-hidden rounded-t-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
      <Link to={`product/${game.id}`}>
        <img
          src={game.imagesUrl[0]}
          alt={game.title}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </Link>  
      </div>
      <div className="bg-white rounded-b-lg flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 p-2">{game.title}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900 pl-2">${game.price}</p>
        </div>
        <div onClick={handleFavorite} className="p-2 pr-4">
          {isFavorite ? <AiFillHeart size={30} className="text-red-600"/> : <AiOutlineHeart size={30} className="text-red-600"/>}
        </div>
      </div>
    </article>
  )
}

export default ProductCard