import Footer from "~/Components/Footer";
import Header from "~/Components/Header";
import card from "./atm.jpeg"
import delivery from "./delivery.jpeg"
import atm from "./card-one.jpeg"
import cardAtm from "./card.jpeg"



export default function features() {
    const features = [
      {
      image: card,
      title: "Wide Acceptance",
      description: "Moniepoint cards can be used at all ATMs and POS terminals nationawide that accepts Verve or Mastrecard.",
    },
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
    <>
        <Header />
        <div className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
<div className="container mx-auto">
<div className="flex flex-col justify-center items-center">
    <h2 className="uppercase text-2xl text-black font-medium tracking-wide ">Features</h2>
    <p className="text-gray-600 text-center p-4">Discover a new level of convenience and control with the moniepoint ATM card. <br /> Packed with features designed to simplify your transactions anf enhance your financial experiences.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
        {
        features.map((feature,index) => (
            <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-x-4">
                <img src={feature.image} alt="" className="w-16 h-16 rounded-full object-cover border border-2 border-purple-600" />
                <h1 className=" text-xl font-bold">{feature.title}</h1>
                </div>
                <p className="text-gray-600 py-4">{feature.description}</p>
            </div>
        ))}
    </div>
</div>
        </div>
        <Footer />
    </>
  )
}
