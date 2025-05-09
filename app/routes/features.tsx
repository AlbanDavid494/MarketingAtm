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
              title: "SEO Optimization",
              description: "Improve your website's visibility in search engines and drive organic traffic.",
            },
            {
              image: delivery,
              title: "PPC Advertising",
              description: "Create targeted ad campaigns that deliver immediate results and ROI.",
            },
            {
              // icon: <Mail className="h-10 w-10 text-purple-600" />,
              image: atm,
              title: "Email Marketing",
              description: "Nurture leads and drive conversions with personalized email campaigns.",
            },
            {
              // icon: <Target className="h-10 w-10 text-purple-600" />,
              image: cardAtm,
              title: "Content Marketing",
              description: "Create valuable content that attracts and engages your target audience.",
            },
    ]
  return (
    <>
        <Header />
        <div className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
<div className="container mx-auto">
<div className="flex flex-col justify-center items-center">
    <h2 className="uppercase text-2xl font-medium tracking-wide ">Features</h2>
    <p className="text-gray-600 py-2 text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, officiis.</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
