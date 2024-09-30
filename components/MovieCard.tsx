import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Link from "next/link";

interface MovieCardProops {
  movie: MovieDetail; 
}

const MovieCard = ({ movie }: MovieCardProops) => {
  return (
    <Link href={`/review/${movie.id}`}  className="bg-slate-200 w-[400px] h-[200px] flex flex-col gap-5 rounded-sm p-5 ">
      <h2 className="text-gray-800">{movie.name}</h2>
      <p>Released : {movie.releaseDate}</p> 
      <p>Rating: {movie.totalRating}</p>
      <div className="flex justify-end items-center gap-3">
      <FaRegEdit  size={20} className="cursor-pointer opacity-70 hover:scale-110" />
      <AiFillDelete size={20} className="cursor-pointer opacity-70 hover:scale-110" />
      </div>
    </Link>
  );
};

export default MovieCard;
