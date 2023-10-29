import DashboardPageTitle from "@/src/component/share/Dashboard/DashboardPageTitle/DashboardPageTitle";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DatePickerComp from "@/src/component/share/UI/DatePickerComp";
import Error from "./Error";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PublicIcon from '@mui/icons-material/Public';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const AddEmployee = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // joining date
  const [joiningDate, setJoiningDate] = useState(null);
  const [dateOfBirth,setDateOfBirth] = useState(null)
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <DashboardPageTitle title={"Add Employee"} />
      <div className="py-4 border-2 shadow-md mt-4 p-4">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {/* Academic details */}
              <div>
                <div className="flex gap-2 mb-3">
                  <AccountBalanceOutlinedIcon />
                  <h3 className="text-xl font-semibold">Academic Details</h3>
                </div>
                <div className="lg:flex items-center gap-4  mb-3">
                  <div className="w-full">
                    <label className="block font-semibold mb-1">Role*</label>
                    <select
                      {...register("role", { required: true })}
                      aria-invalid={errors.role ? "true" : "false"}
                      className="w-full nice-input"
                    >
                      <option value="teacher">teacher</option>
                      <option value="librarian">librarian</option>
                      <option value="receptionist">receptionist</option>
                    </select>

                    {errors.role && <Error error={"Role is required"} />}
                  </div>
                  <div className="w-full">
                    <p className="font-semibold mb-1">Joining Date *</p>
                    <div className="flex items-center">
                      <CalendarMonthOutlinedIcon
                        sx={{ fontSize: "31px", color: "gray" }}
                      />

                      <div className="w-full">
                        <DatePickerComp
                          state={joiningDate}
                          setState={setJoiningDate}
                          placeholder={"Joining Date"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:flex gap-4 items-center mb-3">
                  <div className="w-full">
                    <label className="block font-semibold mb-1">
                      Designation*
                    </label>
                    <select
                      {...register("designation", {
                        required: "designation is required",
                      })}
                      aria-invalid={errors.designation ? "true" : "false"}
                      className="w-full nice-input"
                    >
                      <option value="teacher">teacher</option>
                      <option value="librarian">librarian</option>
                      <option value="receptionist">receptionist</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label className="block font-semibold mb-1">
                      Department*
                    </label>
                    <select
                      {...register("department", {
                        required: "department is required",
                      })}
                      aria-invalid={errors.department ? "true" : "false"}
                      className="w-full nice-input"
                    >
                      <option value="teacher">teacher</option>
                      <option value="librarian">librarian</option>
                      <option value="receptionist">receptionist</option>
                    </select>
                  </div>
                </div>
                <div className="lg:flex gap-4 mb-3 space-y-4 lg:space-y-0">
                  <div className="w-full">
                    <p>Qualification</p>
                    <input
                      type="text"
                      className="nice-input"
                      placeholder="Qualification"
                      {...register("qualification", { required: true })}
                      aria-invalid={errors.qualification ? "true" : "false"}
                    />
                    {errors.qualification?.type === "required" && (
                      <Error error={"Experience is required"} />
                    )}
                  </div>

                  <div className="w-full">
                    <p>Experience Details</p>
                    <input
                      type="text"
                      className="nice-input"
                      placeholder="Experience Details"
                      {...register("experienceDetails", {
                        required: "Experience details is required",
                      })}
                      aria-invalid={errors.experienceDetails ? "true" : "false"}
                    />
                    {errors.qualification?.type === "required" && (
                      <Error error={"Experience details is required"} />
                    )}
                  </div>
                  <div className="w-full">
                    <p>Total Experience </p>
                    <input
                      type="text"
                      className="nice-input"
                      placeholder="Total Experience"
                      {...register("totalExperience", {
                        required: true,
                      })}
                      aria-invalid={errors.totalExperience ? "true" : "false"}
                    />
                    {errors.totalExperience?.type === "required" && (
                      <Error error={"Total experience is required"} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Employee details */}
            <div>
                <div className="flex items-center mt-5 mb-3">
                    <Person2OutlinedIcon/>
                    <p className="text-xl font-semibold">Employee Details</p>
                </div>
              {/* name and gender */}
              <div className="lg:flex gap-4 mb-3">
                
              <div className="w-full">
                <p className="mb-1">Name*</p>
              <div>
                 <div className="flex items-center ">
                 <Person2OutlinedIcon className="border-2 text-[33px]" />
                  <input type="text" name="" id="" placeholder="Name" className="nice-input"
                  {...register("name", {
                    required: true,
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                  />
                 </div>
                  {errors.name?.type === "required" && (
                      <Error error={"Name is required"} />
                    )}
                </div>
              </div>
              <div className="w-full">
                <p className="mb-1">Phone*</p>
              <div>
              <div className="flex items-center ">
                  <AddIcCallOutlinedIcon className="border-2 text-[33px]" />
                  <input type="text" name="" placeholder="Phone" id="" className="nice-input"
                     {...register("phone", {
                        required: true,
                      })}
                      aria-invalid={errors.phone ? "true" : "false"}
                  />
                </div>
                {errors.phone?.type === "required" && (
                      <Error error={"Name is required"} />
                    )}
              </div>
              </div>
              
              </div>
              {/* email and birth */}
              <div className="lg:flex gap-4 mb-3">
              <div className="w-full">
                <p className="mb-1">Email*</p>
              <div className="flex items-center ">
                  <EmailOutlinedIcon className="border-2 text-[33px]" />
                  <input type="text" name="" placeholder="Email" id="" className="nice-input"
                     {...register("email", {
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email format',
                          }
                      })}
                      aria-invalid={errors.email ? "true" : "false"}
                  />
                </div>
                {errors.email?.type === "required" && (
                    //  <p>{errors?.email.message}</p>
                    <Error error={"email is required"}/>
                    )}
                    {
                        errors.email && <p className="text-red-500">{errors.email.message}</p>
                    }
              </div>
              <div className="w-full">
                <p className="mb-1">Date Of Birth*</p>
              <div className="flex items-center">
              <CalendarMonthOutlinedIcon
                        sx={{ fontSize: "31px", color: "gray" }}
                      />
                <DatePickerComp state={dateOfBirth} setState={setDateOfBirth} placeholder={"Date Of Birth"}/>
              </div>
              </div>
              </div>
              <div className="lg:flex gap-4 mb-3 space-y-3 lg:space-y-0">
                <div className="w-full">
                    <p className="mb-1">Present Address*</p>
                    <input type="text" name="" className="nice-input h-16" id="" {...register("presentAddress", {
                        required: true,
                      })}
                      aria-invalid={errors.presentAddress ? "true" : "false"} />
                        {errors.presentAddress?.type === "required" && (
                      <Error error={"Present Address is required"} />
                    )}
                </div>
                <div className="w-full">
                    <p className="mb-1">Permanent Address*</p>
                    <input type="text" name="" className="nice-input h-16" id="" 
                      {...register("permanentAddress", {
                        required: true,
                      })}
                      aria-invalid={errors.permanentAddress ? "true" : "false"}/>
                        {errors.permanentAddress?.type === "required" && (
                      <Error error={"permanentAddress is required"} />
                    )}
                </div>
              </div>
              <div>
                <p className="mb-1">Profile Photo</p>
                <label  htmlFor="profilePhoto">
                        <div className="border-2 rounded-md h-44 text-gray-400 flex items-center justify-center cursor-pointer">
                            <BrokenImageOutlinedIcon sx={{fontSize:"50px"}}/>
                            <p>Drag and Drop a file here</p>
                        </div>
                </label>
                <input type="file" name="profilePhoto" className="hidden" id="profilePhoto" />
              </div>
            </div>
            {/* login details */}
            <div>
            <div className="flex items-center mt-5 mb-3">
                    <LockOpenIcon/>
                    <p className="text-xl font-semibold">Login Details</p>
                </div>
                <div className="flex gap-4">
                <div className="w-full">
                <p className="mb-1">Username*</p>
              <div>
                 <div className="flex items-center ">
                 <Person2OutlinedIcon className="border-2 text-[33px]" />
                  <input type="text" name="" id="" placeholder="Username" className="nice-input"
                  {...register("username", {
                    required: true,
                  })}
                  aria-invalid={errors.username ? "true" : "false"}
                  />
                 </div>
                  {errors.username?.type === "required" && (
                      <Error error={"Username is required"} />
                    )}
                </div>
              </div>
                <div className="w-full">
                <p className="mb-1">Password*</p>
              <div>
                 <div className="flex items-center ">
                 <LockOpenIcon className="border-2 text-[33px]" />
                  <input type="text" name="" id="" placeholder="Password" className="nice-input"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  />
                    
                 </div>
                 {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">Password must be 6 character</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less then 20 character
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                </div>
              </div>
                </div>
            </div>
            {/* Social links */}
            <div>
            <div className="flex items-center mt-5 mb-3">
                    <PublicIcon/>
                    <p className="text-xl font-semibold">Social Links</p>
                </div>

                <div className="lg:flex gap-4 ">
                <div className="w-full">
                <p className="mb-1">Facebook</p>
              <div>
                 <div className="flex items-center ">
                 <FacebookIcon className="border-2 text-[33px]" />
                  <input type="text" name="" id="" placeholder="Username" className="nice-input"
                  {...register("facebook", {
                    required: true,
                  })}
                  aria-invalid={errors.facebook ? "true" : "false"}
                  />
                 </div>
                  {errors.facebook?.type === "required" && (
                      <Error error={"Facebook is required"} />
                    )}
                </div>
              </div>
                <div className="w-full">
                <p className="mb-1">Linkedin</p>
              <div>
                 <div className="flex items-center ">
                 <LinkedInIcon className="border-2 text-[33px]" />
                  <input type="text" name="" id="" placeholder="Username" className="nice-input"
                  {...register("linkedin", {
                    required: true,
                  })}
                  aria-invalid={errors.linkedin ? "true" : "false"}
                  />
                 </div>
                  {errors.linkedin?.type === "required" && (
                      <Error error={"Linkedin is required"} />
                    )}
                </div>
              </div>
                <div className="w-full">
                <p className="mb-1">Twitter</p>
              <div>
                 <div className="flex items-center ">
                 <TwitterIcon className="border-2 text-[33px]" />
                  <input type="text" name="" id="" placeholder="Username" className="nice-input"
                  {...register("facebook", {
                    required: true,
                  })}
                  aria-invalid={errors.twitter ? "true" : "false"}
                  />
                 </div>
                  {errors.twitter?.type === "required" && (
                      <Error error={"Twitter is required"} />
                    )}
                </div>
              </div>
                </div>
            </div>
            <div className="flex justify-end mt-6 ">
            <input type="submit" value={"Save"} className="border-2 px-12 py-1.5 rounded-lg cursor-pointer" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
