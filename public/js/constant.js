var ww = window.innerWidth;
var wh = window.innerHeight;
const pageWrapper = document.getElementsByClassName("pageWrapper");
const pages = document.getElementsByClassName("page");
const additional = [500, 500, wh, wh * 5, 0];
const scrollKey = "QWGDFefvbnBHJnyjBbbh";
var kenapaNeedMin = true;

function setPageWrapperDimension() {
    for (let l = 0; l < pages.length; l++) {
        const page = pages[l];
        const { style } = document.getElementById(page.classList[0]);
        style.width = ww;
        style.height = (page.scrollHeight + additional[l]) + "px";
    }
}

function getPageWrapperHeight() {
    const heightArr = [];
    for (let l = 0; l < pageWrapper.length; l++) {
        const element = pageWrapper[l];
        heightArr.push(parseInt(getComputedStyle(element).height));
    }
    return heightArr;
}

setPageWrapperDimension();
var pageWrappperHeight = getPageWrapperHeight();

function pnToIndex(name) {
    switch (name) {
        case "home":
            return 0;

        case "robotik":
            return 1;

        case "padzbot":
            return 2;

        case "kenapa":
            return 3;

        case "contact":
            return 4;
    }
}