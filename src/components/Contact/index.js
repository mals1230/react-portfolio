import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_MESSAGE } from "../../utils/mutations";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState();

  const [characterCount, setCharacterCount] = useState(0);

  const [addPet, { error }] = useMutation(ADD_MESSAGE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addMessage({
        variables: {
          name,
          email,
          message,
        },
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "name" && value.length <= 280) {
      setName(value);
    }
    if (name === "email" && value.length <= 280) {
      setEmail(value);
    }
    if (name === "message" && value.length <= 280) {
      setMessage(parseInt(value));
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h4>Contact Me!</h4>
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="name"
                placeholder="My name is..."
                value={name}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="email"
                placeholder="email address"
                value={email}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="message"
                placeholder="Leave a message"
                value={message}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-9">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Submit
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
    </div>
  );
};

export default ContactForm;
