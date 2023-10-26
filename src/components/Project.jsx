import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.jpg";
import projectPerson from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Learn Up",
      github_link: "https://github.com/Nimul99/LearnUp-Client.git",
      live_link: "https://learn-up-8b440.web.app",
    },
    {
      img: project2,
      name: "Toy Marketplace",
      github_link: "https://github.com/Nimul99/Toy-Marketplace",
      live_link: "https://toy-marketplace-9f107.web.app",
    },
    {
      img: project3,
      name: "Chef Recipe Hunter",
      github_link: "https://github.com/Nimul99/Chef-Recipe",
      live_link: "https://chef-recipe-2fc9d.web.app",
    },
    {
      img: project4,
      name: "Summer Camp",
      github_link: "https://github.com/Nimul99/Summer-Camp.git",
      live_link: "https://pallikoodam-c1ccb.web.app",
    },
    {
      img: project5,
      name: "CyCo Tv",
      github_link: "https://github.com/Nimul99/cycoTv",
      live_link: "https://cyco-inc.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="rounded-lg"
                  />
                  <h3 className="text-xl my-4">{project.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={projectPerson} alt="Person" />
        </div>
      </div>
    </section>
  );
};

export default Project;
