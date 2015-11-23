import React            from 'react'
import { findDOMNode }  from 'react-dom'
import { filter }       from 'fuzzaldrin'

import TerminalActions  from '../actions/terminal_actions'
import Autocomplete     from './autocomplete'

let candidates = [
  { id: 0, name: 'ls()'    },
  { id: 1, name: 'pwd()'   },
  { id: 2, name: 'cd()'    },
  { id: 3, name: 'exec()'  },
  { id: 4, name: 'git.status()' },
];

class StdinElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:              props.element.value,
      suggestions:        [],
      selectedSuggestion: null,
    };

    this.handleChange   = this.handleChange.bind(this);
    this.handleKeyDown  = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    findDOMNode(this.refs[`stdin-${this.props.element.id}`]).focus();
  }

  render() {
    let autocomplete = null;
    if (!this.props.element.readOnly && this.state.suggestions.length > 0) {
      autocomplete = <Autocomplete suggestions={this.state.suggestions} selected={this.state.selectedSuggestion} />
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
    if (state.value.length > 0) {
      state.suggestions = filter(candidates, state.value, {key: 'name'});
      state.selectedSuggestion = state.suggestions[0];
    } else {
      state.suggestions = [];
      state.selectedSuggestion = null;
    }

    this.setState(state);
  }

  handleKeyDown(event) {
    if (event.keyCode == 13) { // ENTER
      event.preventDefault();
      TerminalActions.execute(this.state.value);
    }

    if (event.keyCode == 40) { // DOWN
      event.preventDefault();
      let idx = this.state.suggestions.indexOf(this.state.selectedSuggestion);
      if (idx < this.state.suggestions.length - 1) {
        let state = this.state;
        state.selectedSuggestion = this.state.suggestions[idx + 1];
        this.setState(state);
      }
    }

    if (event.keyCode == 38) { // UP
      event.preventDefault();
      let idx = this.state.suggestions.indexOf(this.state.selectedSuggestion);
      if (idx != 0) {
        let state = this.state;
        state.selectedSuggestion = this.state.suggestions[idx - 1];
        this.setState(state);
      }
    }

    if (event.keyCode == 9) { // TAB
      event.preventDefault();
      let state = this.state;
      state.value = state.selectedSuggestion.name;
      this.setState(state);
    }
  }
}

export default StdinElement
