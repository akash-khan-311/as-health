import React from "react";
import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";
import { useLoaderData } from "react-router-dom";
import Counter from "../../components/Counter/Counter";

import FollowUsOnInstagram from "../../components/FollowUsOnInstagram/FollowUsOnInstagram";

const Home = () => {
  const services = useLoaderData();
  return (
    <div className="">
      <Header />
      <Services services={services} />
      <Counter />
      <FollowUsOnInstagram />
    </div>
  );
};

export default Home;
