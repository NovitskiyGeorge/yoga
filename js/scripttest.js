
// let age = document.getElementById('age');

// function showUser(surname, name) {
// alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }

// age.addEventListener('change', function(){
//     showUser.apply(age, ['Dimitriy', 'Komarov']);       
// });


let drink = 0;

function shoot(arrow) {
    console.log('Вы сделали выстрел...');

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
        }, 3000);
    });

    return promise;
}

function win() {
    console.log('Вы победили!');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('Вам купили пиво');
}

function giveMoney() {
    console.log('Вам заплатили!');
}

function loose() {
    console.log('Вы проиграли!');
}

shoot({})
        .then(mark => console.log('Вы попали в цель!'))
        .then(win)
        .catch(loose)