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