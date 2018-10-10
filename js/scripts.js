//### SICKO MODE ###//

document.getElementById('theme').addEventListener('click', function() {
   let sickoModeOn = document.body.classList.toggle('dark-mode');
   localStorage.setItem('dark-mode-on', sickoModeOn);
});

if (JSON.parse(localStorage.getItem('dark-mode-on'))) {
    document.body.classList.add('dark-mode');
}

//    function sickoMode() {
//        var body = document.getElementById("body");
//        var currentClass = body.className;
//        body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
//        
//        localStorage.setItem('body', 'currentClass');
//    }
    
//    document.getElementById('theme').addEventListener('click', function() {
//   document.body.classList.toggle('dark-mode');
//});