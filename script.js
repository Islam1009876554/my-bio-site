document.addEventListener('DOMContentLoaded', function() {
    // Удаляем код, связанный с фоновыми изображениями
    // const backgrounds = [ ... ];
    // backgrounds.forEach((bgPath, index) => { ... });
    
    // Удаляем анимацию смены фоновых изображений
    // const backgroundElements = document.querySelectorAll('.background-image');
    // let currentBg = 0;
    // function changeBackground() { ... }
    // setInterval(changeBackground, 5000);
    // changeBackground();
    
    // Удаляем проверку загрузки изображений
    // backgroundElements.forEach(img => { ... });
    
    // Удаляем код, связанный с видимостью элемента
    // const profileSection = document.querySelector('.profile-section');
    // window.addEventListener('scroll', handleScroll);
    // handleScroll();

    // Оптимизация создания звезд
    const starsContainer = document.createDocumentFragment();
    for(let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
    document.body.appendChild(starsContainer);

    // Оптимизация плавающих эмодзи
    const emojis = ['✨', '💫', '🌟', '⭐', '🎮', '💝', '🌸', '🎀'];
    const emojiContainer = document.createElement('div');
    emojiContainer.className = 'emoji-container';
    document.body.appendChild(emojiContainer);
    
    function createFloatingEmoji() {
        // Создаем не более 20 эмодзи одновременно
        if (document.querySelectorAll('.floating-emoji').length > 20) return;
        
        const emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = 5 + Math.random() * 10 + 's';
        emojiContainer.appendChild(emoji);
        
        setTimeout(() => {
            emoji.remove();
        }, 15000);
    }

    // Уменьшаем частоту создания эмодзи
    setInterval(createFloatingEmoji, 5000);

    // Оптимизация матричного дождя
    const canvas = document.getElementById('matrix-rain');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drops = new Array(Math.floor(canvas.width / fontSize)).fill(1);
    }
    
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    let drops;
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    let lastFrameTime = 0;
    const fpsInterval = 1000/30; // 30 FPS вместо 20мс (50 FPS)
    
    function drawMatrix(timestamp) {
        if (timestamp - lastFrameTime < fpsInterval) {
            requestAnimationFrame(drawMatrix);
            return;
        }
        
        lastFrameTime = timestamp;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            // Рисуем только видимые символы
            if (drops[i] * fontSize < canvas.height + fontSize) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        requestAnimationFrame(drawMatrix);
    }
    
    requestAnimationFrame(drawMatrix);

    // Оптимизация звуков
    const hoverElements = document.querySelectorAll('.cyber-button, .y2k-list li');
    const hoverSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgA');
    hoverSound.volume = 0.1;
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0;
            hoverSound.play().catch(() => {});
        });
    });

    // Добавление класса glitch-image
    document.querySelectorAll('.roblox-skin').forEach(img => {
        img.parentElement.classList.add('glitch-image');
    });
});
