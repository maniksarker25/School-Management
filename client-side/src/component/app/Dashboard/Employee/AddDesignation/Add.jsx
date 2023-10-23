import React from 'react';
import AddIcon from "@mui/icons-material/Add";
const Add = () => {
    return (
        <div className="p-3 shadow-md ">
        <div className="flex items-center gap-2 mb-4 border-b-2 border-gray-500 w-full pb-2">
          <AddIcon />
          <h4 className="font-semibold ">Add Designation</h4>
        </div>
        <div>
          <label className="block mb-2">Designation Name</label>
          <div className="flex gap-3 ">
          <input
            type="text"
            name="add-designation"
            placeholder="Designation Name"
            id=""
            className="border-2 ps-4 border-[rgb(204,204,204)] rounded-md bg-transparent "
          />
          <button className="px-4  border-2 border-[rgb(204,204,204)] rounded-md">
            <AddIcon />
            Save
          </button>
          </div>
        </div>
      </div>
    );
};

export default Add;