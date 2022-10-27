import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Header from "../components/Header";
import styles from "../styles/contact.module.css";
import Form from "../components/Form";
import Head from "next/head";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact - Positive tech</title>
      </Head>
      <Header />
      <section className={styles.contact}>
        <div className={styles.layout}>
          <div className={styles.flex}>
            <div className={styles.content}>
              <div className={styles.nenad}>
                <div>
                  <h2>contact</h2>
                </div>
              </div>
              <section className={styles.second}>
                <div className={styles.content}>
                  <div className={styles.map}>
                    <div className={styles.okvir}>
                      <div className={styles.mapa}>
                        <div className={styles.full}>
                          <div className={styles.final}>
                            <iframe
                              title="Positive tech location"
                              src="https://maps.google.com/maps?q=Augusta%20Cesarca%2015%2C%2021000%20Novi%20Sad%2C%20Serbia&t=m&z=15&output=embed&iwloc=near"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.touch}>
                    <div className={styles.column}>
                      <div className={styles.get}>
                        <div>
                          <h2>get in touch</h2>
                        </div>
                      </div>
                      <div className={styles.general}>
                        <div className={styles.email}>
                          <p>
                            <strong>email</strong>
                            <br />
                            info@positivetech.uk
                          </p>
                        </div>
                      </div>
                      <div className={styles.general}>
                        <div className={styles.email}>
                          <p>
                            <strong>adress</strong>
                            <br />
                            Augusta Cesarca 15,21000 Novi Sad,Serbia
                          </p>
                        </div>
                      </div>
                      <div className={styles.phone}>
                        <div className={styles.email}>
                          <p>
                            <strong>phone</strong>
                            <br />
                            +381649371193
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Form />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}

//rgb(118, 158, 218);
