import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;
const HomePage = async () => {
  let products = await getProducts({ isFeatured: true });
  let billboards = await getBillboards();
  if (typeof billboards === "string") billboards = [];
  if (typeof products === "string") products = [];
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        {billboards?.map((billboard) => (
          <Billboard key={billboard.id} data={billboard} />
        ))}
        <div className='flex flex-col gapy-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title={"Products"} items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
