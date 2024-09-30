type MovieDetail = {
    id:string,
    name:string,
    releaseDate:string,
    totalRating:number
    reviews?:ReviewType[]
}

type ReviewType = {
    id:string,
    movieId:string,
    reviewer?: string,
    rating:number,
    review:string
}

