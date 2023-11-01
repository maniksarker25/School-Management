import DashboardPageTitle from "@/src/component/share/Dashboard/DashboardPageTitle/DashboardPageTitle";
import React from "react";
import Add from "./Add";
import DesignationList from "./DesignationList";

const AddDesignation = () => {
  // some changes
  return (
    <div>
      <DashboardPageTitle title={"Add Designation"} />
     <div>
        <Add title={"Add Designation"} label={"Designation Name"} placeholder={"Designation Name"} button={"Save"}/>
     </div>
     <div>
        <DesignationList/>
     </div>
    </div>
  );
};

export default AddDesignation;
