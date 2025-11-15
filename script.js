document.addEventListener('DOMContentLoaded', function () {
    // Навигация
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Мобильное меню
    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Активная ссылка при скролле
    window.addEventListener('scroll', function () {
        let current = '';
        const sections = document.querySelectorAll('section, [id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Скрытие/показ навигации при скролле
    let lastScrollTop = 0;
    const nav = document.querySelector('.cyber-nav');

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

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
        threshold: 0.01,
        rootMargin: '100px'
    });

    // Наблюдаем за всеми ленивыми изображениями
    lazyImages.forEach(img => {
        imageObserver.observe(img);

        // Добавляем обработчик загрузки для плавного появления
        img.addEventListener('load', function () {
            this.style.opacity = '1';
        });
    });

    // Предзагрузка критичных GIF
    const preloadDelay = window.innerWidth > 768 ? 1500 : 3000; // Позже на мобильных
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
    }, preloadDelay);

    // Оптимизация создания звезд
    const starsContainer = document.createDocumentFragment();
    const maxStars = window.innerWidth > 768 ? 20 : 10; // Меньше звезд на мобильных
    for (let i = 0; i < maxStars; i++) {
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

    const isMobile = window.innerWidth <= 768;
    const maxEmojis = isMobile ? 3 : 6; // Меньше эмодзи на мобильных
    const emojiInterval = isMobile ? 12000 : 8000; // Реже на мобильных

    function createFloatingEmoji() {
        if (document.querySelectorAll('.floating-emoji').length >= maxEmojis) return;

        const emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = 8 + Math.random() * 7 + 's';
        emojiContainer.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 12000);
    }

    setInterval(createFloatingEmoji, emojiInterval);

    // Полностью удаляем матричный дождь - удаляем элемент canvas из DOM
    const matrixCanvas = document.getElementById('matrix-rain');
    if (matrixCanvas) {
        matrixCanvas.remove();
    }

    // Оптимизация звуков
    const hoverSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgA');
    hoverSound.volume = 0.1;

    // Используем делегирование событий для звуков вместо множества слушателей
    document.body.addEventListener('mouseenter', function (e) {
        if (e.target.matches('.cyber-button, .y2k-list li')) {
            hoverSound.currentTime = 0;
            hoverSound.play().catch(() => { });
        }
    }, true);

    // Добавление класса glitch-image
    document.querySelectorAll('.roblox-skin').forEach(img => {
        img.parentElement.classList.add('glitch-image');
    });

    // Кнопка "Наверх"
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Прелоадер удален для ускорения загрузки сайта

    // Анимация появления элементов при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // Анимация навыков
                if (entry.target.classList.contains('skills-section')) {
                    setTimeout(() => {
                        animateSkills();
                    }, 300);
                }
            }
        });
    }, observerOptions);

    // Наблюдаем за элементами с классом fade-in
    document.querySelectorAll('.fade-in, .bottom-section, .interest-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Анимация навыков
    function animateSkills() {
        const skillFills = document.querySelectorAll('.skill-fill');
        skillFills.forEach(fill => {
            const skillLevel = fill.getAttribute('data-skill');
            fill.style.width = skillLevel + '%';
        });
    }

    // Переключатель эффектов
    const effectsToggle = document.getElementById('effectsToggle');
    let effectsEnabled = localStorage.getItem('effects') !== 'false';

    effectsToggle.classList.toggle('active', effectsEnabled);

    effectsToggle.addEventListener('click', function () {
        effectsEnabled = !effectsEnabled;
        localStorage.setItem('effects', effectsEnabled);
        effectsToggle.classList.toggle('active', effectsEnabled);

        // Включаем/выключаем анимации
        const animatedElements = document.querySelectorAll('.floating-emoji, .star, .skybox');
        animatedElements.forEach(el => {
            el.style.display = effectsEnabled ? 'block' : 'none';
        });

        // Включаем/выключаем CRT эффект
        const crtOverlay = document.querySelector('.crt-overlay');
        if (crtOverlay) {
            crtOverlay.style.opacity = effectsEnabled ? '0.1' : '0';
        }
    });

    // Применяем настройки эффектов при загрузке
    if (!effectsEnabled) {
        const animatedElements = document.querySelectorAll('.floating-emoji, .star, .skybox');
        animatedElements.forEach(el => {
            el.style.display = 'none';
        });

        const crtOverlay = document.querySelector('.crt-overlay');
        if (crtOverlay) {
            crtOverlay.style.opacity = '0';
        }
    }

    // Добавляем эффект печатной машинки для заголовков
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Анимация виртуальной мыши и печатания
    function startWelcomeAnimation() {
        const virtualMouse = document.getElementById('virtualMouse');
        const welcomeText = document.getElementById('welcomeText');
        const typingCursor = document.getElementById('typingCursor');
        const typingLine = document.getElementById('typingLine');
        const clickEffect = document.getElementById('clickEffect');
        const originalText = '✧ Welcome to My World ✧';
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`абвгдежзийклмнопрстуфхцчшщъыьэюя1234567890';

        if (!virtualMouse) return; // Проверка существования элемента

        // Создаем звук печатания
        const createTypingSound = () => {
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                oscillator.frequency.setValueAtTime(800 + Math.random() * 200, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            } catch (e) {
                // Игнорируем ошибки звука
            }
        };

        // Звук клика
        const createClickSound = () => {
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.05);
            } catch (e) {
                // Игнорируем ошибки звука
            }
        };

        // Этап 1: Появляются глитч символы
        setTimeout(() => {
            typingLine.classList.add('visible');
            typingCursor.classList.add('visible');

            // Генерируем случайные символы
            function generateGlitchText() {
                let glitchText = '';
                for (let i = 0; i < originalText.length; i++) {
                    if (originalText[i] === ' ') {
                        glitchText += ' ';
                    } else {
                        glitchText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    }
                }
                return glitchText;
            }

            // Анимация глитча
            let glitchCount = 0;
            const maxGlitches = 8;

            function animateGlitch() {
                if (glitchCount < maxGlitches) {
                    welcomeText.textContent = generateGlitchText();
                    welcomeText.classList.add('glitch-effect');
                    createTypingSound();
                    glitchCount++;
                    setTimeout(animateGlitch, 200);
                } else {
                    // Глитч закончился, ждем появления мыши
                    welcomeText.classList.remove('glitch-effect');
                }
            }

            animateGlitch();
        }, 800);

        // Этап 2: Показываем мышь после глитча
        setTimeout(() => {
            virtualMouse.classList.add('moving');
        }, 2500);

        // Этап 3: Мышь доехала, делаем клик для очистки
        setTimeout(() => {
            virtualMouse.classList.remove('moving');
            virtualMouse.classList.add('clicking');

            // Эффект клика
            clickEffect.classList.add('active');
            createClickSound();

            // Очищаем глитч текст
            welcomeText.textContent = '';
            welcomeText.classList.remove('glitch-effect');

            setTimeout(() => {
                clickEffect.classList.remove('active');
                virtualMouse.classList.remove('clicking');
                virtualMouse.classList.add('typing');
            }, 400);

        }, 4500);

        // Этап 4: Начинаем правильное печатание
        setTimeout(() => {

            // Печатаем правильный текст по буквам
            let i = 0;
            function typeChar() {
                if (i < originalText.length) {
                    welcomeText.textContent += originalText.charAt(i);

                    // Добавляем звук печатания
                    if (originalText.charAt(i).trim() !== '') {
                        createTypingSound();
                    }

                    i++;

                    // Умеренная скорость печатания
                    let delay = 80;
                    if (originalText.charAt(i - 1) === ' ') delay = 120;
                    if (originalText.charAt(i - 1) === '✧') delay = 180;

                    delay += Math.random() * 40; // Добавляем случайность

                    setTimeout(typeChar, delay);
                } else {
                    // Заканчиваем печатание
                    setTimeout(() => {
                        typingCursor.classList.remove('visible');
                        virtualMouse.classList.remove('typing');
                        virtualMouse.classList.add('disappearing');

                        // Добавляем финальное свечение к тексту
                        welcomeText.classList.add('final-glow');

                        // Убираем мышь
                        setTimeout(() => {
                            virtualMouse.style.display = 'none';
                        }, 1500);
                    }, 1200);
                }
            }

            typeChar();
        }, 5000);
    }

    // Запускаем анимацию приветствия
    const animationDelay = window.innerWidth > 768 ? 500 : 800;
    setTimeout(startWelcomeAnimation, animationDelay);
});