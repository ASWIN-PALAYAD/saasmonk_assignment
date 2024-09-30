type MovieDetail = {
    id:number,
    name:string,
    realeaseDate:string,
    rating:string
}

type ReviewType = {
    id:number,
    movieId:number,
    reviewer?: string,
    rating:number,
    review:string
}