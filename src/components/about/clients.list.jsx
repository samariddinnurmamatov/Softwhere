import React from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";

const ClientsList = React.memo(({ data }) => {
  return (
    <Fragment>
      <div
        className={`flex flex-col gap-[20px] items-center justify-center border border-solid border-${data?.color}-100 bg-${data?.color}-50 px-14 py-[20px] rounded mx-auto ${data?.shadowClass}`}
        key={data?.id}
      >
        <picture>
          <source srcSet={String(data.icon)} media="width: 100%" />
          <img
            src={String(data.icon) || "/loading.gif"}
            alt="Logo"
            loading="lazy"
          />
        </picture>
        <h3>{data.title}</h3>
      </div>
    </Fragment>
  );
});

ClientsList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    icon: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    shadowClass: PropTypes.string,
  }).isRequired,
};

ClientsList.displayName = "ClientsList";
export default ClientsList;
