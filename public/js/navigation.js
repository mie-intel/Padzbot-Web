const nav = document.getElementById("nav");
const navButton = document.getElementById("navButton");

function onclickHandler(id) {
    const { style, dataset } = nav;
    document.getElementsByClassName(id)[0].classList.add("active");
    dataset.state = "closed";
    style.transform = "translateX(-110%)";
}

navButton.addEventListener("click", ()=>{
    const { style, dataset } = nav;

    if (dataset.state == "opened") {
        style.transform = "translateX(-110%)";
        dataset.state = "closed";
    } else {
        style.transform = "translateX(0)";
        dataset.state = "opened";
    }
});

var navWidth = parseInt(getComputedStyle(nav).width);
window.addEventListener("click", (event)=>{
    const { style, dataset } = nav;
    if (event.x > navWidth) {
        style.transform = "translateX(-110%)";
        dataset.state = "closed";
    }
});