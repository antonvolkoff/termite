import React from 'react'

import TerminalStore    from '../stores/terminal_store'

import StdinElement     from './stdin_element'
import StdoutElement    from './stdout_element'

class Terminal extends React.Component {
  constructor() {
    super();
    this.state = TerminalStore.getState();

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    TerminalStore.listen(this.onChange);
  }

  componentWillUnmount() {
    TerminalStore.unlisten(this.onChange);
  }

  onChange() {
    this.setState(TerminalStore.getState());
  }

  render() {
    let elements = this.state.elements.map((element) => {
      if (element.type == 'stdin') {
        return <StdinElement key={element.id} element={element} />
      }

      if (element.type == 'stdout') {
        return <StdoutElement key={element.id} element={element} />
      }
    });

    return (<div>{elements}</div>)
  }
}

export default Terminal
