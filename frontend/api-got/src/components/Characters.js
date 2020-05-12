import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Character extends Component {

  static propTypes = {
    characters: PropTypes.array
  }

  render() {
    const { characters } = this.props
    return (
      <div>
        <table className="table is-bordered"
          style={{
            height: "40%",
            width: "80%"
          }}
          align={"center"} >
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Sexo</th>
              <th>Slug</th>
              <th>Casa</th>
              <th>Libros</th>
              <th>Títulos</th>
            </tr>
          </thead>
          <tbody>
            {
              characters.map(character => {
                return (
                  <tr key={character._id}>
                    <td><a href={character._id}><img src={character.image}/></a></td>
                    <td><a href={character._id}>{character.name}</a></td>
                    <td>{character.gender}</td>
                    <td>{character.slug}</td>
                    <td>{character.house}</td>
                    <td>{character.books}</td>
                    <td>{character.titles}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Character