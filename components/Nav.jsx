"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { name: "Home", path: "/" },
  
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/Resume" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname(); // Client-side hook

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          }capitilized font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
export default Nav;
