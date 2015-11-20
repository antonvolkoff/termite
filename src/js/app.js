import React      from 'react'
import { render } from 'react-dom'

import Terminal   from './components/terminal'

class App extends React.Component {
  render() {
    return (
      <div>
        <Terminal />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
