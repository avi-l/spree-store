import dynamic from "next/dynamic";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Conditionally import the DarkModeSwitch component only on the client side
export const DynamicDarkModeSwitch = dynamic(
  () => import("@/components/darkmode-switch"),
  {
    ssr: false, // Disable server-side rendering for this component
  }
);
