import { slides } from "../../services/slides.js";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  }

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <section className="max-w-full h-[500px] relative group">
      <div style={ {backgroundImage: `url(${slides[currentIndex]})`}} className="w-full h-full bg-cover duration-500 ease-out">
      </div>
      <div className="hidden group-hover:flex absolute inset-0 flex items-center justify-between p-8">
        <IconContext.Provider value={{ color: "blue", className: "opacity-30 hover:opacity-100"}}>
          <button onClick={prevSlide} className="p-1 rounded-full shadow bg-white/30 text-gray-800 hover:bg-white">
            <BsChevronLeft size={40}/>
          </button>
          <button onClick={nextSlide} className="p-1 rounded-full shadow bg-white/30 text-gray-800 hover:bg-white">
            <BsChevronRight size={40}/>
          </button>
        </IconContext.Provider>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="hidden group-hover:flex items-center justify-center gap-4">
          {slides.map((_, i) => (
            <div key={i} onClick={() => setCurrentIndex(i)} className={`transition-all w-3 h-3 bg-white rounded-full cursor-pointer ${currentIndex === i ? "p-2" : "bg-opacity-50"}`}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel