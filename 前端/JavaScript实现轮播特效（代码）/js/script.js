var timer = null,
    index = 0,
    pics = byId('banner').getElementsByTagName('div'),
    dots = byId('dots').getElementsByTagName('span'),
    size = pics.length,
    prev = byId('prev'),
    next = byId('next'),
    menuItems = byId('menu-content').getElementsByTagName('div'),
    subMenu = byId('sub-menu'),
    subItems = subMenu.getElementsByClassName('inner-box');

function byId(id) {
    return typeof(id) === 'string' ? document.getElementById(id) : id;
}

function stopAutoPlay() {
    if (timer) {
        clearInterval(timer);
    }
}

function startAutoPlay() {
    timer = setInterval(function() {

        changeImg();
    }, 3000)
}

function changeImg() {
    
    if (index >= size) {
        index = 0;
    };
    for (var i = 0; i < size; i++) {
        dots[i].className = '';
        pics[i].style.display = 'none';
    }
    dots[index].className = 'active';
    pics[index].style.display = 'block';
}

function slideImg() {
    var main = byId('main'),
        banner = byId('banner'),
        menuContent = byId('menu-content');
    main.onmouseover = function() {
        stopAutoPlay();
    }
    main.onmouseout = function() {
        startAutoPlay();
    }
    main.onmouseout();
    for(var i = 0; i < dots.length; i++) {
        dots[i].id = i;
        dots[i].onclick = function() {
            index = this.id;
            changeImg();
        }
    }
    next.onclick = function() {
        index++;
        changeImg();
    }
    prev.onclick = function() {
        index--;
        if (index < 0) {
            index = 2;
        }
        changeImg();
    }
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].setAttribute("data-index", i);
        menuItems[i].onmouseover = function() {
            subMenu.className = 'sub-menu';
            var idx = this.getAttribute("data-index");
            for (var j = 0; j < subItems.length; j++) {
                subItems[j].style.display = 'none';
                menuItems[j].style.background = 'none';
            }
            subItems[idx].style.display = 'block';
            menuItems[idx].style.background = 'rgba(0,0,0,0.1)';
        }
    }
    
    
    
    subMenu.onmouseover = function() {
        this.style.display = 'block';
    }
    subMenu.onmouseout = function() {
        this.style.display = 'none';
    }
    menuContent.onmouseover = function() {
        subMenu.style.display = 'block';
    }

}
slideImg();