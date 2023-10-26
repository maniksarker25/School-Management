import { Avatar, Box, Stack, Typography } from "@mui/material";

const Profile = () => {
    return (
        <div className="">
            <Stack flexDirection={'row'} gap={2} py={1}>
                
                <Box mr='3'>
                    <Typography color='white' fontWeight='bold'>
                        Segun Adebayo
                    </Typography>
                    <Typography color='white' fontSize='sm'>UI Engineer</Typography>
                </Box>
               
                <Avatar
  alt="Remy Sharp"
  src="https://bit.ly/sage-adebayo"
  sx={{ width: 56, height: 56 }}
/>
            </Stack>
        </div>
    );
};

export default Profile;