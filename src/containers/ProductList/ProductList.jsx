import ProductCard from "../../components/ProductCard/ProductCard"


const ProductList = ({ games }) => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {games.map((game) => (
            <ProductCard key={game.id} game={game}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductList