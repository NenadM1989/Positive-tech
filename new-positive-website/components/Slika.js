import Image from "next/image";
import profile from "../public/Component.png";
import styles from "../styles/Slika.module.css";

export default function Slika() {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.profile1}>
          <Image
            src={profile}
            width={500}
            height={500}
            className={styles.first}
          />
          <div className={styles.text} id="one">
            <h3 className={styles.name}>
              ALEKSANDAR <br />
              <span className={styles.span}>COO</span>
            </h3>
          </div>
        </div>

        <div className={styles.profile2}>
          <Image
            src={profile}
            width={500}
            height={500}
            className={styles.first}
          />
          <div className={styles.text} id="two">
            <h3 className={styles.name}>
              ALEKSANDAR <br />
              <span className={styles.span}>COO</span>
            </h3>
          </div>
        </div>
        <div className={styles.profile3}>
          <div className={styles.picture1}>
            <Image
              src={profile}
              width={500}
              height={500}
              className={styles.first}
            />
          </div>

          <div className={`${styles.text} ${styles.one}`} id="three">
            <h3 className={styles.name}>
              ALEKSANDAR <br />
              <span className={styles.span}>COO</span>
            </h3>
          </div>
        </div>
        <div className={styles.profile4}>
          <Image
            src={profile}
            width={500}
            height={500}
            className={styles.first}
          />
          <div className={styles.text}>
            <h3 className={styles.name}>
              ALEKSANDAR <br />
              <span className={styles.span}>COO</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

//rgba(0,23,81,0.54)
