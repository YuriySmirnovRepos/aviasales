import styles from './sort-tabs.module.scss';
import React, { useCallback, useMemo } from 'react';
import SortTab from '../sort-tab';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';

export default function SortTabs() {
	const dispatch = useDispatch();
	const currentState = useSelector((state) => state.sorting);
	const changeSorting = useMemo(
		() => bindActionCreators(actions, dispatch),
		[dispatch],
	);

	const handleChange = useCallback(
		(value) => () => {
			dispatch(changeSorting[value]());
		},
		[dispatch, changeSorting],
	);

	const renderTabs = useCallback(() => {
		const tabsRenderData = [
			{ displayText: 'Самый дешевый', value: 'cheap' },
			{ displayText: 'Самый быстрый', value: 'fast' },
			{ displayText: 'Оптимальный', value: 'opt' },
		];

		return tabsRenderData.map((tab) => {
			return (
				<SortTab
					key={tab.value}
					displayText={tab.displayText}
					id={tab.value}
					checked={currentState === tab.value}
					onChange={handleChange(tab.value)}
				/>
			);
		});
	}, [currentState, handleChange]);

	return <div className={styles['sort-tabs']}>{renderTabs()}</div>;
}
