import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { BannerArrowIcon } from "../../assets/svg";
import { ScripIcon } from "../../assets/svg/Scripka";
import PropTypes from 'prop-types'; 

const ContactList = React.memo(({ inputPlaceholders, inputValues, handleInputChange }) => {
  return (
    <>
      <form action="">
        <div className="flex flex-col gap-[15px] mb-5">
          {inputPlaceholders.map((placeholder, index) => (
            <input
              key={index}
              type="text"
              placeholder={placeholder}
              value={inputValues[index]}
              onChange={(event) => handleInputChange(index, event)}
              className="border-b-[1px] py-[15px]  bg-transparent outline-none"
            />
          ))}
        </div>
        <br />
        <div className="flex items-center justify-between">
          <Button text="Get a Quote" />
          <div className="flex items-center gap-[20px]">
            <Link to="/">
              <ScripIcon fill="#637085" />
            </Link>
            <Link to="/">
              <BannerArrowIcon fill="#8643DC" />
            </Link>
          </div>
        </div>
      </form>
    </>
  );
});

ContactList.propTypes = {
  inputPlaceholders: PropTypes.array.isRequired, // Add PropTypes validation for inputPlaceholders
  inputValues: PropTypes.array.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

ContactList.displayName = "ContactList";
export default ContactList;