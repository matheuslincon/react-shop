import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addOneToCart, getAllCart } from "../../services/cart-service";
import { getGameById } from "../../services/games-service";

const Product = ({game, setGame}) => {
  const { description, developer, genre, imagesUrl, platform, price, quantity, releaseYear, title} = game;
  const [currentIndex, setCurrentIndex] = useState(0);

  const { setCart } = useContext(CartContext);

  const handleAddToCart = async () => {
    await addOneToCart(game);
    setCart(await getAllCart());
    setGame(await getGameById(game.id));
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 max-h-screen">
      <div className="p-8">
        <div className="mb-4">
          <img className="" src={imagesUrl[currentIndex]} alt="" />
        </div>
        <div className="flex items-center justify-center gap-2">
          {imagesUrl.map((image, i) => (
            <div key={i} onClick={() => setCurrentIndex(i)} className={`transition-all cursor-pointer rounded-lg ${currentIndex === i ? "border lg:border-4 border-solid border-blue-500" : "bg-opacity-50"}`}>
              <img className="" src={image} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="p-8">
        <h2 className="font-bold text-4xl my-4">{title}</h2>
        <h4 className="font-bold text-2xl mb-4 text-gray-600">${price}</h4>
        <h3 className="font-bold text-2xl mb-4">{description[0]}</h3>
        <p className="font-medium text-gray-500 text-justify pb-4">{description[1]}</p>
        <p className="text-lg font-medium text-gray-900 mb-3">{quantity} in stock</p>
        <div className="flex items-center justify-center">
          <button disabled={game.quantity === 0 ? true : false} onClick={handleAddToCart} className="w-full lg:w-[600px] text-xl py-4 rounded-lg bg-gradient-to-r from-[#2C7EF4] to-[#FF5757] text-white opacity-60 hover:opacity-100 disabled:opacity-0">Add to Cart</button>
        </div>
        <h6 className="mt-12 text-xl font-bold">Details</h6>
        <div className="mt-6 border-t border-gray-200">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Developer</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{developer}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Genre</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{genre}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Release Year</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{releaseYear}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Platform</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{platform}</dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  )
}

export default Product