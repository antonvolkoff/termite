import alt from '../alt'

class TerminalActions {
  execute(cmd) {
    console.log(`Executing: ${cmd}`);
  }
}

export default alt.createActions(TerminalActions)
