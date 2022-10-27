import Image from "next/image";
import styles from "../styles/Image.module.css";

export default function TeamImage({ src, alt, name, position, id }) {
  return (
    <div className={styles.container}>
      <Image
        id={id}
        src={src}
        alt={alt}
        width={500}
        height={500}
        className={styles.picture}
      />
      <div className={styles.text}>
        <div className={styles.name}>{name}</div>
        <div className={styles.position}>{position}</div>
      </div>
    </div>
  );
}
