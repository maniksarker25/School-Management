import { featureInstructor } from "@/src/constant/featureInstructor";
import React from "react";
import Instructor from "./Instructor";
import { Grid } from "@chakra-ui/react";

const FeatureInstructor = () => {
  return (
    <div className="my-16 contain">
      <h2 className="text-3xl text-center mb-10 text-gray-600">Featured Instructors</h2>
      {/* TODO: here instructor come from database */}
      <Grid
        // display="grid"
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)",lg:"repeat(4,1fr)" }}
        gap={4}
        className=""
      >
        {featureInstructor?.slice(0,4).map((instructor, index) => (
          <Instructor key={index} instructor={instructor} />
        ))}
      </Grid>
    </div>
  );
};

export default FeatureInstructor;
