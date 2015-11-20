import React from 'react'

import TerminalActions from '../actions/terminal_actions'

class StdinElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.element.value };

    this.handleChange   = this.handleChange.bind(this);
    this.handleKeyDown  = this.handleKeyDown.bind(this);
  }

  render() {
    return (
      <div className="element element-stdin">
        <textarea value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown}></textarea>
      </div>
    )
  }

  handleChange(event) {
    let state = this.state;
    state.value = event.target.value;
    this.setState(state);
  }

  handleKeyDown(event) {
    if (event.keyCode == 13) {
      TerminalActions.execute(this.state.value);
      event.preventDefault();
    }
  }
}

export default StdinElement
