/* eslint-disable no-bitwise */
import React from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../redux/actions";
import { FILTERS } from "../../redux/constants";

import styles from "./filter.module.scss";

export default function Filter() {
  const dispatch = useDispatch();
  const activeFilters = useSelector((state) => state.filter);
  const { removeFilter, addFilter } = bindActionCreators(actions, dispatch);

  const isChecked = (filterName) => {
    return (activeFilters & FILTERS[filterName.toUpperCase()].mask) !== 0;
  };

  const handleCheckboxChange = (filterName) => () => {
    if (isChecked(filterName)) {
      removeFilter(filterName);
    } else {
      addFilter(filterName);
    }
  };

  return (
    <div className={styles.filterBox}>
      <h2 className={styles.title}>количество пересадок</h2>
      <ul className={styles.list}>
        {Object.entries(FILTERS).map(([filterName, { text }]) => (
          <li className={styles.item} key={text}>
            <label className={styles.label}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={isChecked(filterName)}
                onChange={handleCheckboxChange(filterName)}
              />
              {text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
