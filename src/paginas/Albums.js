import React, { Component } from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Fotos from './Fotos';
import Buscador2 from './Buscador2';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Albums extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Albums: []
    };
  }
  
  clickBoton(album){
    const buscar = album;
	console.log(buscar);
    
  }
  //<button onClick={this.clickBoton(Album.id)}>Buscar</button>
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/albums`)
      .then(res => {
        const Albums = res.data;
		console.log(Albums);
        this.setState({ Albums });
      });
  }
  
  //<Fotos albumId ={Album.id} />   
  
  
  render() {
    return (
      <div>
        <h1>{`Albumes`}</h1>
        <div>
          {this.state.Albums.map(Album =>{
			const link = `/Fotos/${Album.id}`;
			return(	
		    <article key={Album.id}>
              <h2>{Album.title}</h2>
			  <Router>
		        <div>
                  <nav>
                    <Link to ={link}>Fotos</Link>
				    <Link to ='/Albums'>Ocultar</Link>
				  </nav>
				    <Route path={link} component={Fotos} />
				    <Route path='/Albums' component={Buscador2} />
				  </div>
			  </Router>
		    </article>
			)
          })}
		   
                  
		  
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Albums />,
  document.getElementById('root')
);

export default Albums;