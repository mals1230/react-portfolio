import React from "react";
import { Card } from "react-bootstrap"
import password from "./password.png"

const Portfolio = () => {

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <Card className="flex-row justify-center col-12 col-md-4 mb-3 p-3">
          <header className="flex-row justify-center col-12">Event Fan Follow</header>
          <img className="flex-row justify-center col-12" src="./public/eff.png" alt="Event Fan Follow" height="150"
          />
          <a className="liveLink" href="https://aasports89.github.io/Event-Fan-Follow/">Deployed App</a>
          |
          <a className="liveLink" href="https://github.com/AASports89/Event-Fan-Follow">GitHub Repo</a>
        </Card>

        <Card className="flex-row justify-center col-12 col-md-4 mb-3 p-3">
          <header className="flex-row justify-center col-12">Book Club</header>
          <img className="flex-row justify-center col-12" src="./public/bookclub.png" alt="Book Club" height="150"
          />
          <a className="liveLink" href="https://secret-harbor-07074.herokuapp.com/">Deployed App</a>
          |
          <a className="liveLink" href="https://github.com/latifah2022/book-club">GitHub Repo</a>
        </Card>

        <Card className="flex-row justify-center col-12 col-md-4 mb-3 p-3">
          <header className="flex-row justify-center col-12">Take A Hike</header>
          <img className="flex-row justify-center col-12" src="./public/takeahike.png" alt="Take A Hike" height="150"
          />
          <a className="liveLink" href="https://safe-anchorage-34793.herokuapp.com/">Deployed App</a>
          |
          <a className="liveLink" href="https://github.com/mals1230/dog-walk">GitHub Repo</a>
        </Card>

        <Card className="flex-row justify-center col-12 col-md-4 mb-3 p-3">
          <header className="flex-row justify-center col-12">Work Day Scheduler</header>
          <img className="flex-row justify-center col-12" src="./public/scheduler.png" alt="Work Day Scheduler" height="150"
          />
          <a className="liveLink" href="https://mals1230.github.io/work-day-schedule/">Deployed App</a>
          |
          <a className="liveLink" href="https://github.com/mals1230/work-day-schedule">GitHub Repo</a>
        </Card>

        <Card className="flex-row justify-center col-12 col-md-4 mb-3 p-3">
          <header className="flex-row justify-center col-12">Random Password Generator</header>
          <img className="flex-row justify-center col-12" src={password} alt="Random Password Generator" height="150"
          />
          <a className="liveLink" href="https://mals1230.github.io/random-password-generator/">Deployed App</a>
          |
          <a className="liveLink" href="https://github.com/mals1230/random-password-generator">GitHub Repo</a>
        </Card>

        <Card className="flex-row justify-center col-12 col-md-4 mb-3 p-3">
          <header className="flex-row justify-center col-12">Code Quiz</header>
          <img className="flex-row justify-center col-12" src="./public/codequiz.png" alt="Code Quiz" height="150"
          />
          <a className="liveLink" href="https://mals1230.github.io/code-quiz/">Deployed App</a>
          |
          <a className="liveLink" href="https://github.com/mals1230/code-quiz">GitHub Repo</a>
        </Card>

      </div>
    </div>
  );
};

export default Portfolio;