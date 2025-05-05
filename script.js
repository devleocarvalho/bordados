// Carrossel
document.addEventListener('DOMContentLoaded', function() {
    // Configuração do carrossel
    const carousel = document.querySelector('.gallery-carousel');
    if (carousel) {
        const container = carousel.querySelector('.carousel-container');
        const items = carousel.querySelectorAll('.carousel-item');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        
        let currentIndex = 0;
        const totalItems = items.length;
        
        function showItem(index) {
            items.forEach(item => item.classList.remove('active'));
            items[index].classList.add('active');
        }
        
        function nextItem() {
            currentIndex = (currentIndex + 1) % totalItems;
            showItem(currentIndex);
        }
        
        function prevItem() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            showItem(currentIndex);
        }
        
        nextBtn.addEventListener('click', nextItem);
        prevBtn.addEventListener('click', prevItem);
        
        showItem(currentIndex);
        
   }
    
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formMessage = document.getElementById('formMessage');
            formMessage.textContent = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
            formMessage.style.color = "green";
            contactForm.reset();
            
            // Simular envio//
            setTimeout(() => {
                formMessage.textContent = "";
            }, 5000);
        });
    }
});