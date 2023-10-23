import DashboardPageTitle from "@/src/component/share/Dashboard/DashboardPageTitle/DashboardPageTitle";
import React from "react";

import Add from "./Add";
import DesignationList from "./DesignationList";

const AddDesignation = () => {
  return (
    <div>
      <DashboardPageTitle title={"Add Designation"} />
     <div>
        <Add/>
     </div>
     <div>
        <DesignationList/>
     </div>
    </div>
  );
};

export default AddDesignation;
