import alt from '../alt'

import TerminalActions from '../actions/terminal_actions'

let mainTerminal = child_process.spawn('bash');
let subTerminal  = child_process.spawn('bash');

mainTerminal.stdout.on('data', (data) => {
  let str = data.toString();

  if (str.startsWith("[*][*][*]")) {
    TerminalActions.update(JSON.parse(str.substr(9, str.length - 1)));
  } else {
    TerminalActions.writeToStdout(str);
  }
});

class TerminalStore {
  constructor() {
    this.bindActions(TerminalActions);

    this.id = 0;
    this.elements = [
      {id: 0, type: 'stdin', value: '', readOnly: false},
    ];
    this.hostname     = "hostname";
    this.username     = "username";
    this.branch       = "git branch";
    this.currentPath  = "/current/path";
    this.gitStatus    = "git status";
  }

  onWriteToTerm(data) {
    mainTerminal.stdin.write(data);
  }

  onAddStdout() {
    let id = this.id + 1;

    this.id = id;
    this.elements.push({id: id, type: 'stdout', value: ''});
  }

  onWriteToStdout(value) {
    let stdout = this.elements[this.elements.length - 2];
    stdout.value = stdout.value + value;
  }

  onAddStdin() {
    // Mark current stdin as readonly
    // this.elements[this.elements.length - 1].readOnly = true;
    this.elements.forEach((elem) => {
      elem.readOnly = true;
    });

    // Add new stdin
    let id = this.id + 1;

    this.id = id;
    this.elements.push({id: id, type: 'stdin', value: '', readOnly: false});
  }

  onUpdate(params) {
    this.currentPath = params.currentPath;
    this.username    = params.username;
    this.hostname    = params.hostname;
    this.branch      = params.branch;
    this.gitStatus   = params.status.length > 0 ? true : false
  }
}

export default alt.createStore(TerminalStore, 'TerminalStore')
