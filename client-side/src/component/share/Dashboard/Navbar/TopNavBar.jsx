import { Box, Icon, useDisclosure } from '@chakra-ui/react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Profile from './Profile';

const TopNavBar = ({onOpen}) => {
    return (
        <Box display='flex' alignItems={'center'} shadow={'lg'} justifyContent='space-between' px={10} py='18px'>
            <Icon onClick={onOpen} as={MenuRoundedIcon} cursor={'pointer'} fontSize='3xl'></Icon>
            <Profile/>
        </Box>
    );
};

export default TopNavBar;