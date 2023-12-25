import { IBillboard, ICategory } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (): Promise<IBillboard[]> => {
  const res = await fetch(URL);
  return res.json();
};
export default getBillboards;
