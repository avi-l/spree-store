import { ICategory } from "@/types";
import axios, { AxiosResponse } from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<ICategory[]> => {
  try {
    const response: AxiosResponse = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching:", error);
    return [];
  }
};
export default getCategories;
