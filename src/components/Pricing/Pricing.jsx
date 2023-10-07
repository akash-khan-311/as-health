import React, { useEffect, useState } from "react";

const Pricing = () => {
  const [pricings, setPricings] = useState([]);
  useEffect(() => {
    fetch("/pricing.json")
      .then((res) => res.json())
      .then((data) => setPricings(data));
  }, []);
  return <div>Pricing : {pricings.length}</div>;
};

export default Pricing;
