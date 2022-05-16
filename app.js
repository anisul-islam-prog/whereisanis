const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions() {
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sctions Active 
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //resmove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
        const themeIcon = document.getElementById('iconBtn');
        $(themeIcon).toggleClass('fa-sun fa-moon');
        // themeIcon.toggleClass('fa-sun-bright ');
    })
}

PageTransitions();

var isLast = function (word) {
    return $(word).next().length > 0 ? false : true;
}

var getNext = function (word) {
    return $(word).next();
}

var getVisible = function () {
    return document.getElementsByClassName('is-visible');
}

var getFirst = function () {
    var node = $('.words-wrapper').children().first();
    return node;
}

var switchWords = function (current, next) {
    $(current).removeClass('is-visible').addClass('is-hidden');
    $(next).removeClass('is-hidden').addClass('is-visible');
}

var getStarted = function () {
    //We start by getting the visible element and its sibling
    var first = getVisible();
    var next = getNext(first);

    //If our element has a sibling, it's not the last of the list. We switch the classes
    if (next.length !== 0) {
        switchWords(first, next);
    } else {

        //The element is the last of the list. We remove the visible class of the current element
        $(first).removeClass('is-visible').addClass('is-hidden');

        //And we get the first element of the list, and we give it the visible class. And it starts again.
        var newEl = getFirst();
        $(newEl).removeClass('is-hidden').addClass('is-visible');
    }

}

var init = function () {
    setInterval(function () { getStarted() }, 2000);
}

init();