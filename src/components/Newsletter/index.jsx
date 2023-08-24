const Newsletter = () => {
  return (
    <div className="mx-auto container py-14 mt-20 mb-28">
      <div className="flex items-center  justify-center">
        <div className="mr-4 hidden sm:hidden md:block xl:block">
          <img
            className="w-[280px] "
            src="https://res.cloudinary.com/dgah5rv12/image/upload/v1692728765/Envelope_hrb6us.gif"
            alt=""
          />
        </div>
        <div className="w-[26%]">
          <h6 className="text-lg font-bold mb-1 tracking-[.15em] uppercase">
          Get Our Weekly
          </h6>
          <h2 className="text-4xl text-[#A02A29] tracking-[.15em] font-bold uppercase mb-4">
            Newsletter
          </h2>

          <p className="font-roboto">
            Our newsletter will provide you with the information you need to
            navigate the immigration process smoothly. <br />
            <span className="font-roboto text-black font-black">Suscribe now!</span>
          </p>
        </div>
      </div>

      <form className="flex justify-center">
        <div className="flex">
          <input
            className="focus:outline-none rounded-l-sm border border-3 py-1 px-3  w-[400px] font-roboto"
            type="text"
            placeholder="Enter your email"
          />
          <button className="border-0 rounded-sm -ml-1 px-5 py-1 text-white bg-[#008002] font-roboto hover:bg-[#A02A29] hover:text-[#000] transition ease-in-out">
            Suscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
