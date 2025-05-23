import { CiLocationArrow1, CiMail } from "react-icons/ci";
import { FaArrowLeft, FaFacebookF, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import Footer from "~/Components/Footer";
import Header from "~/Components/Header";

export default function Contact (){
  const socailIcons = [
    {
    icons: <FaFacebookF />,
    },
    {
      icons:  <FaXTwitter />
    },
   {
    icons: <FaInstagram />
   },
   {
    icons: <FaLinkedin />
   }   
  ]

    return(
        <div>
            <Header />
            <section className="py-15 bg-gradient-to-r from-purple-50 to-blue-50">
<div className="container mx-auto">

<Link to={"/"} className="text-purple-500 hover:text-purple-700 transition-colors tracking-tight px-4 mb-12 md:px-0 flex gap-x-3 items-center"> <FaArrowLeft /> back home</Link>

    <div className="grid gap-12 md:grid-cols-2 mt-2 md:mt-4 px-4 md:px-0">
        <div>
            <h2 className="text-3xl text-black font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600">Have questions? Fill out the form and we'll get back to you within 24 hours.</p>
            <div className="mt-8 space-y-6">
                <div className="flex items-center text-gray-600">
                <CiMail className="mr-3 h-5 w-5 text-purple-600" />
                <span>albandavid494@gmail.com</span>
                </div>

                <div className="flex items-center text-gray-600">
                    <FaPhoneAlt className="mr-3 h-5 w-5 text-purple-600" />
                    <span>+234 8114062518</span>
                  </div>

                  <div className="mt-4 flex space-x-4">
                    {socailIcons.map((icon, index) => (
                      <Link to={"jjjj"}
                        key={index}
                    
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-200 text-gray-600 transition-colors hover:bg-purple-600 hover:text-white"
                      >
                        
                        <div className="h-5 w-5">{icon.icons}</div>
                      </Link>
                    ))}
                  </div>
            </div>
        </div>

        <div>
        <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                    >
                      <option value="" className="text-gray-700">I don't have moniepoint account?</option>
                      <option value="seo" className="text-gray-700">i have network issues with my POS Terminal</option>
                      <option value="ppc" className="text-gray-700">
                        I need moniepoint atm card
                      </option>                    
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                      placeholder="Tell me about your issue.."
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full flex justify-center gap-x-2 text-white items-center bg-purple-600 rounded-md p-2 hover:bg-purple-700">
                    Send Message <CiLocationArrow1 className="font-bold mt-2" />
                  </button>
                </form>
        </div>
    </div>
</div>
            </section>
            <Footer />
        </div>
    )
}