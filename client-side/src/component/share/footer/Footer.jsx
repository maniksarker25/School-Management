import { Box, Divider, Flex, Icon, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import NextLink from 'next/link'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EditLocationIcon from '@mui/icons-material/EditLocation';
const Footer = () => {
    return (
        <div className="bg-[#3D3D47] py-5">
            <Flex flexWrap='wrap' direction={["column", "row", "row"]} className=" contain "  justifyContent='space-between' >
                <Box flexBasis={["100%", "50%", "25%"]} padding={['15px','15px','20px']}>
                    <Link as={NextLink} color='white' fontSize='2xl' style={{ textDecoration: 'none' }} href="/">School</Link>
                    <Box mt={5}>
                        <Text color='#747470'>Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit sagittis leo sit met entum estibulum dignissim posuere cubilia deleniti atque corrupti quos dolores vero eos et accusamu.</Text>
                    </Box>
                </Box>
                <Box flexBasis={["100%", "50%", "25%"]} padding={['15px','15px','20px']}>
                    <Text color='white' fontSize='xl'>About School</Text>

                    <UnorderedList mt={5} color='#747470'
                    listStyleType={['none','none','initial']}
                    >
                        <ListItem>
                            <Link as={NextLink} href="/" style={{ textDecoration: 'none' }}>About Us</Link>
                        </ListItem>
                        <ListItem>
                            <Link as={NextLink} href="/" style={{ textDecoration: 'none' }}>About Us</Link>
                        </ListItem>
                        <ListItem>
                            <Link as={NextLink} href="/" style={{ textDecoration: 'none' }}>About Us</Link>
                        </ListItem>
                        <ListItem>
                            <Link as={NextLink} href="/" style={{ textDecoration: 'none' }}>About Us</Link>
                        </ListItem>
                        
                    </UnorderedList>
                </Box>
                <Box  flexBasis={["100%", "50%", "25%"]} padding={['15px','15px','0px, 10px ,5px , 10px ']}>
                    <Text color='white' fontSize='xl'>Contact Info</Text>
                    <UnorderedList mt={5} color='#747470' listStyleType='none' display='flex' flexDirection='column' gap={2}>
                    <ListItem> <Icon as={EmailIcon}/> example@language-school.com</ListItem>
                    <ListItem><Icon as={PhoneIphoneIcon}/>  example@language-school.com</ListItem>
                    <ListItem> <Icon as={EditLocationIcon}/> example@language-school.com</ListItem>
                    </UnorderedList>
                </Box>
                <Box  flexBasis={["100%", "50%", "25%"]} padding={['15px','15px','20px']}>
                    <Text color='white' fontSize='xl'>Contact Info</Text>
                    <UnorderedList mt={5} color='#747470' listStyleType='none' display='flex' flexDirection='column' gap={2}>
                    <ListItem> <Icon as={EmailIcon}/> example@language-school.com</ListItem>
                    <ListItem><Icon as={PhoneIphoneIcon}/>  example@language-school.com</ListItem>
                    <ListItem> <Icon as={EditLocationIcon}/> example@language-school.com</ListItem>
                    </UnorderedList>
                </Box>

            </Flex>
        </div>
    );
};

export default Footer;