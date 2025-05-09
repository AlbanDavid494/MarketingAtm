import { Link } from "react-router"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="container px-4 md:px-0 mx-auto my-8 ">

        <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold bg-gradient-to-l from-blue-500 to-purple-500 bg-clip-text text-transparent">MoniepointAgent</h2>

        <nav className="hidden md:flex justify-between items-center">
  <ul className="flex justify-between items-center gap-x-6">
    <li><Link to={"/"} className="text-[16px] text-gray-600 hover:text-purple-500 transition-colors">Home</Link></li>
    <li><Link to={"features"} className="text-[16px] text-gray-600 hover:text-purple-500 ">Features</Link></li>
    <li><Link to={"contact"} className="text-[16px] text-gray-600 hover:text-purple-500 ">Contact us</Link></li>
    
  </ul>
 
</nav>

<button className="bg-gradient-to-r to-purple-600 from-blue-500 hover:bg-purple-700 p-2 font-medium transition-all cursor-pointer rounded-md text-white">Sign in</button>
        </div>


      
      </div>
      </header>
  )
}

export default Header
