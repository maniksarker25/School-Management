import DashboardPageTitle from "@/src/component/share/Dashboard/DashboardPageTitle/DashboardPageTitle";
import React from "react";

import Add from "./Add";

const AddDesignation = () => {
  return (
    <div>
      <DashboardPageTitle title={"Add Designation"} />
     <div>
        <Add/>
     </div>
    </div>
  );
};

export default AddDesignation;
