import { IProduct } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<IProduct> => {
  console.log("id", id);
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};
export default getProduct;
