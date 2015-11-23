function exec(cmd) {
  return { stdin: cmd };
}

function ls(path = null) {
  let cmd = "ls";
  if(path != null) cmd += ` ${path}`;
  return exec(cmd);
}

function pwd() {
  return exec("pwd");
}

function cd(path) {
  return exec(`cd ${path}`);
}

export function run(code) {
  let result = eval(code);

  if (result.stdin) {
    return result;
  } else {
    return { stdout: result };
  }
}
