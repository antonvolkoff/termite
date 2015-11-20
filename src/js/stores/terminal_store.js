import alt from '../alt'

import TerminalActions from '../actions/terminal_actions'

class TerminalStore {
  constructor() {
    this.bindActions(TerminalActions);

    this.id = 0;
    this.elements = [
      {id: 0, type: 'stdin', value: ''},
      // {id: 2, type: 'stdout', value: "README.md\nbuild\n"}
    ];
  }

  onAddStdout(stdout) {
    let id = this.id + 1;

    this.id = id;
    this.elements.push({id: id, type: 'stdout', value: stdout});
  }

  onAddStdin() {
    let id = this.id + 1;

    this.id = id;
    this.elements.push({id: id, type: 'stdin', value: ''});
  }
}

export default alt.createStore(TerminalStore, 'TerminalStore')
