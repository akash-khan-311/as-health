import React from "react";
import NavManu from "../NavMenu/NavManu";
import AOS from "aos";
import "aos/dist/aos.css";
import YogaMan from "../../assets/image/men-yoga.png";
import { Link } from "react-router-dom";
AOS.init();

const Banner = () => {
  return (
    <div className="banner-bg w-full ">
      <div className="container mx-auto text-white relative z-10 ">
        <NavManu />
        <div className="flex items-center justify-center py-20 lg:py-52">
          {/* contente */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="text-center space-y-5 "
          >
            <p className="text-xl">
              Change Your Lifestyle With{" "}
              <span className="uppercase text-red-600 ">
                AS Health and Wellness
              </span>
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-8xl  inline-block">
              <span className="font-bold italic ">
                Start Living a <span className="text-color">Healthy</span> Life
              </span>
            </h2>
            <button className="py-5">
              <Link to={"/contact"} className="custom-btn text-center ">
                Book Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
