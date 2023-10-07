import React from "react";
import NavManu from "../../components/NavMenu/NavManu";
import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div>
      <NavManu />
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <div
        data-aos="flip-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="flex justify-center lg:my-52 md:my-32 my-10"
      >
        <div className="text-center  backdrop-blur-3xl bg-white/20 py-10 px-6  rounded-xl ">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-color">
            Blogs Content Comming Soon
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
