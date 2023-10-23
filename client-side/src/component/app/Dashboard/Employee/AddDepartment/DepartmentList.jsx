import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
const DepartmentList = () => {
  return (
    <div className="p-3 shadow-md border-2 mt-12 ">
      <div className="flex gap-2 border-b-gray-500 border-b-2 pb-2">
        <MenuOutlinedIcon />
        <h2 className="font-semibold">Designation List</h2>
      </div>
      <div className="mt-4">
      <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead className="text-left">
      <tr>
        <th>Sl</th>
        <th>Designation</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className="text-left ">
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>
            <div className="flex gap-2">
            <EditNoteOutlinedIcon className="cursor-pointer"/>
            <DeleteOutlinedIcon className="cursor-pointer"/>
            </div>
        </td>
      </tr>
     
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default DepartmentList;
