import Layout from "../components/Layout";
import styles from "../styles/404.module.css";
import Link from "next/link";

export default function NoFoundPage() {
  return (
    <Layout title="Page not found">
      <div className={styles.error}>
        <h4>Sorry,there is nothing here!</h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  );
}
