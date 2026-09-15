/* --- FORCE SCROLL TOP --- */
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.onload = function() {
    window.scrollTo(0, 0);
};

/* --- MODAL --- */
const modalBg = document.getElementById('project-bg');
const modalBody = document.querySelector('.modal-body');
const modalTitle = document.querySelector('.modal-title');
const closeBtn = document.querySelector('.modal-close-btn');

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').innerText;
        const details = card.getAttribute('data-details');
        
        modalTitle.innerText = title;
        modalBody.innerHTML = details;
        
        modalBg.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

const closeModal = () => {
    modalBg.classList.remove('active');
    document.body.style.overflow = 'auto';
};

closeBtn.addEventListener('click', closeModal);
modalBg.addEventListener('click', (e) => {
    if (e.target === modalBg) closeModal();
});

/* --- THEME TOGGLE --- */
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('theme-light');
    themeBtn.textContent = document.body.classList.contains('theme-light') ? '☀️' : '🌙';
});
