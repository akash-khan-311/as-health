import React from "react";
import NavManu from "../../components/NavMenu/NavManu";

const DashBoard = () => {
  return (
    <div>
      <NavManu />
      <div
        data-aos="flip-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="flex justify-center"
      >
        <div className="text-center  backdrop-blur-3xl bg-white/20 py-10 px-6 my-20 rounded-xl ">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-color">
            Dashboard Content Comming Soon
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
