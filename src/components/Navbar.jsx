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
SÖ.

{navItems.map((item) => {
const isActive = pathname === item.path;
return (

  {item.name}
);
})}

);
}