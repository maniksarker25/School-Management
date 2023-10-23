import React from 'react';
import AddIcon from "@mui/icons-material/Add";
const Add = ({title,label,placeholder,button}) => {
  return (
    <div className="p-3 shadow-md ">
      <div className="flex items-center gap-2 mb-4 border-b-2 border-gray-500 w-full pb-2">
        <AddIcon />
        <h4 className="font-semibold ">{title}</h4>
      </div>
      <div>
        <h4 className="block mb-2">{label}</h4>
        <div className="flex gap-3 ">
          
          <input name="add-designation"
            placeholder={placeholder}
             type="text"  id="" className="border-2 ps-4 border-[rgb(204,204,204)] rounded-md bg-transparent " />
          <button className="px-4  border-2 border-[rgb(204,204,204)] rounded-md">
            <AddIcon />
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;