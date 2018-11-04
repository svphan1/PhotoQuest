import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './Components/Navbar/NavBar';
import Search from './Components/Search/Search';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div>
            <NavBar />
            <Search />
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
