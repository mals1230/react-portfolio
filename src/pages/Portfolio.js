import React from "react";


const Portfolio = () => {

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <card className="flex-row justify-center col-12 col-md-4 mb-3 p-3">
          <header className="flex-row justify-center col-12">Event Fan Follow</header>
          <img className="flex-row justify-center col-12" src="./public/eff.png" alt="Event Fan Follow" height="150"
          />
          <a className="liveLink" href="https://aasports89.github.io/Event-Fan-Follow/">Deployed App</a>
          |
          <a className="liveLink" href="https://github.com/AASports89/Event-Fan-Follow">GitHub Repo</a>
        </card>

        <card className="flex-row justify-center col-12 col-md-4 mb-3 p-3">
        <header className="flex-row justify-center col-12">Book Club</header>
          <img className="flex-row justify-center col-12" src="./public/eff.png" alt="Book Club" height="150"
          />
          <a className="liveLink" href="https://aasports89.github.io/Event-Fan-Follow/">Deployed App</a>
          |
          <a className="liveLink" href="https://github.com/AASports89/Event-Fan-Follow">GitHub Repo</a>
        </card>

        <card className="flex-row justify-center col-12 col-md-4 mb-3 p-3">
        <header className="flex-row justify-center col-12">Take A Hike</header>
          <img className="flex-row justify-center col-12" src="./public/eff.png" alt="Take A Hike" height="150"
          />
          <a className="liveLink" href="https://aasports89.github.io/Event-Fan-Follow/">Deployed App</a>
          |
          <a className="liveLink" href="https://github.com/AASports89/Event-Fan-Follow">GitHub Repo</a>
        </card>

        <card className="flex-row justify-center col-12 col-md-4 mb-3 p-3">
          text test
        </card>

        <card className="flex-row justify-center col-12 col-md-4 mb-3 p-3">
          text test
        </card>

        <card className="flex-row justify-center col-12 col-md-4 mb-3 p-3">
          text test
        </card>

      </div>
    </div>
  );
};

export default Portfolio;