const filterImg = document.querySelector('.filterImg');

filterImg.addEventListener('click', function (e) {
    const overlay = document.querySelector('.overlay');
    e.stopPropagation();

    overlay.style.display = 'flex';
});
document.addEventListener('click', function (e) {
    const overlay = document.querySelector('.overlay');
    if (e.target.classList.contains('overlay')) overlay.style.display = 'none';
});
