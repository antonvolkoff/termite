import React            from 'react'
import { findDOMNode }  from 'react-dom'
import { filter }       from 'fuzzaldrin'

import TerminalActions  from '../actions/terminal_actions'
import Autocomplete     from './autocomplete'

let candidates = [
  { name: 'ls()'    },
  { name: 'pwd()'   },
  { name: 'cd()'    },
  { name: 'exec()'  },
  { name: 'git.status()' },
];

class StdinElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.element.value };

    this.handleChange   = this.handleChange.bind(this);
    this.handleKeyDown  = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    findDOMNode(this.refs[`stdin-${this.props.element.id}`]).focus();
  }

  render() {
    let autocomplete = null;
    if (!this.props.element.readOnly && this.state.value.length > 0) {
      autocomplete = <Autocomplete items={filter(candidates, this.state.value, {key: 'name'})} />
    }

    return (
      <div className="element element-stdin">
        <textarea value={this.state.value} onChange={this.handleChange} ref={`stdin-${this.props.element.id}`} onKeyDown={this.handleKeyDown} readOnly={this.props.element.readOnly} rows="1"></textarea>
        {autocomplete}
      </div>
    )
  }

  handleChange(event) {
    let value = event.target.value;
    if (value[value.length - 1] == "\n") {
      return
    }

    let state = this.state;
    state.value = value;
    this.setState(state);
  }

  handleKeyDown(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      TerminalActions.execute(this.state.value);
    }
  }
}

export default StdinElement
