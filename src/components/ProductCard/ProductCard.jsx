import { useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

const ProductCard = ({game}) => {
  const [isFavorite, setIsFavorite] = useState(game.favorite);

  const handleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <article className="group border border-solid rounded bg-gradient-to-r from-[#2C7EF4] to-[#FF5757] cursor-pointer p-2">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={game.imagesUrl[0]}
          alt={game.title}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
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