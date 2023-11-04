function toggleModoOscuro() {
    const body = document.body;
    const modoOscuroBtn = document.getElementById('modo-oscuro-btn');

    if (body.getAttribute('data-bs-theme') === 'light') {
        body.setAttribute('data-bs-theme', 'dark');
        body.classList.add('modo-oscuro');
        modoOscuroBtn.textContent = 'Modo Claro';
    } else {
        body.setAttribute('data-bs-theme', 'light');
        body.classList.remove('modo-oscuro');
        modoOscuroBtn.textContent = 'Modo Oscuro';
    }
}