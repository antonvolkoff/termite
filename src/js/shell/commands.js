let exec = (cmd) => {
  return ipcRenderer.sendSync("exec", cmd);
};

let ls = (path = null) => {
  let cmd = `cd ${pcs.cwd()}; ls`;
  if (path != null) {
    cmd += ` ${path}`;
  }

  return exec(cmd);
}

let pwd = () => {
  return exec(`cd ${pcs.cwd()}; pwd`);
}

let echo = (text) => {
  return {stdout: text, stderr: "", error: null};
}

let cd = (path) => {
  pcs.chdir(path);
  return {stdout: "", stderr: "", error: null};
}

class Commands {
  static eval(cmd) {
    return eval(cmd);
  }
}

export default Commands
