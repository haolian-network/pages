// 自己的打点
// uid => 用户编号
// action => 执行操作
// category => 执行对象
// version => 版本号
window.logEvent = function(params) {
  var u = window.navigator.userAgent;
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端

  // var logUrl = "http://192.168.94.34:5000/upload/h5Events";
  var logUrl = "https://ff.ggsafe.com/upload/h5Events";

  var logConfig = {
    appType: 'finde',
    projectName: 'finde_a',
    platform: isIOS ? 'ios' : 'android',
    url: window.location.href
  };

  return function(params) {
    var config = Object.assign({}, logConfig, params);
    axios.post(logUrl, config);
  }
}()