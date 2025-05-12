
import { Link } from "react-router";
import type { Route } from "./+types/home";
import Footer from "~/Components/Footer";
import Header from "~/Components/Header";
import Hero from "~/Components/Hero";
import card from "./atm.jpeg"
import delivery from "./delivery.jpeg"
import atm from "./card-one.jpeg"
import cardAtm from "./card.jpeg"


export function meta({}: Route.MetaArgs) {
  return [
    { title: "moniepoint Agent" },
    { name: "description", content: " Moniepoint Atm Card!" },
  ];
}

export default function Home() {
  const features = [
        {
          image: delivery,
          title: "Online Transactions",
          description: "You can ue your moniepoint card for online Payment and subscriptions.",
        },
        {
          // icon: <Mail className="h-10 w-10 text-purple-600" />,
          image: atm,
          title: "Secure banking",
          description: "Moniepoint uses security measures to protect your financial information.",
        },
        {
          // icon: <Target className="h-10 w-10 text-purple-600" />,
          image: cardAtm,
          title: "24/7 Support",
          description: "Access around-the-clock customers suport for any card-related issues.",
        },
]
  
  return (
<div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <Hero />
{/* features */}
<section className="py-20 px-4 md:px-0 container mx-auto">
<div className="flex justify-center flex-col">
<h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Features</h2>
<p className="text-gray-600 text-center p-4">Discover a new level of convenience and control with the moniepoint ATM card. <br /> Packed with features designed to simplify your transactions anf enhance your financial experiences.</p>
</div>
<div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{
  features.map((service, index) => (
    <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
    <div className="flex items-center gap-x-4">
    <img src={service.image} alt="" className="w-16 h-16 rounded-full object-cover border border-2 border-purple-600" />
    <h1 className=" text-xl font-bold">{service.title}</h1>
    </div>
    <p className="text-gray-600 py-4">{service.description}</p>
</div>
    ))}
</div>
<div className="text-center mt-5 md:mt-6">
<Link to={'/features'} className="p-2 rounded-md text-white bg-purple-500 hover:bg-purple-700 cursor-pointer tracking-tight mt-4">view more</Link>
</div>

</section>

{/* banner to contact */}
<section className="flex flex-col justify-center items-center text-center py-20 bg-purple-500">
<h2 className="text-2xl uppercase tracking-wide font-medium">Get Your Moniepoint ATM Card - Easy, Covenient and Secure</h2>
<p className="max-w-2xl text-white/60 tracking-tight py-4 text-lg">Request, activate and manage your moniepoint ATM card directly from your app. Enjoy the convenience of seamless tranactions and security of in-app control. <br /> <span className="font-medium tracking-tighter">Have any Questions and issues, want clarifications?</span></p>
<Link to={"contact"}><button className="border border-gray-300 rounded-md p-2 bg-gray-200 text-purple-500 tracking-tighter font-medium hover:bg-gray-100 transition-all cursor-pointer">Contact me</button></Link>
</section>
    </main>
<Footer />

  </div>
  )
}
