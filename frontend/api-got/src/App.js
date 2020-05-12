import React, { Component } from 'react';
import { List } from './views/List';

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <List/>
        </div>
      </div>
    )
  }
}

export default App;
