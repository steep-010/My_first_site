const showMoreButton = document.querySelector('#showMore');
const moreText = document.querySelector('#moreText');

if (showMoreButton && moreText) {
    showMoreButton.addEventListener('click', () => {
        moreText.classList.toggle('d-none');
        showMoreButton.textContent = moreText.classList.contains('d-none')
            ? 'Подробнее'
            : 'Скрыть';
    });
}

const themeButton = document.querySelector('#theme');

if (themeButton) {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeButton.textContent = document.body.classList.contains('dark-theme')
            ? 'Светлая тема'
            : 'Тёмная тема';
    });
}

const projects = [
    { title: 'Мой первый сайт', tech: 'HTML + CSS' },
    { title: 'Каталог курсов', tech: 'HTML + CSS + изображения' },
    { title: 'Форма обратной связи', tech: 'JavaScript validation' }
];

const list = document.querySelector('#projects');

if (list) {
    list.innerHTML = projects.map(project => `
        <article class="card p-3 mb-3">
            <h3>${project.title}</h3>
            <p class="mb-0">${project.tech}</p>
        </article>
    `).join('');
}

const aboutButton = document.querySelector('#aboutButton');

if (aboutButton) {
    aboutButton.addEventListener('click', () => {
        const modal = new bootstrap.Modal('#aboutModal');
        modal.show();
    });
}

const form = document.querySelector('#contactForm');
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const comment = document.querySelector('#comment');
const formMessage = document.querySelector('#formMessage');

if (form && nameInput && email && comment && formMessage) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!nameInput.value || !email.value.includes('@') || !comment.value) {
            formMessage.textContent = 'Заполни все поля и проверь email';
            formMessage.className = 'text-danger';
            return;
        }

        formMessage.textContent = 'Спасибо, ' + nameInput.value + '!';
        formMessage.className = 'text-success';
    });
}
