export const HeroSection = () => {    
  return (
    <div className="container mx-auto p-2 pt-20 sm:grid sm:grid-cols-1 ">
       <div className="mb-10 "> <h1 className="font-bold text-3xl text-center">Minoa - Your Go to Shop</h1></div>
      <div className="grid grid-cols-1 gap-7 lg:grid-cols-3" >
        <img src="/jewel.jpg" alt="jewel" className="w-full h-84 object-cover rounded" />
        <img src="/minoa.jpg" alt="minoa" className="w-full h-84 object-cover rounded" />
        <img src="/jewel2.jpg" alt="jewel2" className="w-full h-84 object-cover rounded" />
      </div>
    </div>
  )
}
export default HeroSection;
