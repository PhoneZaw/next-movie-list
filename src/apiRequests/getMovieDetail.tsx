import { MOVIE_DETAIL_URL } from "@/data/Constants";
import { getDataFromHttpRequest } from "./apiRequest";

export const getMovieDetail = async (id : string) : Promise<MovieDetailType> => {

    const url = `${MOVIE_DETAIL_URL}/${id}`;
      
    const data = await getDataFromHttpRequest<MovieDetailType>(url);
  
    return data;
}