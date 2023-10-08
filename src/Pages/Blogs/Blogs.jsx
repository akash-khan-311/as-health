import React from "react";
import NavManu from "../../components/NavMenu/NavManu";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import BlogCard from "../../components/BlogCard/BlogCard";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <div>
      <NavManu />
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <div className="container mx-auto">
        <div
          data-aos="flip-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex justify-center  "
        >
          <div className="text-center py-10 px-6  rounded-xl ">
            <h2 className="text-4xl md:text-6xl lg:text-6xl font-semibold text-color">
              Read Blogs 
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 px-3 lg:px-0">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
