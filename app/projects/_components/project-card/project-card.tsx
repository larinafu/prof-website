import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";

export type cardInfo = {
  href: string;
  heading: string;
  subheading: string;
};

export default function ProjectCard({
  cardInfo,
  children,
}: {
  cardInfo: cardInfo;
  children: React.ReactNode;
}) {
  return (
    <Link className={styles.cardContainer} href={cardInfo.href}>
      <div className={styles.card}>{children}</div>
    </Link>
  );
}
