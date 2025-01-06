export default function HeroPage() {

    return (
      <div>
        <div className="bg-[url('/images/bg.jpg')] bg-cover bg-no-repeat bg-center h-[50vh] md:h-[80vh] lg:h-[100vh] mt-20  flex flex-col justify-center items-center md:items-start  border-[2px] border-b-black ">
          <div className="flex flex-col cursor-pointer rounded-full p-10 justify-start items-center text-center ">
            <h1 className="text-4xl sm:text-6xl md:text-7xl     lg:text-8xl  text-warning">Blogger Arena</h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl     lg:text-8xl  text-warning uppercase" style={{letterSpacing:6}}>New Season Arrival</h1>
            
          </div>
        </div>
      </div>
    );
  };