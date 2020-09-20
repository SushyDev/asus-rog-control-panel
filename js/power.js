function powerBoost() {
    childProcess.exec("asusctl -p boost", function(error, stdout, stderr){
        alert("Boost profile now active")
    });
}

function powerNormal() {
    childProcess.exec("asusctl -p normal", function(error, stdout, stderr){
        alert("Normal profile now active")
    });
}

function powerSilent() {
    childProcess.exec("asusctl -p silent", function(error, stdout, stderr){
        alert("Silent profile now active")
    });
}