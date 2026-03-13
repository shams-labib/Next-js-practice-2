import React from "react";

const Title = ({ children }) => {
  return (
    <div className=" text-center px-5 py-2 bg-linear-60 from-sky-300 to-sky-700">
      <h1 className="text-2xl font-semibold">{children}</h1>
    </div>
  );
};

export default Title;
