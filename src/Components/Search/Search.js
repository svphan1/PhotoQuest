import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '10593088-383580b4405f92687a79104c0',
    images: []
  }

  render() {
    return (
      <div>
        <TextField
          name='searchText'
          value={this.state.searchText}
          onChange={this.textCapture}
          floatingLabelText='Search For Images'
          fullWidth={true}
        />
        <br />
        <SelectField
          name="amount"
          floatingLabelText='Amount'
          value={this.state.amount}
          onChange={this.amountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
      </div>
    )
  }
}

export default Search; 
