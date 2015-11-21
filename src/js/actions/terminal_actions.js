import alt from '../alt'
import Commands from '../shell/commands'

class TerminalActions {
  execute(cmd) {
    let output = Commands.eval(cmd);
    this.actions.addStdout(output.stdout);
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
