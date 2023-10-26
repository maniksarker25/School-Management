import LatestNews from "@/src/component/app/LatestNews";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function News() {
  return (
    <>
      <LatestNews />
    </>
  );
}
