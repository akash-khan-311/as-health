import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
// ..
AOS.init();
const ServiceCard = ({ service }) => {
  const { name, image, price, description, button } = service;
  return (
    <Link to={"/service"}>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        class="relative flex h-full flex-col rounded-xl backdrop-blur-sm bg-white/20 bg-clip-border text-gray-700 shadow-md"
      >
        <div class="relative m-0 overflow-hidden rounded-lg bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="ui/ux review check"
          />
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
        </div>
        <div class="flex items-center justify-between p-6">
          <div class="flex items-center ">
            <div
              data-tooltip="author-2"
              class="absolute z-50 whitespace-normal break-words rounded-lg py-1.5  font-sans  font-normal text-white flex"
            >
              <button className="flex items-center">
                {button}
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
