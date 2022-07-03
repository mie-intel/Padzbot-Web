window.addEventListener("resize", ()=>{
    ww = window.innerWidth;
    wh = window.innerHeight;
    additional[2] = wh;
    additional[3] =  wh * 5;
    setPageWrapperDimension();
    pageWrappperHeight = getPageWrapperHeight();
    navWidth = parseInt(getComputedStyle(nav).width)
    gear.style.width = "";
    gear.style.right = "";
    width = getComputedStyle(gear).width;
    right = getComputedStyle(gear).right;
    parsedGearWidth = parseInt(width);
    parsedGearRight = parseInt(right);
    HOMEstartPosition = {width: parsedGearWidth, right: parsedGearRight}
    HOMEendPosition = {width: ww * 3, right: -(ww/1)}
    LFPathDistance = LFPath.getTotalLength()
    interval = LFPathDistance / 200;
    robotikTopPositionS = 0.05 * wh
    timgHeight = getComputedStyle(timgContainer).height;
    PADZBOTstartPosition = {mTop: 0, height: parseInt(timgHeight), width:  (wh + ww) * 0.1, top: undefined, rttl: 0, rttr: 0, tttr: 3};
    PADZBOTendPosition = {mTop: wh * 1.2, height: wh, top: (0.5 * wh) - (PADZBOTstartPosition.height / 2), width: ww, rttl: -64.65, rttr: 51.73, tttr: 17};
    XContainer.style.width = PADZBOTstartPosition.width + "px";
    XContainer.style.height = PADZBOTstartPosition.height + "px";
    KENAPAstartPosition = {kTop: -wh * 0.8, ktF: 0, endTop: 0};
    KENAPAendPosition = {kTop: 0, ktF: 0.12 * ww, endTop: wh * 0.04}
    KMCPos = [];
});