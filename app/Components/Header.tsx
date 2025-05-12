import { Link } from "react-router"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="container px-4 md:px-0 mx-auto py-4 md:py-8 my-0 ">

        <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold bg-gradient-to-l from-blue-500 to-purple-500 bg-clip-text text-transparent">MoniepointAgent</h2>

        <nav className="hidden md:flex justify-between items-center">
  <ul className="flex justify-between items-center gap-x-6">
    <li><Link to={"/"} className="text-[16px] text-gray-600 hover:text-purple-500 transition-colors">Home</Link></li>
    <li><Link to={"features"} className="text-[16px] text-gray-600 hover:text-purple-500 ">Features</Link></li>
    <li><Link to={"contact"} className="text-[16px] text-gray-600 hover:text-purple-500 ">Contact us</Link></li>
    
  </ul>
 
</nav>
<div className="flex gap-x-3">

<button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
  {
    isMobileMenuOpen ?  <IoMdClose className="text-black" /> : <RxHamburgerMenu className="text-black" /> 
  }
</button>
<Link to={"https://moniepoint.sng.link/Dg42r/m0cx?_smtype=3"}><button className="bg-gradient-to-r to-purple-600 from-blue-500 hover:bg-purple-700 p-2 font-medium transition-all cursor-pointer rounded-md text-white">Sign in</button></Link>

</div>
        </div> 

      </div>

{
  isMobileMenuOpen && (
<div className="md:hidden">
  <div className="flex flex-col space-y-4 px-4 pt-2 pb-4 bg-white">
  <Link to={"/"}
                className="text-sm font-medium text-black hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
  <Link to={"/features"}
                className="text-sm font-medium text-black hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                features
              </Link>
  <Link to={"/contact"}
                className="text-sm font-medium text-black hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                contact
              </Link>
  </div>
</div>
  )
}

      </header>
  )
}

export default Header
