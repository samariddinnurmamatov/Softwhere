import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <button
      className="text-white text-[18px] font-[500] rounded-[25px] py-[14px] px-[39px] transform translate-y-0 hover:translate-y-[-8px]"
      style={{ background: "rgba(134, 67, 220, 1)", transition: ".4s" }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
