import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Details extends Component {
  static propTypes = {
    character: PropTypes.array
  }

  render() {
    const { character } = this.props
    return (
      <div>
        <div>
          <figure className="image-center is-2by3">
            <img src={character.image} />
          </figure>
        </div>
        <div>
          <table className="table is-bordered"
            style={{
              height: "70%",
              width: "80%"
            }}
            align={"center"} >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Sexo</th>
                <th>Slug</th>
                <th>Casa</th>
                <th>Libros</th>
                <th>Títulos</th>
              </tr>
            </thead>
            <tbody>
              <tr key={character._id}>
                <td>{character.name}</td>
                <td>{character.gender}</td>
                <td>{character.slug}</td>
                <td>{character.house}</td>
                <td>{character.books}</td>
                <td>{character.titles}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Details;