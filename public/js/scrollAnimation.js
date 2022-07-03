const gear = document.getElementById("mainGear");
var {width, right} = getComputedStyle(gear);
const closer = document.getElementById("closer");
const bottomSpacer = document.getElementById("bottomSpacer");
var parsedGearWidth = parseInt(width);
var parsedGearRight = parseInt(right);
var HOMEstartPosition = {width: parsedGearWidth, right: parsedGearRight}
var HOMEendPosition = {width: ww * 3, right: -(ww/1)};

const robotikTitle = document.getElementById("robotikTitle");
const LFPath = document.getElementById("LFPath");
const LFBot = document.getElementById("LFBot");
var counter = 0;
var LFPathDistance = LFPath.getTotalLength()
var interval = LFPathDistance / 200;
var pointBefore = {x: 0, y: 0};
var robotikTopPositionS = 0.05 * wh;

const Xttr = document.getElementById("XtoRight");
const Xttl = document.getElementById("XtoLeft");
const XContainer = document.getElementById("theXContainer");
const timgContainer = document.getElementById("timgContainer");
var timgHeight = getComputedStyle(timgContainer).height;
var PADZBOTstartPosition = {mTop: 0, height: parseInt(timgHeight), width:  (wh + ww) * 0.1, top: undefined, rttl: 0, rttr: 0, tttr: 3};
var PADZBOTendPosition = {mTop: wh * 1.2, height: wh, top: (0.5 * wh) - (PADZBOTstartPosition.height / 2), width: ww, rttl: -64.65, rttr: 51.73, tttr: 17};
XContainer.style.width = PADZBOTstartPosition.width + "px";
XContainer.style.height = PADZBOTstartPosition.height + "px";
const padzbotCloser = document.getElementById("padzbotCloser");
const timgS = document.getElementsByClassName("timgS")
const padzbotTitle = document.getElementById("padzbotTitle");

var KENAPAstartPosition = {kTop: -wh * 0.8, ktF: 0, endTop: 0};
var KENAPAendPosition = {kTop: 0, ktF: 0.12 * ww, endTop: wh * 0.04};
const kenapaTitle = document.getElementById("kenapaTitle");
const kenapaSC = document.getElementById("kenapaSC");
const kenapaSS = document.getElementById("kenapaSS");
const KImg = document.getElementsByClassName("KImg");
const [moneyImg, brainImg, smileyImg] = KImg;
const KMCs = document.getElementsByClassName("KENAPAMC");
var KMCPos = [];
const Kheading = document.getElementsByClassName("KHeading");
const KText = document.getElementsByClassName("KText");
const sideArr = ["sideLeft", "sideCenter", "sideRight"];

const contactSC = document.getElementById("contactSC");

function homeAnimation(homePageW) {
    const {top, height} = homePageW.getBoundingClientRect();
    var percent = ((top * -1) / (height * 0.5));

    if (percent <= 0) {
        gear.style.width = width;
        gear.style.right = right;
        gear.style.opacity = 1;
        bottomSpacer.style.opacity = 1;
        homePageW.style.opacity = 1;
    } else if (percent >= 1) {
        gear.style.width = HOMEendPosition.width + "px";
        gear.style.right = HOMEendPosition.right + "px";
        gear.style.opacity = 0;
        homePageW.style.opacity = 0;
        bottomSpacer.style.opacity = 0;
    } else {
        gear.style.width = ((percent * (HOMEendPosition.width - HOMEstartPosition.width)) + HOMEstartPosition.width) + "px";
        gear.style.right = ((percent * (HOMEendPosition.right - HOMEstartPosition.right)) + HOMEstartPosition.right) + "px";
        gear.style.opacity = 1 - percent;
        homePageW.style.opacity = 1 - percent;
        bottomSpacer.style.opacity = 1 - (8 * percent);
    }

    const parsedSWidth = parseInt(gear.style.width);
    
    closer.style.right = (parseInt(gear.style.right) + (parsedSWidth * 0.125)) + "px";
    closer.style.width = (parsedSWidth * 0.76) + "px";

}

