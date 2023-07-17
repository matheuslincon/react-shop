import { useEffect, useState } from "react"
import ProductCard from "../../components/ProductCard/ProductCard"
import { BsPlaystation, BsNintendoSwitch, BsXbox } from "react-icons/bs"

const ProductList = ({ games }) => {
  const [filteredGames, setFilteredGames] = useState(games)

  useEffect(() => {
    setFilteredGames(games);
  }, [games])

  const handleFilter = (platform) => {
    setFilteredGames(games.filter((game) => game.platform === platform))
  } 

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="flex justify-around mb-12">
          <button onClick={e => handleFilter(e.target.value)} value={"Playstation 5"} className="bg-gradient-to-r from-[#2C7EF4] to-[#FF5757] text-white w-36 h-36 rounded-full flex justify-center items-center flex-col opacity-60 hover:opacity-100">
            <BsPlaystation size={60}/>
            Playstation 5
          </button>
          <button onClick={e => handleFilter(e.target.value)} value={"Nintendo Switch"} className="bg-gradient-to-r from-[#2C7EF4] to-[#FF5757] text-white w-36 h-36 rounded-full flex justify-center items-center flex-col opacity-60 hover:opacity-100">
            <BsNintendoSwitch size={60}/>
            Nintendo Switch
          </button>
          <button onClick={e => handleFilter(e.target.value)} value={"Xbox One"} className="bg-gradient-to-r from-[#2C7EF4] to-[#FF5757] text-white w-36 h-36 rounded-full flex justify-center items-center flex-col opacity-60 hover:opacity-100">
            <BsXbox size={60}/>
            Xbox One
          </button>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {filteredGames.map((game) => (
            <ProductCard game={game} key={game.id}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductList