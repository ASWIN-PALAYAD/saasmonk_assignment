import prisma from "@/lib/db";
import { NextResponse } from "next/server";


export const GET = async() => {
    const movies = await prisma.movie.findMany();
    return NextResponse.json(movies);
}

