"use server"

import { ACCESS_TOKEN } from "@/data/Constants";
import axios from "axios";

export async function getDataFromHttpRequest<T>(url : string) : Promise<T> {
  
    const config = {
        headers:{
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          accept: "application/json"
        }
      };
      
    const response = await axios.get<T>(url, config);
  
    return response.data;
}