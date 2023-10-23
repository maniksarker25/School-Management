
import React from 'react';
import Add from '../AddDesignation/Add';
import DepartmentList from './DepartmentList';

const AddDepartment = () => {
    return (
        <div>
            <div>
            <Add title={"Add Department"} label={"Department Name"} placeholder={"Department Name"} button={"Save"}/>
            </div>
            <div>
                <DepartmentList/>
            </div>
        </div>
    );
};

export default AddDepartment;