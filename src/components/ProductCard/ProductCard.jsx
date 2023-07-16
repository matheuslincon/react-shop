
const ProductCard = ({game}) => {
  console.log(game)

  return (
    <article className="group border border-solid rounded bg-gradient-to-r from-[#2C7EF4] to-[#FF5757] cursor-pointer p-2">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={game.imagesUrl[0]}
          alt={game.title}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-white">{game.title}</h3>
      <p className="mt-1 text-lg font-medium text-white">${game.price}</p>
    </article>
  )
}

export default ProductCard