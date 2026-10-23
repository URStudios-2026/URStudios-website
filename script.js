const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.hidden-nav');

menuButton.addEventListener('click', function() {
    navigation.classList.toggle('menu-open');
}); 