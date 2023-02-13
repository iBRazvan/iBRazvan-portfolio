import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8 w-80 h-auto ">
        <img
          className="rounded-2xl w-auto h-auto lg:hover:scale-150 lg:hover:w-fit lg:hover:h-auto lg:transition-transform"
          src={item.image}
          alt=""
        />
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      <p>{item.noprojects}</p>

      <div className="flex flex-row gap-5">
        <button className="border-2 rounded-full w-20 hover:border-accent hover:text-white border-paragraph text-gray-300 ">
          <a href={item.github} rel="noreferrer" target="_blank">
            Project
          </a>
        </button>
        <button className="border-2 rounded-full w-20  hover:border-accent hover:text-white border-paragraph text-gray-300">
          <a href={item.website} rel="noreferrer" target="_blank">
            Website
          </a>
        </button>
      </div>
    </div>
  );
};

export default Project;
