import React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
const DesignationList = () => {
    return (
        <div className="p-3 shadow-md border-2 mt-12 ">
            <div className='flex gap-2 border-b-gray-500 border-b-2 pb-2'>
            <MenuOutlinedIcon/>
                <h2 className='font-semibold'>Designation List</h2>
            </div>
            <div>
            <table class="table-auto">
  <thead className='w-full'>
    <tr className='text-left w-full'>
      <th>SL</th>
      <th>Designation</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding </td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    
  </tbody>
</table>
            </div>
        </div>
    );
};

export default DesignationList;