import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavBarActions from "@/components/navbar-actions";
import DarkModeSwitch from "@/components/darkmode-switch";

export const revalidate = 0;
const NavBar = async () => {
  const categories = (await getCategories()) || [];
  return (
    <div className='border-b'>
      <Container>
        <div className='lg:px-8 sm:px-6 relative px-4 flex h-16 items-center'>
          <Link href={"/"} className='ml-4 flex lg:ml-0 gap-x-2'>
            <p className='font-bold text-xl'>STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavBarActions />
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
