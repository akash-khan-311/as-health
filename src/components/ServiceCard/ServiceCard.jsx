import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

// ..
AOS.init();
const ServiceCard = ({ service }) => {
  const { name, image, id, price, description } = service;
  return (
    <Link to={`/service/${id}`}>
        
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        class="relative flex h-full flex-col rounded-xl backdrop-blur-sm bg-white/20 bg-clip-border  shadow-md"
      >
        <div class="relative m-0 overflow-hidden rounded-lg bg-transparent h-56 bg-clip-border 0 shadow-none">
          <img src={image} alt={name} />
        </div>
        <div class="p-6">
          <h4 class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-white antialiased">
            {name}
          </h4>
          <p class="mt-3 block   font-normal leading-relaxed text-gray-300 antialiased">
            {description < 200
              ? description
              : `${description.slice(0, 200)} ....`}
          </p>
          <div className="mt-5">
            <p className="text-xl font-semibold text-white">Price: ${price}</p>
          </div>
        </div>

        <div class="flex items-center justify-between p-6">
          <div class="flex items-center ">
            <div
              data-tooltip="author-2"
              class="absolute z-50 whitespace-normal break-words rounded-lg py-1.5  font-sans  font-normal text-white flex"
            >
              <button className="flex items-center text-xl ease-in-out ">
                View Details
                <BiRightArrowAlt className="text-2xl ml-3 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
