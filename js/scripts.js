// All the fancy shmancy javascript stuff.

//### SICKO MODE ###//
document.body.style.backgroundColor = sessionStorage.getItem("bg");
document.body.style.color = sessionStorage.getItem("cc");

function darker() {
    "rgb(255, 255, 255)" === sessionStorage.getItem("bg") ? (sessionStorage.setItem("bg", "rgb(6, 23, 37)"), sessionStorage.setItem("cc", "#777")) : null == sessionStorage.getItem("bg") ? (sessionStorage.setItem("bg", "rgb(6, 23, 37)"), sessionStorage.setItem("cc", "#777")) : "rgb(6, 23, 37)" === sessionStorage.getItem("bg") && (sessionStorage.setItem("bg", "rgb(255, 255, 255)"), sessionStorage.setItem("cc", "#333"));
    document.body.style.backgroundColor = sessionStorage.getItem("bg");
    document.body.style.color = sessionStorage.getItem("cc")
};