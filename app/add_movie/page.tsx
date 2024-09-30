"use client";

import CustomButton from "@/components/CustomButton";
import React from "react";

const AddMovie = () => {
  const handleCreateMovie = () => {};
  return (
    <div className="flex justify-center items-center" style={{ height: 'calc(100vh - 80px)' }}>
      <div className="flex flex-col gap-4 justify-center items-center border-2 border-slate-400 p-5 w-[500px] h-[400px] ">
        <h1 className="text-3xl text-gray-700">Add new movie</h1>
        <input
          type="text"
          placeholder="Name"
          className="p-3 w-full  border-2 border-slate-400 rounded-md "
        />
        <input
          type="text"
          placeholder="Release date"
          className="p-3 w-full border-2 border-slate-400 rounded-md "
        />
        <div className="flex w-full  justify-end">
          <CustomButton
            title="Add new review"
            onPress={handleCreateMovie}
            bgColor="#6558F5"
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
