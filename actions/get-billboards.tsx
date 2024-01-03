import { IBillboard, ICategory } from "@/types";
import axios from "axios";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (): Promise<IBillboard[]> => {
  const res = await axios.get(URL);
  return res.data;
};
export default getBillboards;
