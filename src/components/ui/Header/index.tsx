import styles from "./Header.module.css";
import Image from "next/image";
import Logomark from "@/public/assets/Logomark.svg";
import Logotype from "@/public/assets/Logotype.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image src={Logomark} alt="Logo da FocalPoint" />
          <Image src={Logotype} alt="Logotipo da FocalPoint" />
        </div>
        <span>
          <h3 className={styles.welcomeMessage}>Bem-vindo de volta, Marcus</h3>
        </span>

        <span className={styles.dateOfTheDay}>Segunda, 22 de dezembro de 2024</span>
      </div>
    </header>
  );
}
