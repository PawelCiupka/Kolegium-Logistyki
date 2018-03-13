function scrollUpToElement(divName) { 
    var element = document.getElementById(divName);

    var intv = setInterval(frame, 5);
    var stopPos = element.offsetTop;
    var currentPos = window.pageYOffset;  
    var speed = 45;  
    
    function frame() {
        if(currentPos <= stopPos+2) {
            clearInterval(intv);
        } else {
            window.scrollTo(0, currentPos);
            currentPos -= ((currentPos - stopPos) / speed);
        }
    }
}

function scrollDownToElement(divName) { 
    var element = document.getElementById(divName);

    var intv = setInterval(frame, 5);
    var stopPos = element.offsetTop;
    var currentPos = window.pageYOffset;
    var speed = 45;  
    
    function frame() {
        if(stopPos <= currentPos+2) {
            clearInterval(intv);
        } else {
            window.scrollTo(0, currentPos);
            currentPos -= ((currentPos - stopPos) / speed);
        }
    }
}