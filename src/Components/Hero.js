import React from "react";

function Hero() {
  return (
    <div className="p-4 grid mt-[10px] items-center grid-cols-1 md:grid-cols-2">
      <div>
        <h1 className="font-bold text-blue-600 text-[18px]">
          Hello, I am Zinko.
        </h1>
        <h1 className="font-extrabold text-[45px]">
          Professional<br></br>
          Full Stack Web<br></br>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Developer
          </span>
        </h1>
        <h1 className="text-orange-500 mt-4">Welcome to my site!</h1>
        <div className="flex gap-6">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-3 pb-3 py-1 rounded-full text-white mt-4 hover:scale-110 transition-all ease-in-out duration-300">
            Resume
          </button>
          <button className="border-blue-600 px-3 pb-3 py-1 rounded-full text-blue-600 mt-4 hover:scale-110 transition-all ease-in-out duration-300 border-[1px]">
            Read More
          </button>
        </div>
      </div>
      <div>
        <img
          src={require("./../Assets/Images/person.png")}
          className="w-[400px] lg:w-[500px]"
        />
      </div>
    </div>
  );
}

export default Hero;
