import React, { Component } from 'react'
import Character from '../components/Characters'
import { getData } from '../services/characters'
import { Title } from '../components/Title';
import Loading from '../components/Loading'
import View from '../views/View'


export class List extends Component {

  constructor(props) {
    super(props)

    this.state = {
      characters: [],
      loaded: true
    }
  }

  async componentDidMount () {
    const responseJson = await getData()
    this.setState({ characters: responseJson, loaded: false })
  }

  render() {
    const { characters } = this.state
    const url = new URL(document.location)
    if (url.pathname !== "/") {
      return <View id={url.pathname} />
    }
    return !this.state.loaded ? (
      <div>
        <Title>Personajes de Juego de Tronos</Title>
        <Character characters={characters} key={characters._id}/>
      </div>
    ) : (
      <Loading/>
    )
  }
}

export default List