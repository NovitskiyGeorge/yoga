/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/parts/calc.js":
/*!**************************!*\
  !*** ./js/parts/calc.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('input', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if(restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
        
    });

    restDays.addEventListener('input', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if(persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
        console.log(restDays.value);
        console.log(persons.value);
    });

    place.addEventListener('input', function() {
        if (restDays.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;


/***/ }),

/***/ "./js/parts/form.js":
/*!**************************!*\
  !*** ./js/parts/form.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        function postData(data){
            return new Promise(function(resolve,reject) {
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                resolve();
            } else if(request.readyState === 4 && request.status == 200) {
                resolve();
            } else {
                reject();
            }
            request.send(data);
        });
    });
    }
        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }
        postData({})
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);
    });
}

module.exports = form;

/***/ }),

/***/ "./js/parts/modal.js":
/*!***************************!*\
  !*** ./js/parts/modal.js ***!
  \***************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

function modal() {
    let more = document.querySelector('.more'),
    detail = document.querySelectorAll('.description-btn'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

more.addEventListener('click', function() {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';

});

detail.forEach(function(item) {
    item.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
});
}

module.exports = modal;

/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

function slider() {
    let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots  = document.querySelectorAll('.dot');

showSlides(slideIndex);    

function showSlides(n) {
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currenSlide(n) {
    showSlides(slideIndex = n);
}

prev.addEventListener('click', function() {
    plusSlides(-1);
});
next.addEventListener('click', function() {
    plusSlides(1);
});

dotsWrap.addEventListener('click', function(event) {
    for (let i = 0; i < dots.length +1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
            currenSlide(i);
        }
    }
});
}

module.exports = slider;

/***/ }),

/***/ "./js/parts/tabs.js":
/*!**************************!*\
  !*** ./js/parts/tabs.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

function tabs() {
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

function timer() {
    let deadLine = '2020-10-18';

    let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) -  Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = ('0' + t.hours).substr(-2);
            minutes.textContent = ('0' + t.minutes).substr(-2);
            seconds.textContent = ('0' + t.seconds).substr(-2);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
            
    };
    setClock('timer', deadLine);
}

module.exports = timer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let calc = __webpack_require__(/*! ./parts/calc */ "./js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form */ "./js/parts/form.js"),
        slider = __webpack_require__(/*! ./parts/slider */ "./js/parts/slider.js"),
        tabs = __webpack_require__(/*! ./parts/tabs */ "./js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer */ "./js/parts/timer.js"),
        modal = __webpack_require__(/*! ./parts/modal */ "./js/parts/modal.js");

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();


});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map