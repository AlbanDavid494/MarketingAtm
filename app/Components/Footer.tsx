import { Link } from "react-router";

const Footer = () => {
    let date = new Date()
let year = date.getFullYear()
  return (
    
<footer className="border-t border-gray-200 bg-gray-50 py-12 md:px-0 px-4">

<div className="container mx-auto">

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div>
<span className="text-xl font-bold bg-gradient-to-r to-blue-500 from-purple-500 bg-clip-text text-transparent">MoniePointAgent</span>
<p className="mt-4 text-sm text-gray-600">Access your monry easily with the moniepoint ATM Card</p>
</div>

<div>
<h3 className="tracking-wider font-medium uppercase text-sm">Company</h3>
<ul className="gap-8 mt-4">
  <li><Link to={"age"} className="text-gray-600 text-sm hover:text-purple-600">Home</Link></li>

  <li>
  <Link to={"age"} className="text-gray-600 text-sm hover:text-purple-600">Features</Link>
  </li>

  <li>
    <Link to={"age"} className="text-gray-600 text-sm hover:text-purple-600">Contact us</Link>
    </li>
</ul>

</div>

<div> 
<h3 className="uppercase font-medium text-sm tracking-wider">Services</h3>
<ul>
<li>
  <Link to={"age"} className="text-gray-600 text-sm hover:text-purple-600">POS Terminal Services</Link>
  </li>
  <li>
  <Link to={"age"} className="text-gray-600 text-sm hover:text-purple-600">Agency Banking</Link>
  </li>
  <li>
  <Link to={"age"} className="text-gray-600 text-sm hover:text-purple-600">Business Banking</Link>
  </li>

  <li>
  <Link to={"age"} className="text-gray-600 text-sm hover:text-purple-600">Access to Loans</Link>
  </li>

</ul>

</div>

<div>
<h3 className="font-medium uppercase tracking-wider text-sm">Subscribe</h3>
<p className="text-sm text-gray-600 my-4" >Subscribe to our newsletter for the latest moniepoint updates and insghts.</p>

<div className="flex flex-col gap-2 sm:flex-row max-w-md">
<input type="email" placeholder="email@gmail.com" className="bg-white rounded-md px-2 md:py-0 py-4 outline-none border-gray-300 border text-sm" />
<button className="bg-blue-600 hover:bg-blue-700 md:p-2 rounded-md text-white p-4">Subscribe</button>
</div>

</div>

</div>


<div className="flex items-center justify-center mt-4 text-sm text-gray-500 border-t border-gray-200 pt-4">All rights reserved &copy; {year}</div>
</div>



</footer>
  )
}

export default Footer
