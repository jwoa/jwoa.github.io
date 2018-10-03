// All the fancy shmancy javascript stuff.

//### SICKO MODE ###//

window.onload = function() {
    
    let currentMode = document.getElementById('mode');
    
    function sickoMode() {
        var body = document.getElementById("body");
        var currentClass = body.className;
        body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
    }
       
};
