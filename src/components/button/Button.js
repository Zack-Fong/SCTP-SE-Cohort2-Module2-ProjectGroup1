import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button({ label, to }) {
  return (
    <Link to={to} className={styles.button} style={{ textDecoration: "none" }}>
      {label}
    </Link>
  );
}

export default Button;
