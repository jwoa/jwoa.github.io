window.onload = function() {

    if( localStorage.getItem('mode') == 'dark' ){
        document.querySelector('body').classList.add('dark');
        document.querySelector('body').classList.remove('day');
        localStorage.setItem('mode', 'dark');
        console.log(localStorage.getItem('mode'));
    } else if (localStorage.getItem('mode') == 'day') {
        document.querySelector('body').classList.remove('dark');
        localStorage.setItem('mode', 'day');
        console.log(localStorage.getItem('mode'));
    }

    document.getElementById("switch").addEventListener("click", sickoMode);

    function sickoMode() {
        if (localStorage.getItem('mode') != 'dark') {
            document.querySelector('body').classList.add('dark');
            localStorage.setItem('mode', 'dark');
            console.log(localStorage.getItem('mode'));
        } else if (localStorage.getItem('mode') != 'day') {
            document.querySelector('body').classList.remove('dark');
            localStorage.setItem('mode', 'day');
            console.log(localStorage.getItem('mode'));
        }
    }

}
