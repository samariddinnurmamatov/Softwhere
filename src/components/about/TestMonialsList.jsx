import React from 'react'
import PropTypes from "prop-types";

const TestMonialsList = React.memo(({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[22px] text-center w-[50%] mx-auto">
      <picture>
        <source srcSet={String(data?.icon)} media="width: 100%" />
        <img
          src={String(data?.icon) || "/loading.gif"}
          alt="Logo"
          loading="lazy"
        />
      </picture>
      <h3>{data?.title}</h3>
      <picture>
        <source srcSet={String(data?.img)} media="width: 100%" />
        <img
          src={String(data?.img) || "/loading.gif"}
          alt="Logo"
          loading="lazy"
        />
      </picture>
      <div>
        <h3>{data?.name}</h3>
        <p>{data?.text}</p>
      </div>
    </div>
  );
});

TestMonialsList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    icon: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

TestMonialsList.displayName = "TestMonialsList";
export default TestMonialsList;