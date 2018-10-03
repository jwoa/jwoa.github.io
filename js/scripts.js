// All the fancy shmancy javascript stuff.

//### SICKO MODE ###//

window.onload = function() {
    console.log("Booted.");
    function sickoMode() {
        var body = document.getElementById("body");
        var currentClass = body.className;
        body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
    }
    console.log("Ended.");
};

