import DashboardLayout from '@/src/component/core/layout/DashboardLayout';
import DashboardPageTitle from '@/src/component/share/Dashboard/DashboardPageTitle/DashboardPageTitle';
import { Box } from '@chakra-ui/react';
import React from 'react';

const Dashboard = () => {
    return (
		<Box>
			<Box>
				<DashboardPageTitle title={"Dashboard"} />
			</Box>
			<p>this is dashboard mane file </p>
		</Box>
	);
};

export default Dashboard;