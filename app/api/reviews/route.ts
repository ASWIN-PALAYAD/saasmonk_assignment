import prisma from "@/lib/db"
import { NextResponse } from "next/server"

export const addReview = async(formData:ReviewType)=>{

    const movie = await prisma.movie.findUnique({
      where:{
        id:formData.movieId
      }
    })
    if(!movie){
        return new NextResponse('internal Server Error',{status:500})
    }
    
    

    
    
  
    // return NextResponse.json(movies);
  
  }