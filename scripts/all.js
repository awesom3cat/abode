const content = document.getElementById("content");

function isPhone() {
    if (window.innerWidth <= 900) {
        content.style.marginRight = 0;
        content.style.marginLeft = 0;
    } else {
        content.style.marginRight = "15%";
        content.style.marginLeft = "15%";

    }
}

isPhone()


// https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event

addEventListener("resize", (event) => { })

onresize = (event) => { isPhone() }