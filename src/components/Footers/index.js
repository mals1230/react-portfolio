import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
      <footer className="w-100 mt-auto bg-secondary p-4">
        <div className="container text-center mb-5">
          {location.pathname !== '/' && (
            <button
              className="btn btn-dark mb-3"
              onClick={() => navigate(-1)}
            >
              &larr; Go Back
            </button>
          )}
          <h4 className="footer-txt">
          <a href="https://github.com/mals1230">GitHub</a> | <a href="https://www.linkedin.com/in/mallory-sheehan-75353950/">LinkedIn</a>
          </h4>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  