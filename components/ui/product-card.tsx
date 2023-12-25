"use client";
import { IProduct } from "@/types";
import Image from "next/image";
interface IProductCard {
  data: IProduct;
}
const ProductCard: React.FC<IProductCard> = ({ data }) => {
  console.log(data);
  return (
    <div className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
      {/* images and actions */}
      <div className='aspect-square rounded-xl bg-gray-100 relative'>
        <Image
          src={data.images?.[0]?.url}
          alt=''
          fill
          className='aspect-square object-cover rounded-md'
        />
        <div className='opacity-0 group-hover:opacity-100'>
          <div className='gap-x-6 justify-center'></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
