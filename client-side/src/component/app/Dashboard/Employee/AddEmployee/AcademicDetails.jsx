import React from "react";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
const AcademicDetails = () => {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <AccountBalanceOutlinedIcon />
        <h4 className="text-xl font-semibold">AcademicDetails</h4>
      </div>
      <div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Role*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default AcademicDetails;
