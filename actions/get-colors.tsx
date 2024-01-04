import { Color } from "@/types";
import axios, { AxiosResponse } from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  try {
    const response: AxiosResponse = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
};
export default getColors;