function robotikAnimation(robotikPageW) {
    const {top, height} = robotikPageW.getBoundingClientRect();
    var percent = ((top * -1) / (height));
    if (percent <= -0.3) {
        robotikPageW.style.opacity = 0;
    } else if (percent >= 0) {
        robotikPageW.style.opacity = 1;
    } else {
        robotikPageW.style.opacity = (percent - -0.3) / (0 - -0.3);
    }


    if (percent > 0) {
        if (percent <= 0.6) {
            robotikPageW.style.opacity = 1;
        } else if (percent >= 0.75) {
            robotikPageW.style.opacity = 0;
        } else {
            robotikPageW.style.opacity = ((((percent - 0.6) / (0.75 - 0.6)) * -1)) + 1; 
        }
    }

    if (percent <= -0.2) {
        robotikTitle.classList.add("RTHidden");
    } else {
        robotikTitle.classList.remove("RTHidden");
    }

    if (percent <= 0.45) {
        robotikSS.style.top = "";
    } else if (percent >= 0.75) {
        robotikSS.style.top = robotikTopPositionS + "px";
    } else {
        robotikSS.style.top = (- (((percent - 0.45) / (0.75 - 0.45)) * (robotikTopPositionS))) + "px"; 
    }

    const point = LFPath.getPointAtLength(counter);
    const bbox = LFBot.getBBox();
    LFBot.setAttribute("x", (point.x - (bbox.width / 2)));
    LFBot.setAttribute("y", (point.y - (bbox.height / 2)));
    counter += interval;
    if (counter > LFPathDistance) {
        counter = 0;
    }

    const deg = Math.atan((point.y - pointBefore.y) / (point.x - pointBefore.x)) * 180 / Math.PI;
    if (deg || deg == 0) {
        LFBot.setAttribute("transform", `rotate(${deg + 90} ${point.x} ${point.y})`);
    }
    pointBefore.x = point.x;
    pointBefore.y = point.y;
}

function padzbotAnimation(padzbotPageW) {
    const {top, height} = padzbotPageW.getBoundingClientRect();
    var percent = ((top * -1) / (height));

    if (percent <= -0.3) {
        padzbotPageW.style.opacity = 0;
    } else if (percent >= -0.18) {
        padzbotPageW.style.opacity = 1;
    } else {
        padzbotPageW.style.opacity = (percent - -0.3) / (-0.18 - -0.3); 
    }

    if (percent <= -0.18) {
        padzbotTitle.classList.add("PTHidden");
    } else {
        padzbotTitle.classList.remove("PTHidden");
    }

    if (percent <= 0.1) {
        for (let l = 0; l < timgS.length; l++) {
            const element = timgS[l];
            element.classList.add("timgHidden");
        }
    } else { 
        for (let l = 0; l < timgS.length; l++) {
            const element = timgS[l];
            element.classList.remove("timgHidden");
        }
    } 

    if (percent <= 0.45) {
        XContainer.classList.add("timg", "XStatic");
        XContainer.style.top = "";
    } else if (percent >= 0.6) {
        XContainer.classList.remove("timg", "XStatic");
        
        XContainer.style.top = PADZBOTendPosition.top + "px";

    } else {
        if (!PADZBOTstartPosition.top || PADZBOTstartPosition.top > PADZBOTendPosition.top) {
            PADZBOTstartPosition.top = timgContainer.getBoundingClientRect().y;
        }

        XContainer.classList.remove("timg", "XStatic");
        
        XContainer.style.top = ((((percent - 0.45) / (0.6 - 0.45)) * (PADZBOTendPosition.top - PADZBOTstartPosition.top)) + PADZBOTstartPosition.top) + "px"; 

    }

    if (percent <= 0.6) {
        Xttl.style.transform = `rotateZ(${PADZBOTstartPosition.rttl}deg)`;
        Xttr.style.transform = `rotateZ(${PADZBOTstartPosition.rttr}deg)`;
        Xttr.style.marginTop = 0 + "px";
        XContainer.style.transform = "";
    } else if (percent >= 0.7) {
        Xttl.style.transform = `rotateZ(${PADZBOTendPosition.rttl}deg)`;
        Xttr.style.transform = `rotateZ(${PADZBOTendPosition.rttr}deg)`;
        Xttr.style.marginTop = PADZBOTstartPosition.tttr + "px";
        XContainer.style.transform = "translateX(-50%)";
    } else {
        Xttl.style.transform = `rotateZ(${((((percent - 0.6) / (0.7 - 0.6)) * (PADZBOTendPosition.rttl - PADZBOTstartPosition.rttl)) + PADZBOTstartPosition.rttl)}deg)`; 
        Xttr.style.transform = `rotateZ(${((((percent - 0.6) / (0.7 - 0.6)) * (PADZBOTendPosition.rttr - PADZBOTstartPosition.rttr)) + PADZBOTstartPosition.rttr)}deg)`; 
        Xttr.style.marginTop = ((((percent - 0.6) / (0.7 - 0.6)) * PADZBOTstartPosition.tttr)) + "px";
        XContainer.style.transform = `translateX(${-33 - (((percent - 0.6) / (0.7 - 0.6)) * (50 - 33))}%)`; 
    }

    if (percent <= 0.72) {
        XContainer.style.width = PADZBOTstartPosition.width + "px";
        Xttr.style.marginTop = PADZBOTstartPosition.tttr + "px";
    } else if (percent >= 0.78 ) {
        XContainer.style.width = PADZBOTendPosition.width + "px";
        Xttr.style.marginTop = PADZBOTendPosition.tttr + "px";
    } else {
        XContainer.style.width = ((((percent - 0.72) / (0.78 - 0.72)) * (PADZBOTendPosition.width - PADZBOTstartPosition.width)) + PADZBOTstartPosition.width) + "px"; 
        Xttr.style.marginTop = ((((percent - 0.72) / (0.78 - 0.72)) * (PADZBOTendPosition.tttr - PADZBOTstartPosition.tttr)) + PADZBOTstartPosition.tttr) + "px"; 
    }

    if (percent <= 0.8) {
        Xttr.style.position = "";
        Xttl.style.position = "";
        Xttr.style.marginBottom = "";
        Xttl.style.marginBottom = "";
        padzbotCloser.style.height = 0;
    } else if (percent >= 0.97) {
        Xttr.style.position = "fixed";
        Xttl.style.position = "fixed";
        Xttr.style.marginBottom = (-PADZBOTendPosition.mTop) + "px";
        Xttl.style.marginBottom = (PADZBOTendPosition.mTop) + "px";
        padzbotCloser.style.height = (wh * 1.2) + "px";
    } else {
        Xttr.style.position = "fixed";
        Xttl.style.position = "fixed";
        Xttr.style.marginBottom = (-((((percent - 0.8) / (0.97 - 0.8)) * (PADZBOTendPosition.mTop - PADZBOTstartPosition.mTop)) + PADZBOTstartPosition.mTop)) + "px"; 
        Xttl.style.marginBottom = (((((percent - 0.8) / (0.97 - 0.8)) * (PADZBOTendPosition.mTop - PADZBOTstartPosition.mTop)) + PADZBOTstartPosition.mTop)) + "px"; 
        padzbotCloser.style.height = (((percent - 0.8) / (0.97 - 0.8)) * wh * 1.2) + "px"; 
    }

}

