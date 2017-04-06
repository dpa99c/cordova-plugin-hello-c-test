function log(msg){
    document.body.innerHTML += '<p>' + msg + '</p>';
}

function onDeviceReady() {
    log("deviceready");

    helloc.getArch(function (arch) {
        log("Current architecture: " + arch);
    }, function (err) {
        log(err);
    });

    helloc.hello("Hello World", function(msg){
        log(msg);
    },function(err){
        log(err);
    });
}
document.addEventListener('deviceready', onDeviceReady, false);