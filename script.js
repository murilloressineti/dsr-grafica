document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', (event) => {
        menuToggle.classList.add('hidden');
        menu.classList.toggle('active');
        event.stopPropagation();
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target)) {
            menu.classList.remove('active');
            menuToggle.classList.remove('hidden');
        }
    });

    menu.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const targetId = event.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            } else {
                console.error('Elemento alvo não encontrado:', targetId);
            }
        }
    });

    const form = document.getElementById("my-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        alert("Obrigado pela mensagem!");

        form.submit();
    });
});
