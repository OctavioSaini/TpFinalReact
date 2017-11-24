import React, { Component } from 'react';
import './App.css';
import Home from './paginas/Home';
import Posts from './paginas/Posts';
import Albums from './paginas/Albums';
import Fotos from './paginas/Fotos';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div className="App">
         <AppBar title="Posteos y Albumes" />
         <Router>
           <div>
            <nav>
             <Link to ='/'>Home</Link>
             <Link to ='/Posts'>Posteos</Link>
             <Link to ='/Albums'>Albumes</Link>
			 
            </nav>
             <Route exact path='/' component={Home} />
             <Route path='/Posts' component={Posts} />
             <Route path='/Albums' component={Albums} />
			 
           </div>
         </Router>

      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
