import { useContext, useState } from "react";
import {AiOutlineSearch} from "react-icons/ai";
import { GameContext } from "../../context/GameContext";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const { games } = useContext(GameContext);

  return (
    <>
      <form className="flex flex-col gap-x-2 m-4">
        <div className="flex items-center">
          <input className=" bg-slate-200 p-2 w-72 focus:outline-none" placeholder="Search" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <button><AiOutlineSearch className="text-white ml-2" size={25}/></button>
        </div>
        <div className="bg-slate-200 w-72">
        {games.filter((game) => {
            const search = value.toLowerCase();
            const title = game.title.toLowerCase();
            return search && title.startsWith(search);
        }).slice(0,5)
          .map((game) => (
            <Link to={`product/${game.id}`} key={game.id}>
              <div className="flex mt-2 ml-2 mb-1 hover:text-blue-500">
                <div className="w-8">
                  <img src={game.imagesUrl[0]}/>
                </div>
                <div>{game.title}</div>
              </div>
            </Link>
        ))}
      </div>
      </form>
    </>
  )
}

export default SearchBar