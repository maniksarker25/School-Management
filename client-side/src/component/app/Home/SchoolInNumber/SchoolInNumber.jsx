import { Box, Grid, GridItem, Heading, Icon, Text, flexbox } from '@chakra-ui/react';
import React from 'react';
import { Parallax } from 'react-parallax';
import GroupIcon from '@mui/icons-material/Group';
import FolderIcon from '@mui/icons-material/Folder';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import CardTravelSharpIcon from '@mui/icons-material/CardTravelSharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
const SchoolInNumber = () => {
    return (
        <Parallax className='mt-[70px]' blur={0} strength={-200} bgImage='https://images.pexels.com/photos/3170082/pexels-photo-3170082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' >
            <Box py='50px' className='contain'>
                <Heading as={'h2'} textAlign='center' color='white' pb={10}> Our School In Number</Heading>
                
                <Grid templateColumns={{base:'repeat(2, 1fr)', md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)',xl:'repeat(5, 1fr)'}} gap={6}>
                    <GridItem w='100%' py={5} bg='blackAlpha.700' display='flex'  flexDirection="column" alignItems='center' justifyContent='center' opacity='0.7' columnGap={20}>
                        <Icon as={GroupIcon} fontSize={40} color='white'></Icon>
                        <Text  color="white" fontSize={35} > 258 </Text>
                        <Text color="white" >Students</Text>
                    </GridItem>
                    <GridItem w='100%' py={5} bg='blackAlpha.700' display='flex'  flexDirection="column" alignItems='center' justifyContent='center' opacity='0.7' columnGap={20}>
                        <Icon as={FolderIcon} fontSize={40} color='white'></Icon>
                        <Text  color="white" fontSize={35} > 35 </Text>
                        <Text color="white" >LEARNING PRORAMMES</Text>
                    </GridItem>
                    <GridItem w='100%' py={5} bg='blackAlpha.700' display='flex'  flexDirection="column" alignItems='center' justifyContent='center' opacity='0.7' columnGap={20}>
                        <Icon as={CardTravelSharpIcon} fontSize={40} color='white'></Icon>
                        <Text  color="white" fontSize={35} > 12 </Text>
                        <Text color="white" >LANGUAGE TRAININGS</Text>
                    </GridItem>
                    <GridItem w='100%' py={5} bg='blackAlpha.700' display='flex'  flexDirection="column" alignItems='center' justifyContent='center' opacity='0.7' columnGap={20}>
                        <Icon as={AppsSharpIcon} fontSize={40} color='white'></Icon>
                        <Text  color="white" fontSize={35} > 9 </Text>
                        <Text color="white" >BRANCHES</Text>
                    </GridItem>
                    <GridItem w='100%' py={5} bg='blackAlpha.700' display='flex'  flexDirection="column" alignItems='center' justifyContent='center' opacity='0.7' columnGap={20}>
                        <Icon as={SchoolSharpIcon} fontSize={40} color='white'></Icon>
                        <Text  color="white" fontSize={35} > 16 </Text>
                        <Text color="white" >TEACHERS</Text>
                    </GridItem>
                    
                </Grid>
            </Box>
        </Parallax>
    );
};

export default SchoolInNumber;