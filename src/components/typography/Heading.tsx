import React from "react";

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="font-bold text-3xl dark:text-grayLightest">{children}</h1>
  );
};

export default Heading;
