import React from "react";

const DefaultContainer = ({
  children,
  className,
  container,
}) => {
  const classNames = [container && "container mx-auto", className];

  return (
    <div className={classNames.join(" ")}>
      <div className="mt-[60px]">{children}</div>
    </div>
  );
};

export default DefaultContainer;
