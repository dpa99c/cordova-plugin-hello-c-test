function log(msg){
    document.body.innerHTML += '<p>' + msg + '</p>';
}

function onDeviceReady() {
    log("deviceready");
    hello.greet("World", function(msg){
        log("success: " + msg);
    },function(err){
        log("err: " + err);
    })
}
document.addEventListener('deviceready', onDeviceReady, false);