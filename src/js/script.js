'use strict';

const body = document.querySelector('body');

const modal = document.querySelectorAll('.faq-accordion__content');

modal.addEventListener('click', function () {
    modal.classList.remove('hidden')
}) 