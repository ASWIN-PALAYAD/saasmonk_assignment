import MovieCard from "@/components/MovieCard";
import { fetchAllMovies } from "@/lib/actions/action";
import { CiSearch } from "react-icons/ci";

// const Movies = [
//   {
//     id:1,
//     name: "Star Wars: A New Hope",
//     realeaseDate: "1st August 2022",
//     rating: "8.33/10",
//   },
//   {
//     id:2,
//     name: "Star Wars: A New Hope",
//     realeaseDate: "1st August 2022",
//     rating: "8.33/10",
//   },
//   {
//     id:3,
//     name: "Star Wars: A New Hope",
//     realeaseDate: "1st August 2022",
//     rating: "8.33/10",
//   },
//   {
//     id:4,
//     name: "Star Wars: A New Hope",
//     realeaseDate: "1st August 2022",
//     rating: "8.33/10",
//   },
//   {
//     id:5,
//     name: "Star Wars: A New Hope",
//     realeaseDate: "1st August 2022",
//     rating: "8.33/10",
//   },
// ];

export default async function Home() {

  const Movies = await fetchAllMovies() 
  
  return (
    <div className="pl-8 pt-5 flex flex-col ">
      <h1 className="font-semibold text-3xl">The best movie reviews sites!</h1>
      <div className="flex justify-start items-center border-2 border-blue-500 rounded-md  w-[30%] h-10 p-3 gap-2 mt-5">
        <div>
          <CiSearch size={25} />
        </div>
        <input
          type="text"
          placeholder="Search for your favourite movie"
          className="w-full h-full"
        />
      </div>
      {/* movie details section */}
      <div className=" pt-5  grid grid-cols-1  md:grid-cols-3 gap-4  ">
        {Movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} key={movie.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
