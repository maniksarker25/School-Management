import React from "react";

const Form = () => {
  return (
    <div className="p-6 bg-[rgb(1,162,166)]  text-white h-full">
      <h4 className="text-2xl mb-6">Send Message</h4>
      <form>
        <div className="flex gap-2">
          <input
            type="text"
            className="bg-transparent  border rounded-3xl py-1.5 ps-3 outline-none w-full placeholder:text-white"
            placeholder="Name"
          />
          <input
            type="text"
            className="bg-transparent  border rounded-3xl py-1.5 ps-3 outline-none w-full placeholder:text-white"
            placeholder="Phone"
          />
          <input
            type="text"
            className="bg-transparent  border rounded-3xl py-1.5 ps-3 outline-none w-full placeholder:text-white"
            placeholder="Email"
          />
        </div>
        <div className="mt-10 flex gap-3">
          {/* <input
            type="text"
            placeholder="Message"
            className="bg-transparent  border rounded-3xl py-1.5 ps-3 outline-none w-full placeholder:text-white"
          /> */}
          <textarea 
          placeholder="Message"
          className="bg-transparent  border rounded-xl py-1.5 ps-3 outline-none w-full placeholder:text-white"
          
          >

          </textarea>
          <button className="mt-auto px-4   py-1.5 rounded-3xl bg-white text-semibold text-[rgb(1,162,166)] h-10
           w-[230px]">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
