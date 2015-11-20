import alt from '../alt'

class TerminalActions {
  execute(cmd) {
    let result = ipcRenderer.sendSync("exec", cmd);
    this.actions.addStdout(result.stdout);
    this.actions.addStdin();
  }

  addStdout(stdout) {
    this.dispatch(stdout);
  }

  addStdin() {
    this.dispatch();
  }
}

export default alt.createActions(TerminalActions)
