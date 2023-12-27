import { IProduct } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  sizeId?: string;
  colorId?: string;
  categoryId?: string;
  isFeatured?: boolean;
}
const getProducts = async (query: Query): Promise<IProduct[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(url);
  return res.json();
};
export default getProducts;
