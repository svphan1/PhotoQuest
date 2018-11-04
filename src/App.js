import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './Components/Navbar/NavBar';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div>
            <NavBar />
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
