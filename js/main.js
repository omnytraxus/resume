const openButton = document.querySelector('.right-block__open-button');
const closeButton = document.querySelector('.left-block__close-button');
const leftBlock = document.querySelector('.left-block');
const rightBlock = document.querySelector('.right-block');
const buttons = document.querySelectorAll('.left-block__items_tab');
const closeTexts = document.querySelectorAll('.right-block__cart_text');

for (let button of buttons) {
    button.addEventListener('click', function () {
        buttons.forEach((i) => i.classList.remove('active'));
        this.classList.toggle('active');
    });
};

for (let closeText of closeTexts) {
    closeText.addEventListener('click', function () {
        if (leftBlock.style.width == '320px') {
            let position = 320;
            setInterval(() => {
                if (position !== 0) {
                    position -= 10;
                    leftBlock.style.width = `${position}px`;
                }
                clearInterval();
            }, 3);
        }
    });
};

const activeBlock = (button, block) => {
    document.querySelector(button).addEventListener('click', () => {
        document.querySelector('.active-block').classList.remove('active-block')
        document.querySelector(block).classList.toggle('active-block');
    })
};

activeBlock('.about-me-button', '.about-me');
activeBlock('.skills-button', '.skills');
activeBlock('.education-button', '.education');
activeBlock('.courses-button', '.courses');
activeBlock('.experience-button', '.experience');
activeBlock('.portfolio-button', '.portfolio');

openButton.addEventListener('click', () => {
    let position = 0;
    setInterval(() => {
        if (position !== 320) {
            position += 10;
            leftBlock.style.width = `${position}px`;
        }
        clearInterval();
    }, 3);
});

closeButton.addEventListener('click', () => {
    let position = 320;
    setInterval(() => {
        if (position !== 0) {
            position -= 10;
            leftBlock.style.width = `${position}px`;
        }
        clearInterval();
    }, 3);
});
