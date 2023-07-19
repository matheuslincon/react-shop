import { useContext, useState } from "react";
import {AiOutlineSearch} from "react-icons/ai";
import { GameContext } from "../../context/GameContext";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const { games } = useContext(GameContext);

  return (
    <>
      <form className="flex items-center gap-2 m-4">
        <input className="rounded bg-slate-200 p-2 w-72 focus:outline-none" placeholder="Search" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button><AiOutlineSearch className="text-white ml-2" size={25}/></button>
      </form>
      <div className=" absolute flex flex-col z-[100] bg-slate-200">
        {games.filter((game) => {
            const search = value.toLowerCase();
            const title = game.title.toLowerCase();
            return search && title.startsWith(search);
        }).slice(0,5)
          .map((game) => (
            <Link to={`product/${game.id}`} key={game.id}>
              <div>{game.title}</div>
            </Link>
        ))}
      </div>
    </>
  )
}

export default SearchBar