import SearchBar from "../SearchBar/SearchBar";
import logoBlack from "../../assets/logoBlack1.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="flex justify-between items-center bg-[#2a2a2a]">
      <Link to="/" rel="noreferrer">
        <img className="w-12 ml-8 hover:scale-125 cursor-pointer" src={logoBlack} alt="logo" />
      </Link>
      <SearchBar/>
      <AiOutlineShoppingCart className="mr-8 text-white cursor-pointer" size={30}/>
    </nav>
  )
}

export default Navbar