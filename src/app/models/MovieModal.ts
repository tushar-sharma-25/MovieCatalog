export interface Movie{
    id:number,
    movieName: string,
    yearReleased:number,
    rating: number
    genre: Array<string>,
    directorName:string,
    shortDescription:string
}