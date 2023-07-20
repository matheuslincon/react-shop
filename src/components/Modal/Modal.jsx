import { AiOutlineClose } from "react-icons/ai";
import CartCard from "../CartCard/CartCard";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Modal = ({ open, onClose }) => {
  const { setCart, cart } = useContext(CartContext);
  console.log(cart)

  const getTotal = cart.reduce((total, item) => {
    total += (item.priceApp * item.quantity)

    return total
  },0)

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: cart })
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if(response.url) {
        window.location.assign(response.url);
      }
    })
    setCart([])
  }
  
  return (
    <div className={`fixed z-[100] inset-0 w-full h-full ${!open && "invisible"}`}>
      <div onClick={onClose} className={`absolute duration-500 ease-out transition-all inset-0 w-full h-full bg-gray-900 ${open ? "opacity-50" : "opacity-0"}`}></div>
      <div onClick={(e) => e.stopPropagation()} className={`absolute duration-500 ease-out transition-all w-[450px] overflow-y-auto max-h-screen bg-white right-0 top-0 ${!open && "translate-x-full"}`}>
        <div onClick={onClose} className="flex items=center justify-center absolute top-0 right-0 mt-5 mr-5 cursor-pointer">
          <AiOutlineClose className="text-gray-400" size={20}/>
        </div>
        <h2 className="ml-5 mt-5 font-bold text-xl">Shopping Cart</h2>
        {cart.map((item) => (
          <CartCard key={item.id} item={item} />
        ))}
        <br />
        <div className="mr-5 ml-5">
          <div className="flex justify-between">
            <h3 className="text-xl">SubTotal: </h3>
            <h3 className="text-xl">${getTotal.toFixed(2)}</h3>
          </div>
          <div>
            <button onClick={checkout} className="w-full rounded-lg mt-8 mb-8 px-8 py-4 bg-gradient-to-r from-[#2C7EF4] to-[#FF5757] text-white text-xl opacity-60 hover:opacity-100">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal