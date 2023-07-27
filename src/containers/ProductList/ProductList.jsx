import { useContext, useEffect, useState } from "react"
import ProductCard from "../../components/ProductCard/ProductCard"
import { SiNintendoswitch, SiAmazongames, SiPlaystation, SiXbox } from "react-icons/si";
import { GameContext } from "../../context/GameContext";
import Pagination from "../../components/Pagination/Pagination";

const ProductList = () => {
  const { games } = useContext(GameContext);
  const [filteredGames, setFilteredGames] = useState(games)

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;

  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage

  const currentPosts = filteredGames.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    setFilteredGames(games);
  }, [games])

  const handleClick = () => {
    setFilteredGames(games)
  }

  const handleFilter = (platform) => {
    setFilteredGames(games.filter((game) => game.platform === platform))
  } 

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="flex flex-wrap justify-around mb-12">
          <button className="bg-gradient-to-r from-[#2C7EF4] to-[#FF5757] text-white w-36 h-36 rounded-full flex justify-center items-center flex-col opacity-60 hover:opacity-100" onClick={handleClick}>
            <SiAmazongames size={60}/>
            All Games
          </button>
          <button value={"Playstation 5"} className="bg-gradient-to-r from-[#2C7EF4] to-[#FF5757] text-white w-36 h-36 rounded-full flex justify-center items-center flex-col opacity-60 hover:opacity-100" onClick={e => handleFilter(e.target.value)}>
            <SiPlaystation size={60}/>
            Playstation 5
          </button>
          <button onClick={e => handleFilter(e.target.value)} value={"Nintendo Switch"} className="bg-gradient-to-r from-[#2C7EF4] to-[#FF5757] text-white w-36 h-36 rounded-full flex justify-center items-center flex-col opacity-60 hover:opacity-100">
            <SiNintendoswitch size={60}/>
            Nintendo Switch
          </button>
          <button onClick={e => handleFilter(e.target.value)} value={"Xbox One"} className="bg-gradient-to-r from-[#2C7EF4] to-[#FF5757] text-white w-36 h-36 rounded-full flex justify-center items-center flex-col opacity-60 hover:opacity-100">
            <SiXbox size={60}/>
            Xbox One
          </button>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {currentPosts.map((game) => (
            <ProductCard game={game} key={game.id}/>
          ))}
        </div>
        <Pagination totalPosts={filteredGames.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </div>
    </section>
  )
}

export default ProductList