import alt from '../alt'

class TerminalStore {
  constructor() {
    this.elements = [
      {id: 1, type: 'stdin', value: ''},
      // {id: 2, type: 'stdout', value: "README.md\nbuild\n"}
    ];
  }
}

export default alt.createStore(TerminalStore, 'TerminalStore')
