import { IProduct } from "@/types";
import axios, { AxiosResponse } from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<IProduct> => {
  try {
    const response: AxiosResponse = await axios.get(`${URL}/${id}`);

    return response.data;
  } catch (error) {
    return [];
  }
};
export default getProduct;
