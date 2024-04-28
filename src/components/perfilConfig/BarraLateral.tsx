'use client'
import { Divider, Link } from "@nextui-org/react";
import nextLink from "next/link";
import { usePathname } from "next/navigation";

const BarraLateral = ({ ArrayLinks }: { ArrayLinks: NavbarArrayProps[] }) => {
  const pathname = usePathname();

  return (
    <nav className="flex-1 overflow-hidden py-4 md:p-4">
      <ul className="flex justify-between items-center md:items-stretch md:flex-col">
        {ArrayLinks.map((link, index) => (
          <>
            <li key={index} className="flex-1">
              <Link
                color="foreground"
                as={nextLink}
                className={`link w-full px-2 py-1.5 flex gap-2 rounded-lg ${
                  pathname === `${link.rootPath}/${link.href}`
                    ? "text-white font-bold bg-indigo-950"
                    : ""
                }`}
                href={link.href}
                underline="active"
              >
                {link.icon}
                <span>{link.text}</span>
              </Link>
            </li>
            {<Divider className="my-4 hidden md:block" />}
          </>
        ))}
      </ul>
    </nav>
  );
};

export default BarraLateral;
