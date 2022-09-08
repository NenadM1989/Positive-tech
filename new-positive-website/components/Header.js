import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import picture from "../public/233C.png";
import spinner1 from "../public/Mask-Group-1.png";
import spinner2 from "../public/Mask-Group.png";
import spinner3 from "../public/Mask-Group-3.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/teams">
          <Image src={picture} width={120} height={30} alt={"image"} />
        </Link>
      </div>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/team">
              <div>
                <Image src={spinner1} height={13} width={13} />
                <span className={styles.span}>team</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <div>
                <Image src={spinner2} height={13} width={13} />
                <span className={styles.span}>blog</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div>
                <Image src={spinner3} height={13} width={13} />
                <span className={styles.span}>contacts</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
