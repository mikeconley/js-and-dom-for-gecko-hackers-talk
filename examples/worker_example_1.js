function log(msg) {
  postMessage({
    name: "Log",
    msg: msg,
  });
}

addEventListener("message", function(e) {
  log("Worker received time to wait: " + e.data);
  var ms = e.data * 1000;
  var d = Date.now();
  while (Date.now() - d < ms) {}
  log("Worker is done waiting for: " + e.data + " seconds");
  postMessage({
    name: "Done",
  });
});
