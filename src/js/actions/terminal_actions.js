import alt from '../alt'
import Commands from '../shell/commands'

class TerminalActions {
  execute(cmd) {
    terminal.stdin.write(`${cmd}\n`);
    this.actions.addStdout("");
    this.actions.addStdin();
  }

  addStdout() {
    this.dispatch();
  }

  writeToStdout(data) {
    this.dispatch(data);
  }

  addStdin() {
    this.dispatch();
  }
}

let actions = alt.createActions(TerminalActions)

terminal.stdout.on("data", (data) => {
  actions.writeToStdout(data.toString());
});

export default actions
