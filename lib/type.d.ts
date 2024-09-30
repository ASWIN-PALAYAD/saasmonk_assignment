type MovieDetail = {
    id:string,
    name:string,
    releaseDate:string,
    totalRating:number
}

type ReviewType = {
    id:number,
    movieId:number,
    reviewer?: string,
    rating:number,
    review:string
}

