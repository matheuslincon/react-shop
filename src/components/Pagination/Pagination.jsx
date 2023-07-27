
const Pagination = ({totalPosts, postPerPage, setCurrentPage, currentPage}) => {
  let pages = []

  for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
    pages.push(i)
  }


  return (
    <div className="flex flex-wrap justify-center">
      {
        pages.map((page, i) => (
          <button className={`w-10 h-10 m-4 bg-gradient-to-r from-[#2C7EF4] to-[#FF5757] text-white rounded-lg hover:opacity-100 ${currentPage === page ? "opacity-100" : "opacity-60"}`} onClick={() => setCurrentPage(page)} key={i}>{page}</button>
        ))
      }
    </div>
  )
}

export default Pagination