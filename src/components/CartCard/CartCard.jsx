import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getAllCart, removeFromCart } from "../../services/cart-service";


const CartCard = ({item}) => {
  const { setCart } = useContext(CartContext);
  const { id } = item;

  const handleRemoveFromCart = async () => {
    await removeFromCart(id);
    setCart(await getAllCart());
  }

  return (
    <>
      <section className="grid grid-cols-3 mt-8">
        <div className="ml-5 w-32">
          <img src={item.imagesUrl[0]} alt={item.title} />
        </div>
        <div className="flex flex-col justify-between">
          <div className="ml-5">
            <h3 className="font-bold text-xl mb-1">{item.title}</h3>
            <h6 className="text-gray-400">{item.platform}</h6>
          </div>
          <p className="ml-5 text-gray-400">Qty {item.quantity}</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <h3 className="font-bold text-xl">${item.price}</h3>
          <button onClick={handleRemoveFromCart} className="text-indigo-600 hover:text-indigo-400">Remove</button>
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-300 border-0 w-4/5 m-auto"/>
    </>
  )
}

export default CartCard