const os = require("os");

function getNetworkIp() {
  let needHost = ""; // 打开的host
  try {
    // 获得网络接口列表
    let network = os.networkInterfaces();
    // console.log(network);
    for (let dev in network) {
      let iface = network[dev];
      for (let i = 0; i < iface.length; i++) {
        let alias = iface[i];
        if (
          alias.family === "IPv4" &&
          alias.address !== "127.0.0.1" &&
          !alias.internal
        ) {
          needHost = alias.address;
        }
      }
    }
  } catch (e) {
    needHost = "localhost";
  }
  console.log(needHost);
  return needHost;
}
const info = {
  version: "1.1",
  host: getNetworkIp(),
  DEV: {
    //API: "http://172.16.113.89:8280",
    API: "http://121.229.37.56:8085",
  },
  TEST: {
    API: "http://61.132.114.109:8081",
    // PORT: 8070,
  },
  PROD: {
    API: "http://121.229.37.56:8084",
  },
};
module.exports = info;