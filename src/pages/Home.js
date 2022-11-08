import React from "react";
import About from "./About"

const Home = () => {

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-12 mb-3 p-3">
          <About /> 
        </div>
      </div>
    </main>
  );
};

export default Home;