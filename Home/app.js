
const rotateCaret = () => {
    const links = document.querySelector('.click-link');
    const rotate = document.querySelector('.fas');
    links.addEventListener('click', () => {
        rotate.classList.toggle('rotateIcon');
    });
}

const ShowDropDown1 = () => {
    const linik1 = document.querySelector('.clicked-item');
    const Showbar = document.querySelector('.drop-down-one');
    linik1.addEventListener('click', () => {
        Showbar.classList.toggle('collapse-open');
    });
}

const app = () => {
    rotateCaret();
    ShowDropDown1();
}
app();
