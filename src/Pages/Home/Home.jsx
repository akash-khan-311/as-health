import React from "react";
import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";
import { useLoaderData } from "react-router-dom";
import Counter from "../../components/Counter/Counter";

import FollowUsOnInstagram from "../../components/FollowUsOnInstagram/FollowUsOnInstagram";
import { Helmet } from "react-helmet";

const Home = () => {
  const services = useLoaderData();
  return (
    <div className="">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <Services services={services} />
      <Counter />
      <FollowUsOnInstagram />
    </div>
  );
};

export default Home;
