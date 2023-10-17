import { Link } from "react-router-dom";
import { useState } from "react";
import ContactList from "./contact.list";
import { inputPlaceholders } from "../../constants";

const Contact = () => {
  const [inputValues, setInputValues] = useState(["", "", ""]);

  const handleInputChange = (index, event) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  return (
    <div className="py-[30px]" id="contact">
      <h2 className="relative">
        <span
          className="section-title text-[18px] font-[400]"
          style={{ color: "#8643DC" }}
        >
          Contact Me
        </span>
        <span className="section-title-divider"></span>
      </h2>

      <div className="mt-[20px]">
        <div className="flex justify-between">
          <h2 className="font-[500] text-[36px] max-w-[512px] leading-[47px]">
            Let me know if you want to talk about a potential collaboration.
            I&#39m available for freelance work.
          </h2>
          <div>
            <Link
              to="/"
              className="text-[24px] text-decoration"
              style={{ color: "rgba(134, 67, 220, 1)" }}
            >
              infoname@mail.com
            </Link>
          </div>
        </div>
        <div className="mt-5">
          <ContactList
            inputPlaceholders={inputPlaceholders}
            inputValues={inputValues}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
