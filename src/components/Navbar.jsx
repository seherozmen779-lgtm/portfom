"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hakkımda", path: "/hakkimda" },
    { name: "Projeler", path: "/projeler" },
    { name: "İletişim", path: "/iletisim" },
  ];

  return (
    <nav>
      <div>
        <Link href="/">Seher Özmen</Link>

        <div>
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                style={{
                  fontWeight: isActive ? "bold" : "normal",
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}