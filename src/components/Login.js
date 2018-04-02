import React, { Component } from 'react';

import firebase from 'firebase';


class App extends Component {

/*CONSTRUCTOR llama clases*/

constructor () {
  super();

  this.state = {user:null};
  this.handleAuth = this.handleAuth.bind(this);
  this.handleLogout = this.handleLogout.bind(this);
  this.renderLoginButton = this.renderLoginButton.bind(this);
}//* constructor ()


/* MANTENER LOGIN / ciclos de vida / llamar ajaxs*/
componentWillMount () {
  firebase.auth().onAuthStateChanged(user => {
    this.setState({user});
  });

}// componentWillMount ()


/* LOGIN */
  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

/* SALIR LOGIN */
  handleLogout (){
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }//handleLogout ()


/* BOTON */
  renderLoginButton(){
    //si está logeado
    if(this.state.user){
      return(
        <div>
          <img width="20" src={this.state.user.photoURL} alt={this.state.user.displayName}/>
          <span> Hola {this.state.user.displayName}! </span>
          <button type="button" className="bnlogin" onClick={this.handleLogout}>Salir</button>
        </div>
      );
    }else {
    // si no lo está
    return(
      <button type="button" className="bnlogin" onClick={this.handleAuth}>Login con google</button>
      );
    }
  }// renderLoginButton()

  /* VISUALIZACION */
  render() {
    return (
      <div className="App">
        <div className="loginblock">
          {this.renderLoginButton()}
        </div>
      </div>
    );
  }//render()

}//class App extends Component 

export default App;