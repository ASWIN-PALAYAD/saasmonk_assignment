"use client";

import CustomButton from "@/components/CustomButton";
import { addNewMovie } from "@/lib/actions/action";
import React, { useState } from "react";

const AddMovie = () => {

  const [formData, setFormData] = useState({
    name:'',
    releaseDate:''
  })

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({...formData,[name]:value})

  }
  const handleCreateMovie = async(e:React.FormEvent) => {
      e.preventDefault();
      console.log(formData);
      
      const res = await addNewMovie(formData);

      if(res?.message){
        setErrorMessage(res.message);
      }
  }; 


  return (
    <div className="flex justify-center items-center" style={{ height: 'calc(100vh - 80px)' }}>
      <form onSubmit={handleCreateMovie} className="flex flex-col gap-9 justify-center items-center border-2 border-slate-400 p-5 w-[500px] h-[400px] ">
        <h1 className="text-3xl text-gray-700">Add new movie</h1>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Movie name"
          className="p-3 w-full  border-2 border-slate-400 rounded-md "
        />
        <input
          type="date"
          name="releaseDate"
          onChange={handleChange}
          placeholder="Example"
          className="p-3 w-full border-2 border-slate-400 rounded-md "
        />
        {errorMessage && (
          <div className="flex justify-center items-center">
            <p className="text-red-600">{errorMessage}</p>
          </div>
        )}
        <div className="flex w-full  justify-end">
          <CustomButton
            title="Add new review"
            onPress={handleCreateMovie}
            bgColor="#6558F5"
            textColor="white"
          />
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
