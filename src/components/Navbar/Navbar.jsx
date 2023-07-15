import logoWhite from "../../assets/logoWhite.png";

const Navbar = () => {
  return (
    <>
      <nav className="flex m-4 justify-between items-center">
        <img className="w-12 ml-4 hover:scale-125 cursor-pointer" src={logoWhite} alt="logo" />
        <ul className="flex cursor-pointer">
          <li className="p-4 hover:text-sky-900">Home</li>
          <li className="p-4 hover:text-sky-900">Products</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar