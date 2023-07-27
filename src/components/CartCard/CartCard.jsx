import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getAllCart, addOneToCart, removeFromCart } from "../../services/cart-service";
import { GameContext } from "../../context/GameContext";
import { getAllGames } from "../../services/games-service";


const CartCard = ({item}) => {
  const { setCart } = useContext(CartContext);
  const { setGames } = useContext(GameContext);
  const { id } = item;

  const handleDeleteFromCart = async () => {
    await removeFromCart(id, item.quantity);
    setCart(await getAllCart());
    setGames(await getAllGames());
  }

  const handleIncrementQuantity = async () => {
    await addOneToCart(item);
    setCart(await getAllCart());
    setGames(await getAllGames());
  }

  const handleReduceQuantity = async () => {
    await removeFromCart(id, 1);
    setCart(await getAllCart());
    setGames(await getAllGames());
  }

  return (
    <>
      <section className="grid grid-cols-3 mt-8">
        <div className="ml-5 w-32">
          <img src={item.imagesUrl[0]} alt={item.title} />
        </div>
        <div className="flex flex-col justify-between">
          <div className="ml-5">
            <h3 className="font-bold text-xl mb-1">{item.fullTitle}</h3>
            <h6 className="text-gray-400">{item.platform}</h6>
          </div>
          <div className="ml-5 flex ">
            <button onClick={handleReduceQuantity}>-</button>
            <p className="m-3 text-gray-400">Qty {item.quantity}</p>
            <button onClick={handleIncrementQuantity}>+</button>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <h3 className="font-bold text-xl">${item.priceApp}</h3>
          <button onClick={handleDeleteFromCart} className="text-indigo-600 hover:text-indigo-400">Remove</button>
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-300 border-0 w-4/5 m-auto"/>
    </>
  )
}

export default CartCard