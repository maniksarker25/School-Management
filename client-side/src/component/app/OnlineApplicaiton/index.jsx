import React from "react";
import PageHeader from "../../share/UI/PageHeader";
import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const OnlineApplication = () => {
    const router = useRouter();
  const applicationSteps = [
    {
      title: "Application Form",
      description:
        "Begin your application by filling out the form with accurate and detailed information. Provide personal details, academic history, and any required documentation. Make sure to double-check your entries for accuracy.",
    },
    {
      title: "Application Review",
      description:
        "Take a moment to review your application for any errors or missing information. Ensure that all required documents are attached. This step is crucial for a successful application.",
    },
    {
      title: "Application Submission",
      description:
        "Congratulations! You're ready to submit your application. Click the submission button to send us your application. You will receive a confirmation email to let you know that your application has been successfully submitted.",
    },
  ];

  const { activeStep } = useSteps({
    index: 1,
    count: applicationSteps.length,
  });

  return (
    <div>
      <div>
        <PageHeader pageName={"Online Application"} />
      </div>
      <div>
        <h4 className="text-center text-3xl my-12">
          Read Carefully About Admission Process
        </h4>
        <div className="contain mt-24 px-4 lg:px-0">
          <div className="lg:flex  gap-12">
            <div>
              <Stepper
                index={activeStep}
                orientation="vertical"
                // height="400px"
                width={"100%"}
                gap="0"
              >
                {applicationSteps.map((step, index) => (
                  <Step key={index}>
                    <StepIndicator>
                      <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                      />
                    </StepIndicator>

                    <Box >
                      <StepTitle>{step.title}</StepTitle>
                      <StepDescription>{step.description}</StepDescription>
                    </Box>

                    <StepSeparator />
                  </Step>
                ))}
              </Stepper>
            </div>
            <div className="hidden lg:block">
                <img className="h-full" src="https://i.ibb.co/MCr0Spn/how-to-fill-in-an-application-form-compressor.webp" alt="" />
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center">
            <button onClick={()=>router.push("/online-admission/form")} className="px-12 py-4 btn-primary">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineApplication;
