import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="grid">
        <div className="grid-flow-row grid-rows-2 gap-2 justify-center items-center flex h-screen">
          <div className="gap-2">
            <div className="grid text-5xl justify-center items-center">
              About
            </div>
            <div className="grid max-w-md text-xl justify-center items-center text-center">
              Zonamurid was created to help learning through the website,
              assisted by reliable teachers and best tutors, so that it can
              produce many outstanding students.
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        <img src={"/assets/about.png"}></img>
      </div>
    </div>
  );
};

export default About;
