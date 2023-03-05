const os = require("os");

// Info about the current user
const user = os.userInfo();
// console.log(user);

// A methods retures the system uptime in seconds
const uptime = os.uptime();
// console.log(uptime);

// Current operating system
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
// console.log(currentOS);
