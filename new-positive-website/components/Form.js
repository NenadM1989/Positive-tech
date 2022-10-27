import styles from "../styles/Form.module.css";

export default function Form() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div class="lines">
          <input placeholder="Name" className={styles.name} required></input>
          <input placeholder="Email" className={styles.email} required></input>
        </div>
        <textarea
          placeholder="Message"
          className={styles.textarea}
          required
        ></textarea>
        <div className="nenad">
          <button className={styles.button} type="submit" id="send">
            send
          </button>
        </div>
      </form>
    </div>
  );
}
