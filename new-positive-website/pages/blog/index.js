import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/blog.module.css";
import Link from "next/link";
import Head from "next/head";

export default function blog() {
  return (
    <div>
      <Head>
        <title>Blog - Positive tech</title>
      </Head>
      <Header />
      <section className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.content}>
            <div className={styles.layout}>
              <div className={styles.header}>
                <h1>blog</h1>
              </div>
              <div className={styles.articles}>
                <div className={styles.row}>
                  <article className={`${styles.setup} ${styles.image}`}>
                    <div className={styles.grow}>
                      <Link href="./different-types-of-mobile-apps-explained/">
                        <h2 className={styles.article1}>
                          Different types of mobile apps explained
                        </h2>
                      </Link>
                      <p>
                        Living in the digital age, we can’t imagine our lives
                        without apps. Whether we use them for work,
                        entertainment, or socializing, the chances that all of
                        us open at least one app per day are pretty high.
                        Besides being fun and convenient, apps are very
                        functional too. They make our lives easier. You can keep
                        track of anything thanks to an app – when to take your
                        medication, how many miles you’ve walked in a day, or
                        which shop offers the best discounts. Every app gives
                        restricted and isolated usefulness. With today’s
                        devices, apps and app development are reaching even
                      </p>
                    </div>
                  </article>
                  <article className={`${styles.setup} ${styles.image}`}>
                    <div className={styles.grow}>
                      <Link href="./how-ux-and-ui-work-together-in-web-design/">
                        <h2 className={styles.article1}>
                          How UX and UI Work Together In Web Design
                        </h2>
                      </Link>
                      <p>
                        User experience (UX) and user interface (UI) are both
                        valuable aspects of web design. UX is the process of
                        creating a satisfying experience for the user, while UI
                        is the design of the website itself. They work together
                        to create a website that is visually appealing and easy
                        to use at the same time. UI makes sure the website is
                        visually appealing. It is focused on the layout, colors,
                        and fonts used on the website. It creates the overall
                        feel of the website as well. UX makes the website easy
                        to use, and it determines how the user interacts with
                      </p>
                    </div>
                  </article>
                  <article className={`${styles.setup} ${styles.image}`}>
                    <div className={styles.grow}>
                      <Link href="./choosing-the-right-framework-pwa-vs-react-native/">
                        <h2 className={styles.article1}>
                          Choosing the Right Framework: PWA vs React Native
                        </h2>
                      </Link>
                      <p>
                        When developing a cross-platform application, there are
                        roads that can be hit – building it as a Progressive Web
                        App or as a React Native App. Most of the time, people
                        get confused when they start researching what approach
                        is better for their business. As a result of the
                        research’s tendency to lead to further speculation, it’s
                        not surprising that some readers are left scratching
                        their heads. However, this isn’t how things should
                        go.We’re talking about complicated processes, but they
                        can all be simplified quite easily. Only when completely
                        understood, an informed decision based on your company’s
                        requirements can be
                      </p>
                    </div>
                  </article>
                  <article className={`${styles.setup} ${styles.image}`}>
                    <div className={styles.grow}>
                      <Link href="./why-is-web-development-a-powerful-tool-for-business-growth/">
                        <h2 className={styles.article1}>
                          Why is Web Development A Powerful Tool For Business
                          Growth?
                        </h2>
                      </Link>
                      <p>
                        Web presence is essential for any business to be
                        successful today. Not only is a great web presence
                        important for new businesses, but it’s necessary for
                        established businesses as well. While social media is a
                        valuable addition to the company’s online game, a
                        website is a true gem. There is no good digital
                        marketing if the site isn’t accurate, informative,
                        responsive, and easy to navigate. Observing the market
                        allows you to keep your site useful and unique. It will
                        also ensure business growth through suitable web
                        solutions. Managing to create a user-centric experience
                        will help any business stand out and
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
