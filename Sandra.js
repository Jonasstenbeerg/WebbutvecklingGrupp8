const navDrop = () => {
    const burger = document.querySelector('.burger');
    const menuOptions = document.querySelector('.menuoptions')

    burger.addEventListener('click',() => {
        menuOptions.classList.toggle('menuoptions-active');
    })
}
navDrop();