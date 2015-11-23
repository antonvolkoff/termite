import React from 'react'

import TerminalStore    from '../stores/terminal_store'

import StdinElement     from './stdin_element'
import StdoutElement    from './stdout_element'
import StatusBar        from './status_bar'

class Terminal extends React.Component {
  constructor() {
    super();
    this.state = TerminalStore.getState();

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    TerminalStore.listen(this.onChange);
  }

  componentDidUpdate() {
    window.scroll(0, document.body.scrollHeight);
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

    return (
      <div className="terminal">
        {elements}
        <StatusBar
          hostname={this.state.hostname}
          username={this.state.username}
          currentPath={this.state.currentPath}
          gitStatus={this.state.gitStatus}
          branch={this.state.branch}
        />
      </div>
    )
  }
}

export default Terminal
