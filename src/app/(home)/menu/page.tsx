import Link from "next/link";
import { Menu } from "../components";

export default function Page() {
  return (
    <Menu
      close={
        <Link href="/">
          <span className="material-symbols-outlined icon-size-16">close</span>
        </Link>
      }
    />
  );
}
