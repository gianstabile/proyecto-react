import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./Loader.css"

const Loader = () => {
  return (
    <div className="loader">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="MediumVioletRed"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
    </div>
  );
};

export default Loader;
