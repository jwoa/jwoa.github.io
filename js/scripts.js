// All the fancy shmancy javascript stuff.

//### SICKO MODE ###//

//document.body.style.backgroundColor = sessionStorage.getItem('bg');
//document.body.style.color = sessionStorage.getItem('cc');
//function darker() {
//     if ( sessionStorage.getItem('bg') === 'rgb(255, 255, 255)') {
//         
//            sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
//            sessionStorage.setItem('cc', '#777');
//            
//         
//     }
//    else if (sessionStorage.getItem('bg') == null || undefined) {
//        sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
//        sessionStorage.setItem('cc', '#777');
//        
//    }
//    else if( sessionStorage.getItem('bg') === 'rgb(6, 23, 37)') {
//        
//        sessionStorage.setItem('bg', 'rgb(255, 255, 255)');
//        sessionStorage.setItem('cc', '#333');
//        
//  
//    }
//
//document.body.style.backgroundColor = sessionStorage.getItem('bg');
//document.body.style.color = sessionStorage.getItem('cc');
//
//}

window.onload = function() {
    function darker() {
      var body = document.getElementById("body");
      var currentClass = body.className;
      body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
    };
};