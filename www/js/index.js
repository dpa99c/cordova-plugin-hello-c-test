function log(msg){
    document.body.innerHTML += '<p>' + msg + '</p>';
}

function onDeviceReady() {
    log("deviceready");
    log("Platform: "+cordova.platformId+" "+cordova.platformVersion);

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

    helloc.calculate(2, 3, function(result){
        log("mylib calculate() result: " + result);
    },function(err){
        log(err);
    });
}

function causeCrash(){
    log("about to crash");
    helloc.causeCrash(function(result){
        log("crash operation succeeded - did not crash!");
    },function(err){
        log("crash operation failed: "+err);
    });
}

document.addEventListener('deviceready', onDeviceReady, false);
