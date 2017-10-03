// choise product category
function openStep(evt, products) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("products__col");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab__links");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active_link", "");
        }
        for (var i = 0; i < products.length; i++) {
        var classes = document.querySelectorAll("."+products).item(i);
            if (classes == null) {
                //if not current classes
            }
            else {classes.style.display = "inline-block";}
        }
        evt.currentTarget.className += " active_link";
}
///////////////////////////////////////////////////////////////////////////////////
// active nav__link
function activeLink(evt) {
    navLink = document.getElementsByClassName("nav__link");
    for (var i = 0; i < navLink.length; i++) {
        navLink[i].className = navLink[i].className.replace(" curr_link", "");
    }
    evt.currentTarget.className += " curr_link";
}
////////////////////////////////////////////////////////////////////////////////////
// onclick events on target currency, language and outside target
var currency = document.getElementsByClassName("current-currency")[0];
var currebcyList = document.getElementsByClassName("currency")[0];
var lang = document.getElementsByClassName("current-lang")[0];
var langList = document.getElementsByClassName("lang")[0];
function click() {
    document.addEventListener('click', function (evt) {
        var target = evt.target;
        if (currency.contains(target)) {
            var classes = currency.className.split(" ");
            var i = classes.indexOf("active_curr");
            if (i >= 0) {
                classes.splice(i, 1);
                currebcyList.style.height = "0px"
            }
            else {
                classes.push("active_curr");
                currebcyList.style.height = "65px"
            }
            currency.className = classes.join(" ");
            var classes2 = lang.className.split(" ");
            var j = classes2.indexOf("active_lang");
            if (j >= 0) {
                classes2.splice(j, 1);
            }
            lang.className = classes2.join(" ");
            langList.style.height = "0px";
        }
        else if (lang.contains(target)) {
            var classes2 = lang.className.split(" ");
            var j = classes2.indexOf("active_lang");
            if (j >= 0) {
                classes2.splice(j, 1);
                langList.style.height = "0px"
            }
            else {
                classes2.push("active_lang");
                langList.style.height = "45px"
            }
            lang.className = classes2.join(" ");
            var classes = currency.className.split(" ");
            var i = classes.indexOf("active_curr");
            if (i >= 0) {
                classes.splice(i, 1);
            }
            currency.className = classes.join(" ");
            currebcyList.style.height = "0px";
        }
        else if (currebcyList.contains(target) || langList.contains(target)) {
            return;
        }
        else {
            var classes = currency.className.split(" ");
            var i = classes.indexOf("active_curr");
            if (i >= 0) {
                classes.splice(i, 1);
            }
            currency.className = classes.join(" ");
            currebcyList.style.height = "0px";
            var classes2 = lang.className.split(" ");
            var j = classes2.indexOf("active_lang");
            if (j >= 0) {
                classes2.splice(j, 1);
            }
            lang.className = classes2.join(" ");
            langList.style.height = "0px";
        }
    })
}
/////////////////////////////////////////////////////////////////////////////////////////////
// choise current currency and language
function inner() {
    var langLink = document.getElementsByClassName("lang__link");
    var currebcyLink = document.getElementsByClassName("currency__link");
    for (var i = 0; i < currebcyLink.length; i++) {
        currebcyLink[i].onclick = function () {
            currency.innerText = this.innerText
        }
    }
    for (var i = 0; i < langLink.length; i++) {
        langLink[i].onclick = function () {
            lang.innerText = this.innerText
        }
    }
}
