const Hero = () => {
    return (
      <div className="md:max-w-4xl max-w-xs m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
          <div className="relative md:order-2 order-1">
            <div className="absolute top-28 left-[30%] w-[497px] h-[300px] rounded-tl-full rounded-bl-full bg-blue-700 hidden md:block"></div>
            <img
              src="/images/illustration-hero.svg"
              alt="Hero Illustration"
              className="relative z-10 w-[450px] md:w-auto justify-center m-auto"
            />
          </div>
          <div className="md:order-1 order-2 md:text-left text-center">
            <h1 className="md:text-6xl text-xl font-bold text-black leading-tight">
              A Simple <br className="block md:hidden" /> Bookmark <br className="block md:hidden"/> Manager
            </h1>
            <p className="md:text-2xl text-sm text-gray-500 py-6">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free
            </p>
            <div className="flex gap-6 justify-center md:justify-start">
              <button className="w-36 h-12 rounded-lg bg-blue-600 text-white">
                Get It On Chrome
              </button>
              <button className="w-36 h-12 rounded-lg bg-gray-200 text-black">
                Get It On Firefox
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  