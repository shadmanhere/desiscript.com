import { Inter } from "@next/font/google";

import DesiScript from "@/components/HomePage/desiscript";
import PersonalPortfolio from "@/components/HomePage/personalPortfolio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  if (process.env.NEXT_PUBLIC_Is_Personal_Portfolio === 'true') {
    return (
      <>
        <PersonalPortfolio />
      </>
    );
  } else {
    return (
      <>
        <DesiScript />
      </>
    );
  }
}
