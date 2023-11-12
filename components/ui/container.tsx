import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <div className='mx-auto max-w-7xl'>{children}</div>;
};

export default Container;
