import React, { Component } from 'react';

const TableBody = props => {
    const linhas = props.autores.map((linha, index) => {
        return (
            <tr key= {index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button onClick = {()=>{props.removeAuthor(index)}}> Remover </button></td>
            </tr>

        )

    });
    return <tbody>
        {linhas}
    </tbody>

}

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th> Autores</th>
                <th> Livros </th>
                <th> Preços </th>
                <th> Remover </th>
            </tr>
        </thead>
    );
}

class Tabela extends Component {
    render() {
        const { autores, removeAuthor } = this.props;

        return (
            <table>
                <TableHead />
                <TableBody autores={autores} removeAuthor={removeAuthor} />
            </table>
        );
    }
}

export default Tabela;
