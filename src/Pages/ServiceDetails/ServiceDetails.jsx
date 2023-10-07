import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NavManu from "../../components/NavMenu/NavManu";
import { Helmet } from 'react-helmet';

const ServiceDetails = () => {
  const [currentService, setCurrentService] = useState(null);
  const services = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const findService = services.find((service) => service.id == id);
    setCurrentService(findService);
  }, [id, services]);

  return (
    <div>
      <NavManu />
      <Helmet>
        <title>{currentService?.name}</title>
      </Helmet>
      <div className="container mx-auto backdrop-blur-md bg-white/30 my-10">
        <div
          data-aos="flip-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="border "
        >
          <div className="h-[40vh] md:h-[60vh] lg:h-[80vh] w-full">
            <img className="w-full h-full" src={currentService?.image} alt="" />
          </div>
          <div className="text-white px-3 md:px-5 lg:px-10 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-center my-10 border-b ">
              {currentService?.name}
            </h2>
            <p className="my-5">{currentService?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
