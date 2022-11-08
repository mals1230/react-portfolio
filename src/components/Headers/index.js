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
          <p className="m-0">placeholder text</p>
        </div>
        <div>
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                About Me
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Portfolio
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Contact
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Resume
              </Link>
            </>
        </div>
      </div>
    </header>
  );
};

export default Header;
