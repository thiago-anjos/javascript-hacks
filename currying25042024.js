function deviceMethods() {
  return function (page) {
    switch (page) {
      case "androidMethod":
        return "robozinho";
      case "iosMethod":
        return "applezinho";
      default:
        return "tokenDefault";
    }
  };
}

function getPlatform() {
  if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
    return "android";
  } else if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
    return "ios";
  } else return "desktop";
}

function platformMethod() {
  return function (deviceFn) {
    return function (deviceMethodsFn) {
      if (deviceFn === "android") {
        return deviceMethodsFn("androidMethod");
      } else if (deviceFn === "ios") {
        return deviceMethodsFn("iosMethod");
      } else {
        return deviceMethodsFn("desktopMethod");
      }
    };
  };
}

const deviceMethod = platformMethod()(getPlatform())(deviceMethods());
console.log(deviceMethod);
