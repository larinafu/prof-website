"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import sun from "../../../public/sunny.png";

import styles from "./styles.module.css";

type navlink = {
  href: string;
  name: string;
};

const navlinks: navlink[] = [
  {
    href: "/projects",
    name: "Projects",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/resume",
    name: "Resume",
  },
  {
    href: "/fun",
    name: "Fun",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className={styles.navbar}>
      <Link className={styles.logo} href="/">
        ✿ Larina Fu
      </Link>
      <button className={styles.themebtn}>
        <Image
          className={styles.themeimg}
          src={sun}
          alt="sun for light mode"
        ></Image>
      </button>
      <ul className={styles.navlinks}>
        {navlinks.map((link) => {
          const isActive = pathname.startsWith(link.href) && link.href !== "/";

          return (
            <li>
              <Link
                className={isActive ? styles.active : styles.unactive}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
