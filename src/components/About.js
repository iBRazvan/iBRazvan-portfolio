import React from "react";

// import img
import Image from "../assets/img/about.webp";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Ionut-Razvan Botezatu
              </h2>
              <p className="mb-4 text-accent">Frontend Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                "I am a self-driven front-end developer and have been in the
                industry for more than one year. I have a keen eye for detail
                and for the work I do.
                <br />
                <br />
                In addition, I have also finished an SkillBrain Front-End Web
                Development Training Course in 2022. After that, I did the
                internship at the 7Code company as a Junior Front-End Developer
                <br />
                <br />I am a person who is able to control a situation rather
                than have a situation control me. (...)"
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all duration-300">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
