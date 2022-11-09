import React from "react";

const Contact = () => {

  return (
    <div className="justify-center">
      <h4>Leave a message!</h4>
        <>
          <form className="flex-row justify-center justify-space-between-md align-center">
            <div className="col-12 col-lg-9">
              <textarea
                name="name"
                placeholder="My name is..."
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="email"
                placeholder="Email Address"
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="message"
                placeholder="Leave a message!"
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
              ></textarea>
            </div>

            <div className="col-12 col-lg-9">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Submit
              </button>
            </div>
          </form>
        </>
    </div>
  );
  };
  
  export default Contact;