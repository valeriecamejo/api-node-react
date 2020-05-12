import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Details from '../components/Details'
import { getCharacterById } from '../services/characters'
import { Title } from '../components/Title'

export class List extends Component {
  static propTypes = {
    id: PropTypes.string
  }

  state = { character: {} }

  _goBack () {
    window.history.back()
  }

  async componentDidMount () {
    const { id } = this.props
    const responseJson = await getCharacterById({ id })
    this.setState({ character: responseJson, loaded: false })
  }

  render() {
    const { name } = this.state.character
    return(
    <div>
      <Title>Detalles de personaje {name}</Title>
      <Details character={this.state.character}/>
      <div>
        <button className="button is-dark"
          style={{
            margin: 15
          }}
          onClick={this._goBack}>Volver</button>
      </div>
    </div>
    )
  }
}

export default List