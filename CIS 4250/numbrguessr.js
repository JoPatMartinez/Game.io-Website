const input = document.getElementById("input");
const interact = document.getElementById("interact");
const lastguess = document.getElementById("lastguess");
const button = document.getElementById("button");
let a = Math.floor(Math.random() * 1001);
let b = 0;
let c = "";

function guess() {
    c = input.value;
    b += 1;

    if (parseInt(c) === a) {
        interact.innerHTML = "This number took you " + b + " tries.";
        setTimeout(function() {
            window.location.reload(1);
        }, 30000);
    }

    lastguess.innerHTML = "Previous guess: " + c;

    if (parseInt(c) > a) {
        interact.innerHTML = " &darr; Lower &darr;";
    }

    if (parseInt(c) < a) {
        interact.innerHTML = " &uarr; Higher &uarr;";
    }
};

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        button.click();
    }
});
