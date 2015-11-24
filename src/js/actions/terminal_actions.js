import alt from '../alt'
import { run } from '../shell/commands'

class TerminalActions {
  execute(cmd) {
    let output = run(cmd);
    if (output) {
      let statusLine = 'echo "[*][*][*]{\\"currentPath\\": \\"$(pwd)\\", \\"username\\": \\"$USER\\", \\"hostname\\": \\"$(hostname)\\", \\"branch\\": \\"$(git rev-parse --abbrev-ref HEAD)\\", \\"status\\": \\"$(echo -n $(git status --porcelain))\\"}"';
      this.actions.writeToTerm(`${output.stdin};${statusLine}\n`);
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

  writeToTerm(params) {
    this.dispatch(params);
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

  update(params) {
    this.dispatch(params);
  }
}

export default alt.createActions(TerminalActions)
