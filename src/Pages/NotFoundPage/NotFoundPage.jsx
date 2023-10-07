import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <div className="backdrop-blur-sm bg-white/5 py-10 text-center my-32 text-white space-y-5">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
          😢404😢
        </h1>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
          Lost In Digital Wilderness
        </h3>
        <p className="text-xl">
          You've ventured into uncharted digital territory. The page you seek
          has eluded us. Let's guide you back to familiar paths.
        </p>
        <Link className=" flex justify-center" to={"/"}>
          <button className="custom-btn">Bak to home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
