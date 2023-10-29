import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import DatePickerComp from "@/src/component/share/UI/DatePickerComp";
import GroupIcon from "@mui/icons-material/Group";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
const ApplicationForm = () => {
  const [dateOfBirth, setDateOfBirth] = useState(null);

  const handleOnlineAdmission = (e) => {
    e.preventDefault();
    console.log(e.target.gender.value);
  };
  return (
    <div className="contain">
      <div className="px-4 lg:px-0"> 
      <h4 className="text-3xl text-[#01A2A6]">Make An Online Admission</h4>
      <p>
        Welcome to our comprehensive online admission process, your gateway to
        becoming a part of our vibrant school community. Embark on this
        important journey with confidence as we guide you through the steps to
        complete your application.
      </p>
      </div>
      <div className="mt-12 border-2 p-6 rounded">
        <form onSubmit={handleOnlineAdmission}>
          <div className="flex items-center ">
            <PersonIcon />
            <h4 className="text-xl font-semibold">Student Details</h4>
          </div>
          <div className="my-4 md:flex gap-4">
            <div className="w-full">
              <p className="mb-1">First Name*</p>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="nice-input"
                id=""
                required
              />
            </div>
            <div className="w-full">
              <p className="mb-1">Last Name*</p>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="nice-input"
                id=""
                required
              />
            </div>
          </div>
          <div className="mb-4 lg:flex gap-4">
            <div className="w-full">
              <p className="mb-1">Birthday*</p>
              <DatePickerComp state={dateOfBirth} setState={setDateOfBirth} />
            </div>
            <div className="w-full">
              <p className="mb-1">Gender</p>
              <select
                required
                className="border-2 py-0.5 w-full"
                name="gender"
                id=""
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="w-full">
              <p className="mb-1">Blood Group</p>
              <select
                className="border-2 py-0.5 w-full"
                name="bloodGroup"
                id=""
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>
          <div className="mb-4 md:flex gap-4">
            <div className="w-full">
              <p className="mb-1">Religion</p>
              <input
                type="text"
                name="religion"
                placeholder="Religion"
                required
                className="nice-input"
                id=""
              />
            </div>
            <div className="w-full">
              <p className="mb-1">Admission For</p>
              <select
                className="border-2 py-0.5 w-full"
                name="admissionClass"
                id=""
              >
                <option>Select Class</option>
                <option value="class one">Class One</option>
                <option value="class two">Class Two</option>
                <option value="class three">Class Three</option>
                <option value="class four">Class Four</option>
                <option value="class five">Class Five</option>
                <option value="class six">Class Six</option>
                <option value="class seven">Class Seven</option>
                <option value="class eight">Class Eight</option>
                <option value="class nine">Class Nine</option>
              </select>
            </div>
          </div>
          <div className="mb-4 md:flex gap-4">
            <div className="w-full">
              <p className="mb-1">Student Phone</p>
              <input
                type="number"
                name="studentPhone"
                placeholder="Student Phone"
                className="nice-input"
                id=""
              />
            </div>
            <div className="w-full">
              <p className="mb-1">Student Email</p>
              <input
                type="number"
                name="studentEmail"
                placeholder="Student Email"
                className="nice-input"
                id=""
              />
            </div>
          </div>
          <div className="mb-4 md:flex gap-4">
            <div className="w-full">
              <p className="mb-1">Present Address</p>
              <input
                type="text"
                name="presentAddress"
                className="nice-input h-16"
                placeholder="Present Address"
                id=""
              />
            </div>
            <div className="w-full">
              <p className="mb-1">Permanent Address</p>
              <input
                type="text"
                name="permanentAddress"
                className="nice-input h-16"
                placeholder="Permanent Address"
                id=""
              />
            </div>
          </div>
          <div className="mb-4 md:flex gap-4">
            <div className="w-full">
              <p className="mb-1">Birth Certificate Number</p>
              <input
                type="text"
                name="birthCertificateNumber"
                placeholder="Birth Certificate Number"
                className="nice-input"
                id=""
              />
            </div>
            <div className="w-full ">
              <p className="mb-1">Upload Birth Certificate</p>
              <input
                type="file"
                name="birthCertificate"
                id="birthCertificate"
                className="nice-input"
              />
            </div>
          </div>
          <div className="mb-4">
            <p className="mb-1">Student Photo</p>
            <input
              type="file"
              name="studentPhoto"
              className="nice-input"
              id=""
            />
          </div>
          <div className="flex items-center my-4">
            <GroupIcon />
            <h4 className="text-xl font-semibold">Guardian Details</h4>
          </div>
          <div className="my-4 md:flex gap-4">
            <div className="w-full">
              <p className="mb-1">Father Name*</p>
              <input
                type="text"
                name="fatherName"
                placeholder="Father Name"
                className="nice-input"
                id=""
                required
              />
            </div>
            <div className="w-full">
              <p className="mb-1">Mother Name*</p>
              <input
                type="text"
                name="motherName"
                placeholder="Mother Name"
                className="nice-input"
                id=""
                required
              />
            </div>
          </div>
          <div className="mb-4 md:flex gap-4">
            <div className="w-full">
              <p className="mb-1">Father Nid Card</p>
              <input
                type="file"
                name="fatherNidCard"
                className="nice-input"
                id=""
              />
            </div>
            <div className="w-full">
              <p className="mb-1">Mother Nid Card</p>
              <input
                type="file"
                name="motherNidCard"
                className="nice-input"
                id=""
              />
            </div>
          </div>
          <div className="mb-4 md:flex gap-4">
            <div className="w-full">
              <p className="mb-1">Guardian Phone</p>
              <input
                type="number"
                name="guardianPhone"
                placeholder="Guardian  Phone"
                className="nice-input"
                id=""
              />
            </div>
            <div className="w-full">
              <p className="mb-1">Guardian Email</p>
              <input
                type="number"
                name="guardianEmail"
                placeholder="Guardian Email"
                className="nice-input"
                id=""
              />
            </div>
          </div>
          <div className="flex items-center my-4">
            <AccountBalanceIcon />
            <h4 className="text-xl font-semibold">Previous School Details</h4>
          </div>
          <div className="mb-4 md:flex gap-4">
            <div className="w-full">
              <p className="mb-1">Previous School Name</p>
              <input
                type="text"
                name="previousSchoolName"
                placeholder="School Name"
                className="nice-input"
                id=""
              />
            </div>
            <div className="w-full">
              <p className="mb-1">Qualification</p>
              <input
                type="text"
                name="qualification"
                placeholder="Qualification"
                className="nice-input"
                id=""
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="remark"
              className="nice-input h-20"
              id=""
              placeholder="Remark"
            />
          </div>
          <div className="flex justify-end">
            <input
              type="submit"
              className="btn-primary px-10 py-3"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
