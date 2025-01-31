'use strict';

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 9,
    autoplay: {
        delay: 2500,
    }
});

const navTabs = document.querySelectorAll('.author-tab');
const tabContents = document.querySelectorAll('.author-tabs__content');

navTabs.forEach(tab => {
    tab.addEventListener('click', function () {
        navTabs.forEach(item => item.classList.remove('author-tab--active'));
        this.classList.add('author-tab--active');
    });
});
navTabs.forEach((tab, index) => {
    tab.addEventListener('click', function () {
        navTabs.forEach(item => item.classList.remove('author-tab--active'));
        tabContents.forEach(content => content.classList.remove('author-tabs__content--active'));

        tab.classList.add('author-tab--active');
        tabContents[index].classList.add('author-tabs__content--active');
    });
});
