// The usepathname is dependent on browser APIs.  We want to access this thru the client so we need to add:
"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { GiUnicorn } from "react-icons/gi";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <GiUnicorn />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={`${
              link.href === currentPath ? "text-zinc-900" : "text-zinc-500"
            } hover:text-zinc-800 transition-colors`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
