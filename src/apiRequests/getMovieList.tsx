import { GET_MOVIE_LIST_URL, GET_MOVIE_SEARCH_URL } from "@/data/Constants";
import { ReturnType } from "@/data/ReturnType";
import { getDataFromHttpRequest } from "./apiRequest";

export const getMoviesResult = async (pageNo : number, search : string | null) : Promise<ReturnType> => {

    console.log(`Movies Page pg - ${pageNo} search - ${search}`);
  
    var url : string = "";
  
    if(search?.trim().length){
        url = GET_MOVIE_SEARCH_URL(search, pageNo);
    }else{
        url = GET_MOVIE_LIST_URL(pageNo);
    }
      
    const data = await getDataFromHttpRequest<ReturnType>(url);
  
    return data;
  }