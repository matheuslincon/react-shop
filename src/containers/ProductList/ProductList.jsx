import ProductCard from "../../components/ProductCard/ProductCard"
import { Link } from "react-router-dom";

const ProductList = ({ games }) => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {games.map((game) => (
            <Link to={`product/${game.id}`} key={game.id}>
              <ProductCard game={game}/>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductList