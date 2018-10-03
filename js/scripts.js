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

//window.onload = function() {
//   if (sessionStorage.getItem('mode')) {
//        document.body.style.backgroundColor = sessionStorage.getItem('colour');
//    } else {
//        document.body.style.backgroundColor =  "#BB0A21";
//        sessionStorage.setItem('colour', "#BB0A21");
//    };
//};

window.onload = function() {
    
    let currentMode = document.getElementById('mode');
    
    function sickoMode() {
        if (localStorage.getItem('currentMode').style.backgroundColor == "#FFFFFF") {
            night();
        } else if () {
            day();       
        };
        function night() {
            currentMode.style.backgroundColor = '#000';
        };
        function day() {
            console.log("Day");
        };
    };
       
};
