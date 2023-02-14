import React from "react";

// import services data
import { services } from "../data";

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            What I do for clients
          </h2>
        </div>
        <div className="flex flex-col max-h-auto justify-center align-center gap-5 md:flex-col lg:flex-row items-center">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div
                className="bg-secondary p-6 rounded-2xl sm:h-fit sm:max-w-2/4 md:h-full  md:w-2/4 lg:w-2/4 lg:h-96 "
                key={index}
              >
                <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]">
                  {icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
