import card from '../Components/card-hero.png'


const Hero = () => {
  return (
    <section className="container mx-auto">
      
<div className="bg-gradient-to-r from-purple-50 to-blue-50 py-20 md:py-28">

<div className="flex md:flex-row flex-col justify-around">

<div className="">
    <h1 className="text-4xl font-bold tracking-tight"> <span className="text-purple-500">Powering Seamless Transactions</span> <br /> Across Port Harcourt and Nigeria.</h1>
    <p className="text-gray-600 text-md max-w-sm py-4">Take control of your financies with the moniepoint ATM Card. Manage your card track transactions and enjoy secure payments - all from the convenience of your mobile app. Expeience modern banking designed for you.</p>
    <button className="p-3 bg-purple-500 rounded-md text-white hover:bg-purple-600 transition-colors cursor-pointer">Get one</button>
</div>

<div>
    <img src={card} 
     className='w-lg h-full'
    alt=""
     />
</div>

</div>

</div>

    </section>
  )
}

export default Hero
