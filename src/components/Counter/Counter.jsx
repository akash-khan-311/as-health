import React from "react";

const Counter = () => {
  return (
    <div>
      <div className="text-white ">
        <div className=" px-5 py-24 ">
          <div className="flex flex-wrap -m-4 text-center backdrop-blur-xl bg-white/30 overflow-hidden">
            <div
              data-aos="fade-right"
              data-aos-offset={200}
              data-aos-delay={50}
              data-aos-duration={1000}
              data-aos-easing="ease-in-out"
              className="p-4 sm:w-1/4 w-1/2"
            >
              <h2 className="font-custom  text-5xl md:text-6xl lg:text-7xl   text-white">
                270K
              </h2>
              <p className="leading-relaxed text-3xl text-color">Client</p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-offset={200}
              data-aos-delay={50}
              data-aos-duration={1000}
              data-aos-easing="ease-in-out"
              className="p-4 sm:w-1/4 w-1/2"
            >
              <h2 className="font-custom  text-5xl md:text-6xl lg:text-7xl   text-white">
                390K
              </h2>
              <p className="leading-relaxed text-3xl text-color">Subscribes</p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-offset={200}
              data-aos-delay={50}
              data-aos-duration={1000}
              data-aos-easing="ease-in-out"
              className="p-4 sm:w-1/4 w-1/2"
            >
              <h2 className="font-custom  text-5xl md:text-6xl lg:text-7xl   text-white">
                35m
              </h2>
              <p className="leading-relaxed text-3xl text-color">Downloads</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset={200}
              data-aos-delay={50}
              data-aos-duration={1000}
              data-aos-easing="ease-in-out"
              className="p-4 sm:w-1/4 w-1/2"
            >
              <h2 className="font-custom  text-5xl md:text-6xl lg:text-7xl   text-white">
                24/7
              </h2>
              <p className="leading-relaxed text-3xl text-color">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
