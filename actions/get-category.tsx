import { ICategory } from "@/types";
import axios, { AxiosResponse } from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<ICategory> => {
  try {
    const response: AxiosResponse = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export default getCategory;
