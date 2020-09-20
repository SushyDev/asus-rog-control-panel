function primeIntel() {
    sudo.exec('prime-select intel', options,
        function (error, stdout, stderr) {
            if (error) {
                throw error;
            } else {
                alert(stdout + " Reboot to apply changes")
                primeQuery()
            }
            console.log('stdout: ' + stdout);
        }
    );
}

function primeNvidia() {
    sudo.exec('prime-select nvidia', options,
        function (error, stdout, stderr) {
            if (error) {
                throw error;
            } else {
                alert(stdout + " Reboot to apply changes")
                primeQuery()
            }
            console.log('stdout: ' + stdout);
        }
    );
}

function primeQuery() {
    childProcess.exec("prime-select query", function (error, stdout, stderr) {
        document.getElementById("profile").innerHTML = "Current profile: " + stdout
    });
}
primeQuery()

function reboot() {
    var answer = window.confirm("Are you sure you want to reboot?");
    if (answer) {
        sudo.exec('reboot', options,
        function (error, stdout, stderr) {
            if (error) {
                throw error;
            } else {}
            console.log('stdout: ' + stdout);
        }
    );
    }
}