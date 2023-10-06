import React from "react";
import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const services = useLoaderData();
  return (
    <div className="">
      <Header />
      <Services services={services} />
    </div>
  );
};

export default Home;
