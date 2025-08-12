// Carrusel rueda con animación horizontal y solo una habilidad visible

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carrusel-items.rueda-track');
    const items = document.querySelectorAll('.rueda-item');
    const prevBtn = document.querySelector('.carrusel-btn.prev');
    const nextBtn = document.querySelector('.carrusel-btn.next');
    let current = 0;
    let lastDirection = 'right';

    function animateItem(index, direction) {
        items[index].classList.remove('slide-in-left', 'slide-in-right');
        void items[index].offsetWidth; // Reflow para reiniciar animación
        if(direction === 'left') {
            items[index].classList.add('slide-in-left');
        } else {
            items[index].classList.add('slide-in-right');
        }
    }

    function updateCarrusel(direction = 'right') {
        // Oculta todos los items excepto el actual
        items.forEach((item, i) => {
            item.style.display = (i === current) ? 'flex' : 'none';
            if(i === current) animateItem(i, direction);
        });
        // Desplaza el track horizontalmente (opcional, solo si hay más de uno visible)
        track.style.transform = 'none';
        track.style.transition = 'none';
    }
    updateCarrusel();

    prevBtn.addEventListener('click', function() {
        lastDirection = 'left';
        current = (current - 1 + items.length) % items.length;
        updateCarrusel('left');
    });
    nextBtn.addEventListener('click', function() {
        lastDirection = 'right';
        current = (current + 1) % items.length;
        updateCarrusel('right');
    });

    window.addEventListener('resize', updateCarrusel);
});