function kenapaAnimation(kenapaPageW) {
    const {top, height} = kenapaPageW.getBoundingClientRect();
    var percent = ((top * -1) / (height));

    if (percent <= 0.4) {
        kenapaNeedMin = true;
    } else {
        kenapaNeedMin = false;
    }

    if (percent <= 0.05) {
        kenapaTitle.style.top = (KENAPAstartPosition.kTop) + "px";
        kenapaTitle.style.fontSize = (KENAPAstartPosition.ktF) + "px";
        kenapaTitle.style.position = "";
    } else if (percent >= 0.3){
        kenapaTitle.style.top = "";
        kenapaTitle.style.fontSize = (KENAPAendPosition.ktF) + "px";
        kenapaTitle.style.position = "fixed";
    } else {
        kenapaTitle.style.top = (((percent - 0.1) / (0.3 - 0.1) * (KENAPAendPosition.kTop - KENAPAstartPosition.kTop)) + KENAPAstartPosition.kTop) + "px"; 
        kenapaTitle.style.fontSize = (((percent - 0.1) / (0.3 - 0.1) * (KENAPAendPosition.ktF - KENAPAstartPosition.ktF)) + KENAPAstartPosition.ktF) + "px"; 
        kenapaTitle.style.position = "";
    }

    if (percent <= 0.35) {
        kenapaTitle.style.opacity = 1;
    } else if (percent >= 0.43){
        kenapaTitle.style.opacity = 0;
    } else {
        kenapaTitle.style.opacity = ((((percent - 0.35) / (0.43 - 0.35)) * -1)) + 1; 
    }

    if (percent <= 0.4) {
        kenapaSS.style.opacity = 0;
    } else if (percent >= 0.48){
        kenapaSS.style.opacity = 1;
    } else {
        kenapaSS.style.opacity = ((((percent - 0.4) / (0.48 - 0.4)) * 1)); 
    }

    if (percent <= 0.5) {
        moneyImg.classList.add("offset");
        moneyImg.classList.remove("main", "sideLeft");
    } else if (percent >= 0.63) {
        moneyImg.classList.add("sideLeft");
        moneyImg.classList.remove("main", "offset");
    } else {
        moneyImg.classList.add("main");
        moneyImg.classList.remove("offset", "sideLeft");
    }

    if (percent <= 0.65) {
        smileyImg.classList.add("offset");
        smileyImg.classList.remove("main", "sideRight");
    } else if (percent >= 0.72) {
        smileyImg.classList.add("sideRight");
        smileyImg.classList.remove("main", "offset");
    } else {
        smileyImg.classList.add("main");
        smileyImg.classList.remove("offset", "sideRight");
    }

    if (percent <= 0.74) {
        brainImg.classList.add("offset");
        brainImg.classList.remove("main", "sideCenter");
    } else if (percent >= 0.81) {
        brainImg.classList.add("sideCenter");
        brainImg.classList.remove("main", "offset");
    } else {
        brainImg.classList.add("main");
        brainImg.classList.remove("offset", "sideCenter");
    }

    if (percent <= 0.84) {
        for (let l = 0; l < KImg.length; l++) {
            const element = KImg[l];
            element.style.top = "";
            element.style.right = "";
            element.classList.remove("normalF");
        }
    } else {
        if (KMCPos.length <= 0 || KMCPos[0].top > wh) {
            for (let l = 0; l < KMCs.length; l++) {
                const element = KMCs[l];
                const bounding = element.getBoundingClientRect();
                KMCPos[l] = {top: bounding.top, right: bounding.right};
            }
        }
        for (let l = 0; l < KImg.length; l++) {
            const element = KImg[l];
            if (KMCPos[l].top <= wh) {
                element.style.top = KMCPos[l].top + "px";
                element.style.opacity = 1;
            } else {
                element.style.opacity = 0;
            }
            element.style.right = KMCPos[l].right + "px";
            element.classList.add("normalF");
        }
    }

    if (percent <= 0.85) {
        for (let l = 0; l < Kheading.length; l++) {
            const _heading = Kheading[l];
            _heading.classList.add("HHidden");
            _heading.classList.remove("HCome");
        }
    } else {
        for (let l = 0; l < Kheading.length; l++) {
            const _heading = Kheading[l];
            _heading.classList.remove("HHidden");
            _heading.classList.add("HCome");
        }
    }

    if (percent <= 0.85) {
        for (let l = 0; l < KText.length; l++) {
            const _text = KText[l];
            _text.classList.add("THidden");
            _text.classList.remove("TCome");
        }
    } else {
        for (let l = 0; l < KText.length; l++) {
            const _text = KText[l];
            _text.classList.remove("THidden");
            _text.classList.add("TCome");
        }
    }

    
    if (percent <= 0.95) {
        kenapaPageW.style.opacity = 1;
        kenapaSC.style.top = "";
        for (let l = 0; l < KImg.length; l++) {
            KImg[l].style.transition = "";
        }
    } else  if (percent >= 1) {
        kenapaPageW.style.opacity = 0;
        kenapaSC.style.top = KENAPAendPosition.endTop + "px";
        for (let l = 0; l < KImg.length; l++) {
            const element = KImg[l];
            element.style.transition = "none";
            if (KMCPos[l].top <= wh) {
                element.style.top = (KMCPos[l].top - KENAPAendPosition.kTop) + "px";
            }
        }
    } else {
        kenapaPageW.style.opacity = ((((percent - 0.95) / (1 - 0.95)) * -1)) + 1; 
        kenapaSC.style.top = (-((((percent - 0.95) / (1 - 0.95)) * (KENAPAendPosition.endTop - KENAPAstartPosition.endTop)) + KENAPAstartPosition.endTop)) + "px"; 
        for (let l = 0; l < KImg.length; l++) {
            const element = KImg[l];
            element.style.transition = "none";
            if (KMCPos[l].top <= wh) {
                element.style.top = (KMCPos[l].top - (((((percent - 0.95) / (1 - 0.95)) * (KENAPAendPosition.endTop - KENAPAstartPosition.endTop)) + KENAPAstartPosition.endTop))) + "px";
            }
        }
    }
}

function contactAnimation(contactPageW) {
    const {top, height} = contactPageW.getBoundingClientRect();
    var percent = ((top * -1) / (height));

    if (percent <= 0.15) {
        contactSC.classList.add("CSCHidden")
    } else {
        contactSC.classList.remove("CSCHidden")
    }
}

function animate() {
    if (pages[0].classList.contains("active")) {
        homeAnimation(pageWrapper[0]);
    }
    if (pages[1].classList.contains("active")) {
        robotikAnimation(pageWrapper[1]);
    }
    if (pages[2].classList.contains("active")) {
        padzbotAnimation(pageWrapper[2]);
    }
    if (pages[3].classList.contains("active")) {
        kenapaAnimation(pageWrapper[3]);
    }
    if (pages[4].classList.contains("active")) {
        contactAnimation(pageWrapper[4]);
    }
    requestAnimationFrame(animate);
}

animate();