"use client";
import useIsMounted from "@/hooks/useIsMounted";
import { formatter } from "@/lib/utils";

interface ICurrencyProps {
  value?: string | number;
}
const Currency: React.FC<ICurrencyProps> = ({ value }) => {
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return <div className='font-semibold'>{formatter.format(Number(value))}</div>;
};

export default Currency;
