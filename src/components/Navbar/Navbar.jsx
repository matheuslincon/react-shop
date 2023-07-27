import SearchBar from "../SearchBar/SearchBar";
import logoBlack from "../../assets/logoBlack1.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import Modal from "../../components/Modal/Modal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <nav className="flex justify-around items-center bg-[#2a2a2a]">
      <Link to="/" rel="noreferrer">
        <img className="w-12 hover:scale-125 cursor-pointer" src={logoBlack} alt="logo" />
      </Link>
      <SearchBar/>
      <button className="flex gap-4 px-4 py-2 rounded-lg bg-[#2a2a2a] hover:bg-gradient-to-r from-[#2C7EF4] to-[#FF5757]" onClick={() => setOpen(true)}>
        <AiOutlineShoppingCart className="text-white" size={30}/>
        {cart.length > 0 && <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center text-red-600">{cart.length}</div>}
      </button>
      <Modal open={open} onClose={() => setOpen(false)}/>
    </nav>
  )
}

export default Navbar