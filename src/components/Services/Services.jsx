import ServiceCard from "../ServiceCard/ServiceCard";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Services = ({ services }) => {
  return (
    <div className="container mx-auto my-3 md:my-5 lg:my-10 px-3 lg:px-0 ">
      <div className="">
        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold text-center"
        >
          Our Best Services For You
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 md:my-10 lg:my-14">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
