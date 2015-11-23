let exec = (cmd) => {
  return ipcRenderer.sendSync("exec", `cd ${pcs.cwd()}; ${cmd}`);
};

let ls = (path = null) => {
  let cmd = "ls";
  if (path != null) {
    cmd += ` ${path}`;
  }

  return exec(cmd);
}

let pwd = () => {
  return exec(`pwd`);
}

let echo = (text) => {
  return {stdout: text, stderr: "", error: null};
}

let cd = (path) => {
  pcs.chdir(path);
  return {stdout: "", stderr: "", error: null};
}

/////// GIT

let git = {
  status: () => {
    return exec("git status");
  },

  checkout: (branch) => {
    return exec(`git checkout ${branch}`);
  }
}

///////////

class Commands {
  static eval(cmd) {
    return eval(cmd);
  }
}

export default Commands
