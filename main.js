//scroll button project

let button = document.getElementById("up");

window.onscroll = function () {
    if (scrollY >= 1000) {
        button.classList.remove("hide");
    } else {
        button.classList.add("hide");
    }
}

// window.onscroll = function () {
//     if (scrollY >= 1000) {
//         button.style.display = "block";
//     } else {
//         button.style.display = "none";
//     }
// }

button.onclick = function () {
    scroll({
        // left: 0,
        top: 0,
        behavior: "smooth"

    })
}

console.log(button)


