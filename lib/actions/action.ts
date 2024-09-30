"use server";

import { redirect } from "next/navigation";
import prisma from "../db";

export const fetchAllMovies = async () => { 
  const movies = await prisma.movie.findMany();
  return movies;
};


//for changing date formate
const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Function to get ordinal suffix for the day
  const getOrdinalSuffix = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
};

export const addNewMovie = async (formData: { 
  name: string;
  releaseDate: string;
}) => {
  const { name, releaseDate } = formData;
  const newDate = formatDate(releaseDate);

  if (!name ) {
    return { message: "please fill the details correctly..." };
  }

  await prisma.movie.create({
    data: {
      name,
      releaseDate: newDate,
    },
  });
  redirect("/");
};


