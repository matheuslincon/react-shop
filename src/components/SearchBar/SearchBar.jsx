import {AiOutlineSearch} from "react-icons/ai";

const SearchBar = () => {
  return (
    <>
      <form className="flex items-center gap-2 m-4">
        <input className="rounded bg-slate-200 p-2 w-72 focus:outline-none" placeholder="Search" type="text" name="" id="" />
        <button><AiOutlineSearch className="text-white ml-2" size={25}/></button>
      </form>
    </>
  )
}

export default SearchBar