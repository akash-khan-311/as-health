import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const {
    title,
    description,
    author,
    img,
    rating,
    published_date,
    comments,
    views,
    id,
  } = blog;
  return (
    <section
      data-aos="flip-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      data-aos-delay="500"
      className="text-white body-font"
    >
      <div className="container mx-auto">
        <div className="">
          <div className="">
            <div className="h-[600px] w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="w-full">
                <img
                  className=" w-full h-full lg:h-60 object-cover object-center"
                  src={img}
                  alt={title}
                />
              </div>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium  mb-3">
                  {title}
                </h1>
                <p className="leading-relaxed mb-3 text-gray-400">
                  {description.length < 200 ? (
                    description
                  ) : (
                    <>
                      {`${description.slice(0, 200)}....`}{" "}
                      <Link
                        className="text-xl hover:underline text-white"
                        to={`/blog/${id}`}
                      >
                        Read More
                      </Link>
                    </>
                  )}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold">{author}</p>

                  <p>Rating: {rating} star</p>
                </div>
                <hr className="my-5" />
                <div className="flex items-center flex-wrap ">
                  <div className="flex items-center ">
                    <p className=""> Published: {published_date}</p>
                  </div>
                  <span className="text-gray-200 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    {views}K
                  </span>
                  <span className="text-gray-200 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    {comments}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
