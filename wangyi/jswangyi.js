var login = document.getElementById('login');
var loginFlag = login.getElementsByClassName('login-flag')[0];
login.onmouseover = function () {
    loginFlag.style.display = 'block';
}
login.onmouseout = function () {
    loginFlag.style.display = 'none';
}


var banner = document.getElementById('banner');
var aIcon = banner.getElementsByClassName('iconfont');
var outer = banner.getElementsByClassName('outer')[0];
var gallery = outer.getElementsByClassName('gallery')[0];
var num = outer.getElementsByClassName('num')[0];
var agalleryList = gallery.getElementsByTagName('li');
var anumList = num.getElementsByTagName('li');
var index = i = 0;


function show(i) {
    index = i;
    for (var i = 0; i < agalleryList.length; i++) agalleryList[i].className = ''; {
        agalleryList[index].className = 'current';
    }
    for (var i = 0; i < anumList.length; i++) anumList[i].className = ''; {
        anumList[index].className = 'current';
    }
    banner.style.backgroundImage = 'url(img/' + (index + 1) + '.jpg)';
}

function addIndex() {
    index++;
    index >= anumList.length && (index = 0);
    show(index);
}

function autoPlay() {
    play = setInterval(function () {
        addIndex();
        banner.style.transition = 'all 2s';
        agalleryList[index].style.transition = 'all 2s';
    }, 2000)
}

function hoverObj(obj) {
    obj.onmouseover = function () {
        clearInterval(play);
    }
    obj.onmouseout = function () {
        autoPlay();
    }
}
hoverObj(outer);
hoverObj(aIcon[0]);
hoverObj(aIcon[1]);

for (var i = 0; i < anumList.length; i++) {
    anumList[i].index = i;
    anumList[i].onclick = function () {
        show(this.index);
    }
}
aIcon[0].onclick = function () {
    index--;
    index < 0 && (index = anumList.length - 1);
    show(index);
}
aIcon[1].onclick = function () {
    clearInterval(play);
    addIndex();
}

var banNew = document.getElementById('ban-new');
var aRoll = banNew.getElementsByClassName('roll');
var bill = document.getElementById('bill');
var abilllst = bill.getElementsByClassName('billlist');
var index = i = 0;

function hoverObj2(obj, name) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].index = i;
        obj[i].onmouseover = function () {
            var name1 = obj[this.index].getElementsByClassName(name)[0];
            name1.style.display = 'flex';
        }
        obj[i].onmouseout = function () {
            var name1 = obj[this.index].getElementsByClassName(name)[0];
            name1.style.display = 'none';
        }
    }
}
for (var i = 0; i < abilllst.length; i++) {
    abilllst[i].index = i;
    abilllst[i].onmouseover = function () {
        var aLi = abilllst[this.index].getElementsByTagName('li');
        hoverObj2(aLi, 'liicon');
    }
}
hoverObj2(aRoll, 'bottom');

var bkTop = document.getElementById('btn-top');
var clientHeight = document.documentElement.clientHeight;
var timer = null;
var istop = true;
window.onscroll = function () {
    var dtop = document.documentElement.scrollTop;
    if (dtop >= clientHeight) {
        bkTop.style.display = "block";
    } else {
        bkTop.style.display = "none";
    }
    if (!istop) {
        clearInterval(timer);
    }
    istop = false;
}
bkTop.onclick = function () {
    timer = setInterval(function () {
        var dtop = document.documentElement.scrollTop;
        var speed = Math.floor(-dtop / 10);
        document.documentElement.scrollTop = dtop + speed;
        istop = true;
        if (dtop == 0) {
            clearInterval(timer);
        }
    }, 30)
}












window.onload = autoPlay;