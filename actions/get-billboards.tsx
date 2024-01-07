import { IBillboard, ICategory } from "@/types";
import axios, { AxiosResponse } from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (): Promise<IBillboard[]> => {
  try {
    const response: AxiosResponse = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching:", error);
    return [];
  }
};
export default getBillboards;
