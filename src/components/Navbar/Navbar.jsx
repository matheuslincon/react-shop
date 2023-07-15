import SearchBar from "../SearchBar/SearchBar";
import logoBlack from "../../assets/logoBlack.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#2a2a2a]">
      <img className="w-12 ml-8 hover:scale-125 cursor-pointer" src={logoBlack} alt="logo" />
      <SearchBar/>
      <AiOutlineShoppingCart className="mr-8 text-white cursor-pointer" size={30}/>
    </nav>
  )
}

export default Navbar