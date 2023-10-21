import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Profile = () => {
    return (
        <div>
            <Flex>
                
                <Box mr='3'>
                    <Text fontWeight='bold'>
                        Segun Adebayo
                    </Text>
                    <Text fontSize='sm'>UI Engineer</Text>
                </Box>
                <Avatar src='https://bit.ly/sage-adebayo' />
            </Flex>
        </div>
    );
};

export default Profile;