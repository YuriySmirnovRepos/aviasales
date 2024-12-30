import { configureStore } from '@reduxjs/toolkit';
import { aviasalesApi } from '../services/aviasalesApi';
import { FILTERS } from './constants';

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

const filterReducer = (state = 0, action) => { 
	const binaryProcessing = {
		binaryLength() {
			return Object.keys(FILTERS).length;
		},
		// Algorithm Brian Kernighan.
		// Function to count set bits in an integer.
		// Algorithm: n & (n - 1) removes the rightmost set bit and shifts the rest to the right.
		// We count the number of times this operation can be performed until n becomes 0.
		countSetBits: (n) => {
			let count = 0;
			while (n) {
				count += n & 1;
				n >>= 1;
			}
			return count;
		},
		// Function to get state with all bits set.
		maskAll() {
			return ((1 << this.binaryLength()) - 1).toString(2); // 11111
		},
		areAllButTwoFiltersSelected(state) {
			return this.countSetBits(state) === this.binaryLength() - 2;
		},
	};

	let newState = state;
	const checkedFilterName = action.payload;

	switch (action.type) {
		case 'ADD_FILTER':
			{
				if (
					checkedFilterName === 'ALL' ||
					binaryProcessing.areAllButTwoFiltersSelected(state)
				) {
					return parseInt(binaryProcessing.maskAll(), 2);
				}
				newState |= FILTERS[checkedFilterName.toUpperCase()].mask;
				return newState;
			}
		case 'REMOVE_FILTER':
			{
				if (checkedFilterName === 'ALL') {
					return 0;
				}
				newState &= ~(FILTERS[checkedFilterName.toUpperCase()].mask | FILTERS.ALL.mask);
				return newState;
			}
		default:
			return state;
	}
}

export default configureStore({
	reducer: {
		[aviasalesApi.reducerPath]: aviasalesApi.reducer,
		sorting: sortingReducer,
		filter: filterReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(aviasalesApi.middleware),
});
