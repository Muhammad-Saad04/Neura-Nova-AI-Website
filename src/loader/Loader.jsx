import React from "react";
import { ProgressBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="bg-[#F5EFE7] w-full h-[100vh] flex justify-center items-center">
      <ProgressBar
        visible={true}
        height="100"
        width="100"
        color="#213555"
        barColor="#213555"
        borderColor="#3E5879"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
