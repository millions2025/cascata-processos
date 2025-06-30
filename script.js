// Funcionalidades JavaScript para a landing page

document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Navegação suave para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Slider de depoimentos
    const depoimentos = document.querySelectorAll('.depoimento-item');
    const navItems = document.querySelectorAll('.depoimento-nav-item');
    let currentIndex = 0;
    
    function showDepoimento(index) {
        depoimentos.forEach((depoimento, i) => {
            depoimento.style.transform = `translateX(${(i - index) * 100}%)`;
        });
        
        navItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }
    
    if (navItems.length > 0) {
        navItems.forEach((item, i) => {
            item.addEventListener('click', () => {
                currentIndex = i;
                showDepoimento(currentIndex);
            });
        });
        
        // Inicializar slider
        showDepoimento(currentIndex);
        
        // Auto-play do slider (opcional)
        setInterval(() => {
            currentIndex = (currentIndex + 1) % depoimentos.length;
            showDepoimento(currentIndex);
        }, 5000);
    }
    
    // Efeito de header fixo com mudança de estilo ao rolar
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Formulário de contato
    const form = document.getElementById('form-contato');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui seria implementada a lógica de envio do formulário
            // Como é uma landing page demonstrativa, apenas simulamos o envio
            
            alert('Obrigado pelo contato! Em breve retornaremos.');
            form.reset();
        });
    }
});
