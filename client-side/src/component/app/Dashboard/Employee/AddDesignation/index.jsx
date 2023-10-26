import DashboardPageTitle from "@/src/component/share/Dashboard/DashboardPageTitle/DashboardPageTitle";
import React from "react";
import Add from "./Add";
import { EVENTS_INFO } from "@/src/constant/events";
import MyTable from "@/src/component/share/Dashboard/Table/Table";
const tableColumn = ['SL',"title",'image','publishAt','action',]
const AddDesignation = () => {
  const events = EVENTS_INFO;
  return (
    <div>
      <DashboardPageTitle title={"Add Designation"} />
     <div>
        <Add/>
        <MyTable/>
     </div>
    </div>
  );
};

export default AddDesignation;
