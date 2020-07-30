var arr = "2019-05-29 18:06:00".split(/[- :]/); //改这里
var box = document.getElementsByClassName("textCon")[0];
function init() {
  var width = box.offsetWidth;
  var count = parseInt((width / 50) * 5);
  for (var i = 0; i < count; i++) {
    var size = parseInt(ran(60, 120) / 10);
    var ele = document.createElement("div");
    ele.classList.add("item");
    ele.style.width = size + "px";
    ele.style.height = size + "px";
    ele.style.left = ran(0, 95) + "%";
    ele.style.top = ran(20, 80) + "%";
    ele.style.animationDelay = ran(0, 30) / 10 + "s";
    box.appendChild(ele);
  }
}
function ran(min, max) {
  min = parseInt(min);
  max = parseInt(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function timer_start() {
  var start_time = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
  // var start_time =  new Date(beginTime);
  // var start_time = Date.parse(beginTime);
  var duration = parseInt(new Date() - start_time) / 1000;
  var seconds = parseInt(duration % 60);
  if (seconds < 10) seconds = "0" + seconds;
  duration = parseInt(duration / 60);
  var minutes = duration % 60;
  if (minutes < 10) minutes = "0" + minutes;
  duration = parseInt(duration / 60);
  var hours = duration % 24;
  if (hours < 10) hours = "0" + hours;
  duration = parseInt(duration / 24);
  var days = duration;
  document.getElementsByClassName("days-number")[0].innerHTML = "" + days;
  document.getElementsByClassName("seconds")[0].innerHTML =
    hours + " 时 " + minutes + " 分 " + seconds + " 秒";
}
window.setInterval(timer_start, 1000);
timer_start();
init();
