const changeSorting = {
    cheap: () => ({ type: 'SET_SORTING_CHEAP'}),
    fast: () => ({ type: 'SET_SORTING_FAST'}),
    opt: () => ({ type: 'SET_SORTING_OPT'}),
};
const { cheap, fast, opt } = changeSorting;

const addFilter = (filter) => ({ type: 'ADD_FILTER', payload: filter });
const removeFilter = (filter) => ({ type: 'REMOVE_FILTER', payload: filter });

export {cheap, fast, opt, addFilter, removeFilter};