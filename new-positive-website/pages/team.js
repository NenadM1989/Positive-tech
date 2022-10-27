import Footer from "../components/Footer";
import Layout from "../components/Layout";
import SecondHeader from "../components/SecondHeader";
import styles from "../styles/team.module.css";
import Image from "next/image";
import picture from "../public/profile-picture.png";
import Slika from "../components/Slika";
import TeamImages from "../components/TeamImages";
import Head from "next/head";

export default function team() {
  return (
    <Layout>
      <Head>
        <title>Team - Positive tech</title>
      </Head>
      <SecondHeader />
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.column}>
            <div className="layout">
              <div className={styles.team}>
                <div>
                  <h2 className={styles.word}>team</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slika />
      </section>
      <section className={styles.careers}>
        <div className={styles.space}>
          <div className={styles.gap}>
            <div className={styles.column}>
              <div className={styles.row}>
                <div>
                  <h2>looking to join us?</h2>
                </div>
              </div>
              <div className={styles.row}>
                <div>
                  <h3>mail us at:</h3>
                </div>
              </div>
              <div className={styles.row}>
                <div>
                  <h4>careers@positivetech.uk</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
