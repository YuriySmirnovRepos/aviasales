import { configureStore } from '@reduxjs/toolkit';

const sortingReducer = (state = 'cheap', action) => {
	switch (action.type) {
		case 'SET_SORTING_CHEAP':
			return 'cheap';
		case 'SET_SORTING_FAST':
			return 'fast';
		case 'SET_SORTING_OPT':
			return 'opt';
		default:
			return state;
	}
};

const filterReducer = (state = [], action) => {
	const allFilters = [
		'all',
		'withoutTransfers',
		'oneTransfer',
		'twoTransfers',
		'threeTransfers',
	];

	switch (action.type) {
		case 'ADD_FILTER':
			if (
				action.payload === 'all' ||
				state.length === allFilters.length - 2
			) {
				return allFilters;
			}
			return [...state, action.payload];
		case 'REMOVE_FILTER':
			if (action.payload === 'all') {
				return [];
			}
			const newState = state.filter(
				(filter) => filter !== action.payload && filter !== 'all',
			);
			return newState;
		default:
			return state;
	}
};


export default configureStore({
	reducer: {
		sorting: sortingReducer,
		filter: filterReducer
	},
});
