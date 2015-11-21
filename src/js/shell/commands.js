let exec = (cmd) => {
  return ipcRenderer.sendSync("exec", cmd);
};

let ls = (path = null) => {
  let cmd = "ls";
  if (path != null) {
    cmd += ` ${path}`;
  }

  return exec(cmd);
}

let pwd = () => {
  return exec("pwd");
}

class Commands {
  static eval(cmd) {
    return eval(cmd);
  }
}

export default Commands
