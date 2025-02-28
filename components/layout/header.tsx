import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const BrandLogo = () => (
  <div className="flex gap-3 items-center">
    <Logo />
    <h1 className="font-medium text-2xl flex">TEST</h1>
  </div>
);

const MenuList = ({ className }: { className?: string }) => (
  <ul
    className={cn(
      "flex flex-col md:flex-row mt-10 md:m-0 gap-8 font-medium",
      className
    )}
  >
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
);

const DashboadMenu = ({ className }: { className?: string }) => (
  <button
    className={cn(
      "flex items-center gap-2 py-3 px-5 font-medium border border-[#0719B3] rounded-[200px]",
      className
    )}
  >
    Dashboard <ArrowRight className="!size-5" />
  </button>
);

export default function Header() {
  return (
    <header className="h-24 w-full border-b">
      <div className="container w-full h-full flex items-center justify-between">
        <BrandLogo />

        <Sheet>
          <SheetTrigger asChild>
            <Button className="flex md:hidden" variant="outline">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[90%]">
            <SheetHeader>
              <SheetTitle>
                <BrandLogo />
              </SheetTitle>
              <SheetDescription>
                <MenuList />

                <div className="flex justify-center w-full mt-10">
                  <DashboadMenu />
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <MenuList className="hidden md:flex" />

        <DashboadMenu className="hidden md:flex" />
      </div>
    </header>
  );
}
