import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <div>
        <h1>😢404😢</h1>
        <h3>Lost In Digital Wilderness</h3>
        <p>
          You've ventured into uncharted digital territory. The page you seek
          has eluded us. Let's guide you back to familiar paths.
        </p>
        <Link to={"/"}>
          <button>Bak to home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
