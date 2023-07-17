import SearchBar from "../SearchBar/SearchBar";
import logoBlack from "../../assets/logoBlack1.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="flex justify-around items-center bg-[#2a2a2a]">
      <Link to="/" rel="noreferrer">
        <img className="w-12 hover:scale-125 cursor-pointer" src={logoBlack} alt="logo" />
      </Link>
      <SearchBar/>
      <button className="flex gap-4 px-4 py-2 rounded-lg bg-[#2a2a2a] hover:bg-gradient-to-r from-[#2C7EF4] to-[#FF5757]">
        <AiOutlineShoppingCart className="text-white cursor-pointer" size={30}/>
      </button>
    </nav>
  )
}

export default Navbar