"use client";

import CustomButton from "@/components/CustomButton";
import React from "react";

const AddReview = () => {
  const handleAddReview = () => {};

  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="flex flex-col gap-4 justify-center items-center border-2 border-slate-400 p-5 w-[500px] h-[500px] ">
        <h1 className="text-3xl text-gray-700">Add new review</h1>
        <select
          name=""
          id=""
          className="p-3 w-full  border-2 border-slate-400 rounded-md "
        >
          <option value="">Select a movie</option>
          <option value="">two</option>
          <option value="">three</option>
        </select>
        <input
          type="text"
          placeholder="Your name"
          className="p-3 w-full border-2 border-slate-400 rounded-md "
        />
        <input
          type="number"
          placeholder="Rating out of 10"
          className="p-3 w-full border-2 border-slate-400 rounded-md "
        />
        <textarea
          placeholder="Review comments"
          cols={50}
          rows={200}
          className=" p-3 border-2 border-slate-400 rounded-md"
        />
        <div className="flex w-full  justify-end">
          <CustomButton
            title="Add new review"
            onPress={handleAddReview}
            bgColor="#6558F5"
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default AddReview;
