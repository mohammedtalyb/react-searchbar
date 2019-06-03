import React, { Component} from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  static defaultProps = {
    alignIcon: 'left',
    placeholder: 'Search...',
    showIcon: 'true'
  }

  state = {
    dataList: this.props.data,
    filteredKeyResults: [],
    searchedResult: [],
    alignIcon: this.props.alignIcon,
    searchOnKey: this.props.searchOnKey,
    placeholder: this.props.placeholder,
    showIcon: this.props.showIcon
  }

  filterdata = () => {
    const filteredKeyResults = [];
    const searchOnKey = this.state.searchOnKey;
    const dataList = [...this.state.dataList];
    for(let data of dataList) {
      if(data[searchOnKey]) filteredKeyResults.push(data);
    }
    this.setState({filteredKeyResults: filteredKeyResults})
  }

  searchHandler = event => {
    const searchOnKey = this.state.searchOnKey;
    const inputValue = event.target.value.toUpperCase();
    const filteredKeyResults = [...this.state.filteredKeyResults];
    var searchedResult = [];

    for(let data of filteredKeyResults) {
      if(data[searchOnKey].toUpperCase().includes(inputValue)) searchedResult.push(data);
    }

    if(!inputValue) searchedResult = [];
    this.setState({
      searchedResult: searchedResult
    });
  }

  componentDidMount() {
    this.filterdata();
  }

  render() {
    return (
      <div className={classes.App}>
        <Cockpit 
        placeholder={this.state.placeholder}
        searchedResult={this.state.searchedResult}
        searchState={this.searchHandler}
        alignIcon={this.state.alignIcon}
        showIcon={this.state.showIcon}
        searchOnKey={this.state.searchOnKey} />
      </div>
    );
  }
}




export default App;
