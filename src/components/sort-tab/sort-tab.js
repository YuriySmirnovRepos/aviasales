import React from "react";

import styles from "./sort-tab.module.scss";

export default function SortTab({ displayText, id, checked, onChange }) {
  return (
    <>
      <input
        onChange={onChange}
        checked={checked}
        type="radio"
        name="sort"
        id={id}
        className={styles["sort-button"]}
      />
      <label htmlFor={id} className={styles["sort-label"]}>
        {displayText}
      </label>
    </>
  );
}
