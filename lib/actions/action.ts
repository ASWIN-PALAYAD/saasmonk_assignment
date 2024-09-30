import prisma from "../db"

export const fetchAllMovies = async() => {
    const movies = await prisma.movie.findMany();
    return movies
}