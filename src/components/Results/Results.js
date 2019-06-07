import React from 'react';
import Result from './Result/Result';

const results = (props) => props.result.map(state => {
        return <Result 
        itemValue={state[props.searchOnKey]} 
        key={state.key} 
        selectedItemFunc={() => props.selectedItemFunc(state)}
        selectedItem={props.selectedItem}
        searchOnKey={props.searchOnKey} />
})

export default results;