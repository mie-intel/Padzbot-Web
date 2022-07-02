const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const {target} = entry;
        const page = document.getElementsByClassName(target.id)[0];
        if (entry.isIntersecting) {
            page.classList.add("active");
        } else {
            page.classList.remove("active");
        }
    });
}, {
    root: null,
    threshold: 0
});

for (let l = 0; l < pageWrapper.length; l++) {
    scrollObserver.observe(pageWrapper[l]);
}

window.addEventListener("load", ()=>{
    var savedScroll = window.scrollY;
    var activatePage;
    for (let l = 0; l < pageWrappperHeight.length; l++) {
        const height = pageWrappperHeight[l];
        savedScroll -= height;
        if (savedScroll <= 0) {
            activatePage = l;
            break ;
        }
    }

    pages[activatePage].classList.add("active");

    if(savedScroll) {
        window.scrollTo(0, savedScroll);
    } else {
        window.scrollTo(0,0);
    }
})

window.addEventListener("scroll", ()=>{
    const activePages = document.getElementsByClassName("active");
    // Handle Smooth Scrolling
    for (let l = 0; l < activePages.length; l++) {
        const page = activePages[l];
        const pageIndex = pnToIndex(page.classList[0]);
        if (pageIndex == 0) {
            continue ;
        }

        var _scroll = 0;
        for (let i = 0; i < pageIndex; i++) {
            _scroll += pageWrappperHeight[i];
        }
        var scrolled = window.scrollY - _scroll;

        if (pageIndex == 3 && kenapaNeedMin) {
            scrolled -= additional[3];
        }

        if (scrolled < 0) {
            scrolled = 0;
        }

        page.scrollTop = scrolled;
    }
    
});