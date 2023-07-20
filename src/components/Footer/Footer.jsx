import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="bg-[#2a2a2a] w-full">
      <div className="max-w-screen-xl px-4 py-12 mx-auto flex items-center justify-between sm:px-6 lg:px-8">
        <p className="ml-8 text-center text-white opacity-50">
            © 2023 this is a personal project.
        </p>
        <div className="mr-8 flex justify-center space-x-6">
          <BsFacebook className="text-white cursor-pointer opacity-50 hover:opacity-100" size={30}/>
          <BsInstagram className="text-white cursor-pointer opacity-50 hover:opacity-100" size={30}/>
          <BsTwitter className="text-white cursor-pointer opacity-50 hover:opacity-100" size={30}/>
          <BsGithub className="text-white cursor-pointer opacity-50 hover:opacity-100" size={30}/>
          <BsYoutube className="text-white cursor-pointer opacity-50 hover:opacity-100" size={30}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer

