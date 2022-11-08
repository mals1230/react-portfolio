import React from "react";

const About = () => {

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-9 bg-dark text-light p-3 mb-5">
          <h2> About Me: </h2>
          <p> My name is Mallory Sheehan and I'm 33 years old, living in Los Angeles, California. I'm originally from New Jersey and I graduated from Penn State University in 2011. I started my career at CBS Radio in New York selling local radio advertisements on 1010 WINS and WFAN, as well as homepage takeovers and banners on cbsnewyork.com. I developed an interest in digital advertising, so after my time at CBS, I spent a year selling in-app advertising at Jun Group and most recently, I spent 4 1/2 years at AnyClip selling their proprietary A.I. video technology to digital publishers and media companies. In my free time, I love to go to concerts and travel to new places. I'm now a recenty graduate of the UCLA Full Stack Coding Bootcamp and I'm excited to continue to grow my skillset on the development side! </p>
        </h2>

        <img src="./mal.jpg" alt="Mallory Sheehan" className="col-12 col-md-3 bg-dark text-light p-3 mb-5"/>

      </div>
    </div>
  );
};

export default About;
