import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;
const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboards = await getBillboards();
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        {billboards?.map((billboard) => (
          <div key={billboard.id}>
            <Billboard data={billboard} />
          </div>
        ))}
      </div>
      <div className='flex flex-col gapy-y-8 px-4 sm:px-6 lg:px-8'>
        <ProductList title={"Products"} items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
