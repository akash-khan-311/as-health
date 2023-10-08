import React, { useEffect, useState } from "react";
import PricingCard from "../PricingCard/PricingCard";
import NavManu from "../NavMenu/NavManu";
import { Helmet } from "react-helmet";

const Pricing = () => {
  const [pricings, setPricings] = useState([]);
  useEffect(() => {
    fetch("/pricing.json")
      .then((res) => res.json())
      .then((data) => setPricings(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Pricing</title>
      </Helmet>
      <NavManu />
      <div className="container mx-auto">
        <div className="">
          <h2
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="text-4xl md:text-5xl lg:text-6xl text-color font-semibold text-center"
          >
            Get Our Best Packege
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto my-20 overflow-hidden">
          {pricings.map((pricing) => (
            <PricingCard key={pricing.id} pricing={pricing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
