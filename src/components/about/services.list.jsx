import React from "react";
import PropTypes from "prop-types";

const ServicesList = React.memo(({ data }) => {
  return (
    <div key={data?.id}>
      <div className="flex items-center gap-[20px]">
          <picture className="flex items-center justify-center">
            <source srcSet={String(data?.icon)} media="width: 100%" />
            <img
              src={String(data?.icon) || "/loading.gif"}
              alt="Logo"
              loading="lazy"
            />
          </picture>
          <h3 className="text-[24px] font-[500]">{data?.title}</h3>
      </div>
      <div className="mt-[15px]">
          <p
            className="text-[16px] font-[400] leading-[32px]  max-w-[97%]"
            style={{ color: "#47444E" }}
          >
            {data?.text}
          </p>
      </div>
    </div>
  );
});

ServicesList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    icon: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

ServicesList.displayName = "ServicesList";
export default ServicesList;
