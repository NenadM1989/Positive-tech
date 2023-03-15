import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Initial from "./initial";

export default function HomePage() {
  return (
    <Layout>
      <Initial />
      <section className="top-section">
        <div className="container">
          <div className="column">
            <div className="widget">
              <div className="element">
                <div className="services">
                  <h1 className="services-content" id="services">
                    services
                  </h1>
                </div>
              </div>
              <section className="development square">
                <div className="second">
                  <div className="gap">
                    <div className="gap-content"></div>
                  </div>
                  <div className="second-container">
                    <div className="second-content">
                      <div className="second-widget">
                        <div className="second-header">
                          <h2 className="second-header__content">
                            web & app development
                          </h2>
                        </div>
                      </div>
                      <div className="second-paragraph">
                        <div className="second-paragraph__content">
                          <p className="second-paragraph__text">
                            custom mobile app and web solutions that will
                            reflect the best features of your brand. built by
                            utilizing the latest tech trends, we strive to
                            provide safe, robust, and scalable solutions that
                            will allow you to reduce operational costs and boost
                            efficiency.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="development triangle">
                <div className="second">
                  <div className="gap">
                    <div className="gap-content"></div>
                  </div>
                  <div className="second-container">
                    <div className="second-content">
                      <div className="second-widget">
                        <div className="second-header">
                          <h2 className="second-header__content">design</h2>
                        </div>
                      </div>
                      <div className="second-paragraph">
                        <div className="second-paragraph__content">
                          <p className="second-paragraph__text">
                            advanced design thinking methodology will help you
                            design and validate your idea into a human-centered
                            digital experience. user experiences and user
                            interfaces that both solve.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="development circle">
                <div className="second">
                  <div className="gap">
                    <div className="gap-content"></div>
                  </div>
                  <div className="second-container">
                    <div className="second-content">
                      <div className="second-widget">
                        <div className="second-header">
                          <h2 className="second-header__content">marketing</h2>
                        </div>
                      </div>
                      <div className="second-paragraph">
                        <div className="second-paragraph__content">
                          <p className="second-paragraph__text">
                            full-stack marketing services for individuals, small
                            and medium businesses. social media marketing, seo,
                            ppc, email, mobile marketing, branding — we got you
                            covered.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="inner-space">
                <div>
                  <div className="empty"></div>
                </div>
              </div>
              <div className="how-container">
                <div className="how">
                  <h2 className="services-content">how it 's done</h2>
                </div>
              </div>
              <section className="numbers">
                <div className="numbers-container">
                  <div className="quarter-one">
                    <div className="quarter-one__gap"></div>
                  </div>
                  <div className="quarter-two">
                    <div className="quarter-two__container">
                      <div className="number-container">
                        <div className="number">
                          <p className="number-one">01.</p>
                        </div>
                      </div>
                      <div className="number-gap">
                        <div className="number-gap__empty"></div>
                      </div>
                      <div className="number-text">
                        <div>
                          tell us what <br /> you need
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="quarter-two">
                    <div className="quarter-three__container">
                      <div className="number-container">
                        <div className="number">
                          <p className="number-one">02.</p>
                        </div>
                      </div>
                      <div className="number-gap">
                        <div className="number-gap__empty"></div>
                      </div>
                      <div className="number-text">
                        <div>
                          select your <br /> team members
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="quarter-two">
                    <div className="quarter-four__container">
                      <div className="number-container">
                        <div className="number">
                          <p className="number-one">03.</p>
                        </div>
                      </div>
                      <div className="number-gap">
                        <div className="number-gap__empty"></div>
                      </div>
                      <div className="number-text">
                        <div>
                          start your <br />{" "}
                          <span className="span3">remote</span> <br />
                          collaboration
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
