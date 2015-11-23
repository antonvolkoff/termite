import alt from '../alt'
import { run } from '../shell/commands'

class TerminalActions {
  execute(cmd) {
    let output = run(cmd);
    if (output) {
      terminal.stdin.write(`${output.stdin}\n`);
      this.actions.addStdout();
      this.actions.addStdin();
    } else {
      this.actions.addStdout();
      this.actions.addStdin();
    }

    if (output.stdout) {
      this.actions.writeToStdout(output.stdout);
    }
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
