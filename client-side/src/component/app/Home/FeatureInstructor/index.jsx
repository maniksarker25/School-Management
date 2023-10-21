import { featureInstructor } from "@/src/constant/featureInstructor";
import Instructor from "./Instructor";
import { Box, Grid } from "@chakra-ui/react";

const FeatureInstructor = () => {
  return (
    <Box mt='70px'>
      <div className=" contain">
        <h2 className="text-3xl text-center my-10 text-gray-600">Featured Instructors</h2>
        {/* TODO: here instructor come from database */}
        <Grid
          // display="grid"
          mt='20px'
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4,1fr)" }}
          gap={4}
          className=""
        >
          {featureInstructor?.slice(0, 4).map((instructor, index) => (
            <Instructor key={index} instructor={instructor} />
          ))}
        </Grid>
      </div>
    </Box>
  );
};

export default FeatureInstructor;
