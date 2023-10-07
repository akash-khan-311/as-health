import React, { useEffect, useState } from "react";

const FollowUsOnInstagram = () => {
  const [services, setServices] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
        <div className="text-center">
          <h2 className="font-semibold text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9  md:w-full w-9/12 mx-auto">
            Follow Us on Instagram
          </h2>
          <p className="font-normal text-base leading-6 text-gray-400  mt-4 lg:w-5/12 md:w-9/12 mx-auto">
            Follow us on instagram and tag us to get featured on our timeline
          </p>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
          {services.slice(0, dataLength).map((service) => (
            <div
              key={service.id}
              data-aos="flip-left"
              data-aos-offset={200}
              data-aos-delay={50}
              data-aos-duration={1000}
              data-aos-easing="ease-in-out"
              className="relative group cursor-pointer"
            >
              <img
                src={service.image}
                alt="2 puppies"
                className="lg:block hidden w-full h-full"
              />
              <img
                src={service.image}
                alt="2 puppies"
                className="lg:hidden block w-full h-full"
              />
              <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30  group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                <svg
                  width={64}
                  height={64}
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.6665 10.6665H21.3332C15.4421 10.6665 10.6665 15.4421 10.6665 21.3332V42.6665C10.6665 48.5575 15.4421 53.3332 21.3332 53.3332H42.6665C48.5575 53.3332 53.3332 48.5575 53.3332 42.6665V21.3332C53.3332 15.4421 48.5575 10.6665 42.6665 10.6665Z"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M44 20V20.001"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div
          className={
            dataLength === services.length
              ? "hidden"
              : "flex justify-center my-10"
          }
        >
          <button
            onClick={() => setDataLength(services.length)}
            className="custom-btn"
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowUsOnInstagram;
