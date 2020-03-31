import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabelas';
import Form from './Formulario';
import Header from './Header';
import './App.css';



class App extends Component {
  state = {
    autores: [
      {
        nome: 'Marcia',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Diogo',
        livro: '.Net',
        preco: '367'
      },
      {
        nome: 'Gabriel',
        livro: 'JAVA',
        preco: '234'
      },
      {
        nome: 'Leonam',
        livro: 'P.O',
        preco: '432'
      }
    ],

  }

  escutadorDeSubmit=autor =>{
    
    console.log(this.state.autores)
    console.log("...")
    console.log(...this.state.autores)
    this.setState({autores: [...this.state.autores,autor]})

}    

  removeAuthor = index => {
    const { autores } = this.state;

    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {

          return posAtual !== index

        }),
      }
    );

  }

  render() {
    return (
      <Fragment>        
        <Header/>
        <div className="container mb-10">
      <Tabela autores={this.state.autores} removeAuthor={this.removeAuthor} />
      <Form  escutadorDeSubmit ={this.escutadorDeSubmit}/>
      </div>
      </Fragment >
      
  );
  }

}

export default App;