const Newsletter = () => {
  return (
    <div className="mx-auto container py-14  ">
      <div className="flex items-center  justify-center">
        <div className="mr-4">
          <img
            className="w-[350px]"
            src="https://res.cloudinary.com/dgah5rv12/image/upload/v1692728765/Envelope_hrb6us.gif"
            alt=""
          />
        </div>
        <div className="w-[35%]">
          <h6 className="text-lg font-bold mb-1 tracking-[.25em] uppercase">
          Get Our Weekly
          </h6>
          <h2 className="text-4xl text-[#A02A29] tracking-[.25em] font-bold uppercase mb-4">
            Newsletter
          </h2>

          <p className="font-milik">
            Whether you're planning to study, work, or settle in a new country,
            our newsletter will provide you with the information you need to
            navigate the immigration process smoothly. <br />
            <span className="font-bold ">Suscribe now!</span>
          </p>
        </div>
      </div>

      <form className="flex justify-center">
        <div className="flex">
          <input
            className=" rounded-l-sm border border-green-400 py-1 px-3  w-[400px]"
            type="text"
          />
          <button className="border-0 -ml-1 px-5 py-1 bg-green-600">
            Suscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
