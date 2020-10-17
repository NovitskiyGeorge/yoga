
let age = document.getElementById('age');

function showUser(surname, name) {
alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

age.addEventListener('change', function(){
    showUser.apply(age, ['Dimitriy', 'Komarov']);       
});


