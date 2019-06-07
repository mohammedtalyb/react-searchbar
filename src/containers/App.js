import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  static defaultProps = {
    alignIcon: 'right',
    placeholder: 'Search...',
    showIcon: 'true'
  }

  state = {
    dataList: this.props.data,
    filteredKeyResults: [],
    result: [],
    selectedItem: {},
    alignIcon: this.props.alignIcon,
    searchOnKey: this.props.searchOnKey,
    placeholder: this.props.placeholder,
    showIcon: this.props.showIcon,
    isSearchbar: false
  }

  filterdata = () => {
    const filteredKeyResults = [];
    const searchOnKey = this.state.searchOnKey;
    const dataList = [...this.state.dataList];

    for (let data of dataList) {
      if (data[searchOnKey]) filteredKeyResults.push(data);
    }

    this.setState({
      filteredKeyResults: filteredKeyResults,
      selectedItem: filteredKeyResults[0]
    })
  }

  showSearchbarHandler = () => {
    this.setState({
      isSearchbar: !this.state.isSearchbar,
      result: this.state.filteredKeyResults
    });
  }

  selectedItemHandler = item => {
    this.setState({
      result: this.state.filteredKeyResults,
      selectedItem: item,
      isSearchbar: false
    });
  }
  
  searchHandler = event => {
    const searchOnKey = this.state.searchOnKey;
    const inputValue = event.target.value.toUpperCase();
    const filteredKeyResults = [...this.state.filteredKeyResults];
    var result = [];

    for (let data of filteredKeyResults) {
      if (data[searchOnKey].toUpperCase().includes(inputValue)) result.push(data);
    }

    // if(!inputValue) result = [];
    this.setState({
      result: result
    });
  }

  componentDidMount() {
    this.filterdata();
  }

  render() {
    let itemValue = '';

    if (this.state.selectedItem) {
      itemValue = <div className={classes.selectedDropdown} >
                    <p onClick={this.showSearchbarHandler}>{this.state.selectedItem[this.state.searchOnKey]}
                      <span className={this.state.isSearchbar ? classes.arrowUp : classes.arrowDown }></span>
                   </p>
                  </div>;
    }

    return (
      <div className={classes.App}>
        {itemValue}
        {this.state.isSearchbar ? <Cockpit
          placeholder={this.state.placeholder}
          result={this.state.result}
          search={this.searchHandler}
          alignIcon={this.state.alignIcon}
          showIcon={this.state.showIcon}
          searchOnKey={this.state.searchOnKey}
          selectedItemFunc={this.selectedItemHandler}
          selectedItem={this.state.selectedItem} /> : null}
      </div>
    );
  }
}




export default App;
