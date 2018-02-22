document.getElementById('openMenuButton').onclick = function () { openMenu() };
document.getElementById('closeMenuButton').onclick = function () { closeMenu() };

function openMenu() {
    var menu = document.getElementById('mobileMenu');
    var elem = menu.getElementsByTagName('li');

    document.getElementById('closeMenuButton').addEventListener("click", function() {
        clearInterval(intv);
    });

    var shift = 100;
    var opcty = 0;
   
    var intv = setInterval(frame, 5);
    function frame() {
        if (shift < 0 && opcty > 2.8) {
            menu.style.top = window.pageYOffset;
        } else if (shift >= 0) {
            menu.style.visibility = "visible";
            menu.style.top = shift + "vh";
            shift -= 4;
        } else if (opcty <= 2.8) {
            elem[0].style.opacity = opcty;
            elem[1].style.opacity = opcty - 0.3;
            elem[2].style.opacity = opcty - 0.6;
            elem[3].style.opacity = opcty - 0.9;
            elem[4].style.opacity = opcty - 1.2;
            elem[5].style.opacity = opcty - 1.5;
            elem[6].style.opacity = opcty - 1.8;
            opcty += 0.02;
        }
    }
}

function closeMenu() {
    var menu = document.getElementById('mobileMenu');
    var elem = menu.getElementsByTagName('li');    

    var shift = 0;
    var opcty = 2.8;

    window.scrollTo(0,0);
    menu.style.top = 0;

    var intv = setInterval(frame, 5);
    function frame() {
        if (shift > 100 && opcty < 0) {
            menu.style.visibility = "hidden";
            menu.style.top = 0;
            clearInterval(intv);
        } else if (opcty >= 0) {
            elem[0].style.opacity = opcty;
            elem[1].style.opacity = opcty - 0.3;
            elem[2].style.opacity = opcty - 0.6;
            elem[3].style.opacity = opcty - 0.9;
            elem[4].style.opacity = opcty - 1.2;
            elem[5].style.opacity = opcty - 1.5;
            elem[6].style.opacity = opcty - 1.8;
            opcty -= 0.02;
        } else if (shift <= 100) {
            menu.style.top = shift + "vh";
            shift += 4;
        }
    }
}