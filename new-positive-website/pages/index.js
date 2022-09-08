import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <Layout>
      <h1>
        all things digital <br /> for your{" "}
        <span className="span1">business</span> <br />
        in one place
      </h1>
      <div className="scroll">
        <h5 className="text">
          scroll down to <br /> <span className="span2">see more</span>
        </h5>
      </div>
    </Layout>
  );
}
