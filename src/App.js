import React,{Component} from 'react';
import './App.css';
import Tabela from './Tabelas';



class App extends Component {
 state= {
  autores:[
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

 removeAuthor = index =>{
   const {autores}= this.state;

   this.setState(
     {
       autores:autores.filter((autor, posAtual) =>{
       
         return posAtual !== index

       }),
     }
   );
   
 }

 render(){
  return(
    <div className= "app">
      <Tabela autores = {this.state.autores} removeAuthor={this.removeAuthor} />
      </div>
  );
 }
 
}
 
export default App;