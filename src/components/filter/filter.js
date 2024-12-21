import styles from './filter.module.scss';
import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';

const filters = [
	{ text: 'Все', value: 'all' },
	{ text: 'Без пересадок', value: 'withoutTransfers' },
	{ text: '1 пересадка', value: 'oneTransfer' },
	{ text: '2 пересадки', value: 'twoTransfers' },
	{ text: '3 пересадки', value: 'threeTransfers' },
];

export default function Filter() {
	const dispatch = useDispatch();
    const activeFilters = useSelector((state) => state.filter);
    const { removeFilter, addFilter } = bindActionCreators(actions, dispatch);

	const handleChange = (value) => () => {
		if (activeFilters.includes(value)) {
			removeFilter(value);
		} else {
			addFilter(value);
		}
    };
    

	return (
		<div className={styles.filterBox}>
			<h2 className={styles.title}>количество пересадок</h2>
			<ul className={styles.list}>
				{filters.map(({ text, value }) => (
					<li className={styles.item} key={value}>
						<label className={styles.label}>
							<input
								type='checkbox'
								className={styles.checkbox}
								checked={activeFilters.includes(value)}
								onChange={handleChange(value)}
							/>
							{text}
						</label>
					</li>
				))}
			</ul>
		</div>
	);
}
