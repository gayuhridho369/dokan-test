import Logo from "@/assets/logo";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-24 w-full border-b">
      <div className="container w-full h-full flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <Logo />
          <h1 className="font-medium text-2xl flex">TEST</h1>
        </div>

        <ul className="flex gap-8 font-medium">
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Team</Link>
          </li>
          <li>
            <Link href="#">Solutions</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
        </ul>

        <button className="flex items-center gap-2 py-3 px-5 font-medium border border-[#0719B3] rounded-[200px]">
          Dashboard <ArrowRight className="!size-5" />
        </button>
      </div>
    </header>
  );
}
