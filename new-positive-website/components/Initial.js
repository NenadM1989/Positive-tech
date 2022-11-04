import Header from "../components/Header";
import styles from "../styles/initial.module.css";
import Image from "next/image";
import picture from "../public/Group.png";

const Initial = () => {
  return (
    <div className={styles.initial}>
      <Header />
      <div className={styles.main}>
        <div className={styles.flex}>
          <div className={styles.padding}>
            <div className={styles.header}>
              <div>
                <h1 className={styles.text}>
                  {" "}
                  all things digital <br /> for your{" "}
                  <span className={styles.span1} id="business">
                    business
                  </span>{" "}
                  <br />
                  in one place
                </h1>
              </div>
            </div>
            <div className={styles.scroll}>
              <Image src={picture} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initial;
