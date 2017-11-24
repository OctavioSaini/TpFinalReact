import React, { Component } from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Albums from './Albums';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


class Fotos extends React.Component {
  constructor(props) {
    super(props);
	
    this.state = {
	  album:'',
      fotos: [],
	  open: false,
    };
  }

  
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  
  
  componentDidMount() {
	const albumId = document.location.pathname.split('/Fotos/')[1];
	console.log(albumId);
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        const fotos = res.data.filter(
				  album => album.albumId == albumId
				  );
		console.log(fotos);
        this.setState({ fotos });
      });
	  
	  
  }
  
  
  
  
  render() {
    const actions = [
      <FlatButton
        label="Salir"
        primary={true}
        onClick={this.handleClose}
      />,
      //<FlatButton
        //label="Submit"
        //primary={true}
        //keyboardFocused={true}
        //onClick={this.handleClose}
      // />,
    ];
	//const buscador = this.state.fotos;
	//const b = albumId;
	//const fotosAlbum = buscador
	//				   .filter(
	//				   (album) => {
	//				     if (String(album)==b){
    //                    return true;
    //                     }else{
    //                       return false;
    //                     }
	//				   });
	//console.log(fotosAlbum);
	
	
    return (
      <div>
        <h1>{`Fotos`}</h1>
        <div>
          {this.state.fotos.map(foto =>
		  <article key={foto.id}>
            <h2>{foto.title}</h2>
			<img src={foto.thumbnailUrl}></img>
			<div>
				<RaisedButton label="Ver Foto" onClick={this.handleOpen} />
					<Dialog
						title={foto.title}
						actions={actions}
						modal={false}
						open={this.state.open}
						onRequestClose={this.handleClose}
						autoScrollBodyContent={true}
					>
						<img src={foto.url}></img>
					</Dialog>
			</div>
			
		  </article>	
          )}
		  
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Fotos/>,
  document.getElementById('root')
);

export default Fotos;
