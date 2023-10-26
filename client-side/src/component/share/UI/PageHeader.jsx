import React from "react";

const PageHeader = ({pageName,}) => {
  return (
    <div>
      <div className="bg-primary py-6 hidden md:block">
        <div className="text-white  flex justify-between contain">
          <h4 className="text-2xl ">{pageName}</h4>
          <p>Home/{pageName}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
