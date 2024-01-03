import { ICategory } from "@/types";
import axios from "axios";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<ICategory> => {
  const res = await axios.get(`${URL}/${id}`);
  return res.data;
};
export default getCategory;
