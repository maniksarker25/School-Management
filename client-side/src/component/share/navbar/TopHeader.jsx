import { Box, Icon, Link, Text } from '@chakra-ui/react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';

const TopHeader = () => {
    return (
        <Box display={['none','none','flex']} className=' justify-between pt-5' >
            <Box color={'gray.400'} display={'flex'} gap={3}>
                <Text fontSize={12} > <EditLocationIcon/> Brooklyn, NY 10036, United States</Text>
                <Text fontSize={12} > <PhoneIphoneIcon/> +01214784</Text>
                <Text fontSize={12} > <EmailIcon/> scholl@fmail.com</Text>
            </Box>
            <Box display={'flex'} gap={2}>
                
               <Link href=''>  <Icon as={LinkedInIcon} color={'gray.400'} /></Link>
               <Link href=''>  <Icon as={FacebookIcon} color={'gray.400'}/></Link>
               <Link href=''>  <Icon as={InstagramIcon} color={'gray.400'}/></Link>
                
            </Box>
        </Box>
    );
};

export default TopHeader;