"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import styles from "./styles.module.css";

type navlink = {
  href: string;
  name: string;
};

const navlinks: navlink[] = [
  {
    href: "/projects/ailearners",
    name: "AI-Learners",
  },
  {
    href: "/projects/meta",
    name: "Meta",
  },
  {
    href: "/projects/jnj",
    name: "Johnson & Johnson",
  },
];

export default function ProjectNavbar() {
  const pathname = usePathname();
  return (
    <nav>
      <span>Projects:</span>
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
