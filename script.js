// Função para animar a barra de progresso ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    animateProgressBar();
});

// Animar a barra de progresso
function animateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const percentage = document.getElementById('percentage');
    
    // Inicia com 0 e anima até 15.45%
    let currentWidth = 0;
    const targetWidth = 15.45;
    const duration = 1000; // 1 segundo
    const startTime = Date.now();
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const width = progress * targetWidth;
        
        progressBar.style.width = width + '%';
        percentage.textContent = width.toFixed(2) + '%';
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
}



// Adicionar efeito de scroll suave para links internos (se houver)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Adicionar efeito de hover aos botões
const donateButtons = document.querySelectorAll('.btn-donate');
donateButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Função para detectar se o elemento está visível na viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Adicionar animação de entrada aos elementos quando entram na viewport
window.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.box-highlight-amber, .box-highlight-cyan, .box-highlight-blue, .box-highlight-red, .box-highlight-gold');
    
    boxes.forEach(box => {
        if (isElementInViewport(box) && !box.classList.contains('animated')) {
            box.classList.add('animated');
            box.style.animation = 'fadeIn 0.6s ease-in-out';
        }
    });
});

// ===== Funcionalidade do FAQ =====
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('open');
        
        // Fechar todos os itens
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        
        // Abrir o item clicado se não estava aberto
        if (!isOpen) {
            item.classList.add('open');
        }
    });
});

// Adicionar animação CSS para fade in
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .btn-donate {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// Log para verificar se o script foi carregado
console.log('Landing Page Igreja Menino Jesus - Script carregado com sucesso!');
