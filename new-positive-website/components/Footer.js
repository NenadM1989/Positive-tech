import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.layout}>
            <div className={styles.title}>
              <div>
                <h2 className={styles.h2}>get in touch</h2>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.nenad}>
                <p className={styles.paragraph}>
                  <strong>email</strong>
                  <br />
                  info@positivetech.uk
                </p>
                <div>&nbsp;</div>
                <p className={styles.paragraph}>
                  <strong>adress</strong>
                  <br />
                  Augusta Cesarca 15,21000 Novi Sad,Serbia
                </p>
                <div>&nbsp;</div>
                <p className={styles.paragraph}>
                  <strong>phone</strong>
                  <br />
                  +381649371193
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.layout}>
            <div className={styles.title}>
              <div>
                <h2 className={styles.h2}>connect with us</h2>
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.networks}>
                <a
                  href="https://www.linkedin.com/company/positive-tech-it"
                  target="_blank"
                  className={`${styles.lif} ${styles.linkedin}`}
                >
                  linkedin
                </a>
                <br />
                <a
                  href="https://www.instagram.com/positivetech.rs/"
                  target="_blank"
                  className={`${styles.lif} ${styles.instagram}`}
                >
                  instagram
                </a>
                <br />
                <a
                  href="https://www.facebook.com/positivetechrs"
                  target="_blank"
                  className={`${styles.lif} ${styles.facebook}`}
                >
                  facebook
                </a>
                <div className={styles.picture1}></div>
                <div className={styles.picture2}></div>
                <div className={styles.picture3}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
