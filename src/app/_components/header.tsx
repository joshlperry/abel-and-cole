import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { AbelAndColeLogo } from "./svgs";

export function Header() {
  return (
    <header className="h-16 px-4 py-2 flex justify-between items-center border-b border-brand-darkGrey">
      <Bars3Icon className="h-10 w-10 stroke-brand-black" />
      <AbelAndColeLogo className="fill-brand-black h-10 mb-2" />
      <ShoppingCartIcon className="h-10 w-10" />
    </header>
  );
}
