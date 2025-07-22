document.addEventListener('DOMContentLoaded', function() {
    // Оптимизация загрузки GIF изображений
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    // Создаем Intersection Observer для ленивой загрузки
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    // Наблюдаем за всеми ленивыми изображениями
    lazyImages.forEach(img => {
        imageObserver.observe(img);
        
        // Добавляем обработчик загрузки для плавного появления
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
    
    // Предзагрузка критичных GIF после загрузки страницы
    setTimeout(() => {
        const criticalGifs = [
            'GIF/ezgif.com-animated-gif-maker.gif',
            'GIF/picmix.com_2069612.gif',
            'GIF/picmix.com_2448415.gif'
        ];
        
        criticalGifs.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, 1000);

    // Оптимизация создания звезд - используем единый фрагмент DOM
    const starsContainer = document.createDocumentFragment();
    const maxStars = 25; // Уменьшаем количество звезд с 50 до 25
    for(let i = 0; i < maxStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
    document.body.appendChild(starsContainer);

    // Оптимизация плавающих эмодзи - уменьшаем количество и снижаем частоту появления
    const emojis = ['✨', '💫', '🌟', '⭐', '🎮', '💝', '🌸', '🎀'];
    const emojiContainer = document.createElement('div');
    emojiContainer.className = 'emoji-container';
    document.body.appendChild(emojiContainer);
    
    function createFloatingEmoji() {
        // Ограничиваем до 10 эмодзи вместо 20
        if (document.querySelectorAll('.floating-emoji').length > 10) return;
        
        const emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = 5 + Math.random() * 10 + 's';
        emojiContainer.appendChild(emoji);
        
        // Удаляем эмодзи после 10 секунд вместо 15
        setTimeout(() => {
            emoji.remove();
        }, 10000);
    }

    // Уменьшаем частоту создания эмодзи с 5 до 8 секунд
    setInterval(createFloatingEmoji, 8000);

    // Полностью удаляем матричный дождь - удаляем элемент canvas из DOM
    const matrixCanvas = document.getElementById('matrix-rain');
    if (matrixCanvas) {
        matrixCanvas.remove();
    }

    // Оптимизация звуков
    const hoverSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgA');
    hoverSound.volume = 0.1;
    
    // Используем делегирование событий для звуков вместо множества слушателей
    document.body.addEventListener('mouseenter', function(e) {
        if (e.target.matches('.cyber-button, .y2k-list li')) {
            hoverSound.currentTime = 0;
            hoverSound.play().catch(() => {});
        }
    }, true);

    // Добавление класса glitch-image
    document.querySelectorAll('.roblox-skin').forEach(img => {
        img.parentElement.classList.add('glitch-image');
    });

    // Добавляем слушатель прокрутки с оптимизацией через throttle
    let isScrolling = false;
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            isScrolling = true;
            window.requestAnimationFrame(function() {
                // Ваша логика для обработки прокрутки (если нужна)
                isScrolling = false;
            });
        }
    });
});