import styles from "./button.module.scss";

export default function Button() {
  return (
    <button type="button" className={styles["show-more-button"]}>
      показать еще 5 билетов
    </button>
  );
}
