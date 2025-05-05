document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os elementos do carrossel
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;

    // Função para mostrar o item atual
    function showItem(index) {
        // Remove a classe 'active' de todos os itens
        carouselItems.forEach((item) => {
            item.classList.remove('active');
        });

        // Adiciona a classe 'active' ao item atual
        carouselItems[index].classList.add('active');
    }

    // Função para avançar para o próximo item
    function nextItem() {
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        showItem(currentIndex);
    }

    // Função para voltar ao item anterior
    function prevItem() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
        showItem(currentIndex);
    }

    // Evento para o botão "Próximo"
    nextButton.addEventListener('click', nextItem);

    // Evento para o botão "Anterior"
    prevButton.addEventListener('click', prevItem);

    // Mostra o primeiro item ao carregar a página
    showItem(currentIndex);

    // Opcional: Navegação automática (slideshow)
    let autoPlay = setInterval(nextItem, 5000); // Avança a cada 5 segundos

    // Pausa o slideshow quando o mouse está sobre o carrossel
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(autoPlay);
    });

    // Retoma o slideshow quando o mouse sai do carrossel
    carouselContainer.addEventListener('mouseleave', () => {
        autoPlay = setInterval(nextItem, 5000);
    });
});