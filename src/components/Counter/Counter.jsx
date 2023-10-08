import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div>
        <div className="text-white ">
          <div className=" px-5 py-24 ">
            <div className="flex flex-wrap -m-4 text-center backdrop-blur-xl bg-white/30 overflow-hidden">
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="font-custom  text-5xl md:text-6xl lg:text-7xl   text-white">
                  {counterOn && <CountUp start={0} end={270} />}K
                </h2>
                <p className="leading-relaxed text-3xl text-color">Client</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="font-custom  text-5xl md:text-6xl lg:text-7xl   text-white">
                  {counterOn && <CountUp start={0} end={390} />}K
                </h2>
                <p className="leading-relaxed text-3xl text-color">
                  Subscribes
                </p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="font-custom  text-5xl md:text-6xl lg:text-7xl   text-white">
                  {counterOn && <CountUp start={0} end={670} />}m
                </h2>
                <p className="leading-relaxed text-3xl text-color">Downloads</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="font-custom  text-5xl md:text-6xl lg:text-7xl   text-white">
                  {counterOn && <CountUp start={0} end={24} />}/
                  {counterOn && <CountUp start={0} end={7} />}
                </h2>
                <p className="leading-relaxed text-3xl text-color">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
