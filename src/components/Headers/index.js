import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Mallory Sheehan's Portfolio</h1>
          </Link>
        </div>
        <div>
            <>
              <Link className="btn btn-lg btn-info m-2" to="/about">
                About Me
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/portfolio">
                Portfolio
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/contact">
                Contact
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/resume">
                Resume
              </Link>
            </>
        </div>
      </div>
    </header>
  );
};

export default Header;
