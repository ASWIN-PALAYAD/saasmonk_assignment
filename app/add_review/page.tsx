"use client";

import CustomButton from "@/components/CustomButton";
import React, { useEffect, useState } from "react";

const AddReview = () => {
  const [movies, setMovies] = useState<MovieDetail[]>([]);

  const [formData, setFormData] = useState({
    movieId:'',
    reviewer:'',
    rating:0,
    review:''
  })

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>)=> {
    const {name,value}  = e.target;
    setFormData({...formData,[name]:value});
  }


  useEffect(() => {
     const fetchMovies = async () => {
      const response = await fetch("/api/movies", {
        method: "GET",
      });

      const data = await response.json();
      console.log(data);

      setMovies(data);
    };

    fetchMovies();
  }, []);

  const handleAddReview = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <form onSubmit={handleAddReview} className="flex flex-col gap-4 justify-center items-center border-2 border-slate-400 p-5 w-[500px] h-[500px] ">
        <h1 className="text-3xl text-gray-700">Add new review</h1>
        <select
          name="movieId"
          id=""
          className="p-3 w-full  border-2 border-slate-400 rounded-md "
        >
          <option value="">Select a movie</option>
          {movies ? (
            movies.map((movie) => (
              <option key={movie.id} value="">
                {movie.name}
              </option>
            ))
          ) : (
            <option value="">No movies available</option>
          )}
        </select>
        <input
          type="text"
          onChange={handleChange}
          name="reviewer"
          placeholder="Your name"
          className="p-3 w-full border-2 border-slate-400 rounded-md "
        />
        <input
          type="number"
          onChange={handleChange}
          name='rating'
          placeholder="Rating out of 10"
          className="p-3 w-full border-2 border-slate-400 rounded-md "
        />
        <textarea
          placeholder="Review comments"
          name="review"
          onChange={handleChange}
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
      </form>
    </div>
  );
};

export default AddReview;
