import React, { useState } from "react";
import Typewriter from "react-ts-typewriter";
import hero from "../assets/images/hero.png";
const Hero = () => {
  const social_media = [
    { name: "logo-facebook", link: "https://www.facebook.com/naimul49" },
    { name: "logo-linkedin", link: "https://www.linkedin.com/in/nimul/" },
    { name: "logo-github", link: "https://github.com/Nimul99" },
    { name: "logo-twitter", link: "https://twitter.com/example/" },
  ];

  const [selectedSocialSite, setSelectedSocialSite] = useState(null);

  const handleSocialIconClick = (link) => {
    // Open the link in a new tab when the icon is clicked
    window.open(link, "_blank");
  };
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is{" "}
            <span>
              <Typewriter text="Naimul Hasan" />
            </span>
          </h1>

          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            MERN Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((site) => (
              <div
                key={site.name}
                className="text-gray-600 hover:text-white cursor-pointer "
                onClick={() => handleSocialIconClick(site.link)}
              >
                <ion-icon name={site.name}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
