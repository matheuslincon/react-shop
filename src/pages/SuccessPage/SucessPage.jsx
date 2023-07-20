import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { deleteFromCart } from "../../services/cart-service";
import { AiOutlineCheckCircle, AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from "react-router-dom";

const SucessPage = () => {
  const {cart} = useContext(CartContext);
  console.log(cart)

  useEffect(() => {
      console.log("RUNNING USEEFFECT")
      cart.forEach((item) => {
        deleteFromCart(item.id)
      })
  }, [cart])

  return (
    <>
      <div style={{backgroundImage: `url(https://i.ibb.co/HTBnmGB/23d2bdb3-ae78-40a4-b4e1-fbd17ce2395b.png)`}} className="w-screen h-screen bg-cover bg-center absolute brightness-[0.2]">
      </div>
      <div className="flex items-center justify-center relative h-screen brightness-150">
        <div className="flex flex-col items-center">
          <AiOutlineCheckCircle className="text-green-600" size={140}/>
          <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#2C7EF4] to-[#FF5757]">Thank You for your purchase !</h1>
          <p className="text-4xl mb-8 text-white">Your order has been completed. The games are on the way 🙌🏼</p>
          <Link
            to={"/"}
            className="inline-flex items-center px-8 py-4 text-white bg-gradient-to-r from-[#2C7EF4] to-[#FF5757] rounded-full hover:opacity-80">
            <AiOutlineArrowLeft className="mr-4"/>
            <span className="font-medium">
              Go Back
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SucessPage