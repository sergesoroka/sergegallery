"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  return (
    <header className="flex mb-24  items-center justify-between gap-24">
      <div className="flex items-center justify-start gap-24">
        <h1>Serge Soroka</h1>
        <h2
          className={
            pathname === "/"
              ? "underline underline-offset-4 pointer-events-none cursor-none"
              : ""
          }
        >
          <Link href="/">The Roofs</Link>
        </h2>
        <h2
          className={
            pathname === "/places"
              ? "underline underline-offset-4 pointer-events-none cursor-none"
              : ""
          }
        >
          <Link href="/places">The Places</Link>
        </h2>
      </div>
      <p>
        <a href="mailto:sergesoroka@gmail.com">Email</a>
      </p>
    </header>
  );
}

export default Header;
