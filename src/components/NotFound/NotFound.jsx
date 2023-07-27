import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="font-semibold text-4xl text-[#FF5757]">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#2C7EF4] sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, the Game you are looking does not exist.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to={"/"}
                className="rounded-md bg-gradient-to-r from-[#2C7EF4] to-[#FF5757] text-white px-8 py-4 text-sm font-semibold text-white shadow-sm hover:opacity-80"
              >
                Go back home
              </Link>
            </div>
          </div>
      </main>
    </>
  )
}

export default NotFound