import React from 'react';
import SearchedResult from '../SearchedResults/Searchedresult/SearchedResult';

const searchedResults = (props) => props.searchedResults.map(state => {
        return <SearchedResult data={state[props.searchOnKey]} key={state.key} />
})

export default searchedResults;