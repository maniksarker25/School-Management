import React from "react";

const About = () => {
  return (
    <div>
      <div className="lg:flex gap-10">
        <div className="lg:w-1/2">
          <h4 className="text-2xl mb-6">Welcome To School Of People</h4>
          <p>
            Our school is a vibrant, inclusive, and dynamic learning community
            that fosters creativity, critical thinking, and personal growth. At
            [School Name], we believe in providing a well-rounded education that
            goes beyond textbooks and exams. Our dedicated and passionate
            faculty members are committed to nurturing the potential in every
            student, encouraging them to explore their interests and excel
            academically. Our state-of-the-art facilities, including modern
            classrooms, well-equipped science labs, a library stocked with
            diverse resources, and athletic fields, provide a conducive
            environment for holistic development.
          </p>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <img className="w-full h-[300px] rounded-lg"
            src="https://i.ibb.co/1dtPwDX/The-school-visit-what-to-look-for-what-to-ask-1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
