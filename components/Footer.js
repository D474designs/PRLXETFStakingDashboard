import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} />
        <a
          href="https://D474designs.github.io"
          style={{ "text-decoration": "none", "color": "#198754", "font-size": "1em" }}
        >
          <p>Created by D474designs 2021 All Rights Reserved</p>
        </a>
      </footer>
    </>
  );
}
