import DashboardPageTitle from '@/src/component/share/Dashboard/DashboardPageTitle/DashboardPageTitle';
import React from 'react';
import AcademicDetails from './AcademicDetails';

const AddEmployee = () => {
    return (
        <div>
            <DashboardPageTitle title={"Add Employee"}/>
           <div className='p-4'>
           <div>
                <AcademicDetails/>
            </div>
           </div>
        </div>
    );
};

export default AddEmployee;