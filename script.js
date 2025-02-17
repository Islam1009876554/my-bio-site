document.addEventListener('DOMContentLoaded', function() {
    // Массив с путями к фоновым изображениям
    const backgrounds = [
        'images/Beautiful place in Evade.jpeg',
        'images/фон evade четыре угла карта.jpeg',
        'images/Evade 🌱🌵.jpeg',
        'images/nothing _p.jpeg'
    ];

    // Создаем элементы изображений для фонов
    backgrounds.forEach((bgPath, index) => {
        const img = document.createElement('img');
        img.src = bgPath;
        img.className = `background-image ${index === 0 ? 'active' : ''}`;
        document.body.insertBefore(img, document.body.firstChild);
    });

    // Анимация смены фоновых изображений
    const backgroundElements = document.querySelectorAll('.background-image');
    let currentBg = 0;

    function changeBackground() {
        // Убираем активный класс у всех изображений
        backgroundElements.forEach(bg => bg.classList.remove('active'));
        
        // Добавляем активный класс текущему изображению
        backgroundElements[currentBg].classList.add('active');
        
        // Переходим к следующему изображению
        currentBg = (currentBg + 1) % backgroundElements.length;
    }

    // Запускаем смену фона каждые 5 секунд
    setInterval(changeBackground, 5000);
    
    // Показываем первый фон сразу
    changeBackground();

    // Добавляем проверку загрузки изображений
    backgroundElements.forEach(img => {
        img.addEventListener('load', function() {
            console.log('Изображение загружено:', this.src);
        });
        
        img.addEventListener('error', function() {
            console.error('Ошибка загрузки изображения:', this.src);
        });
    });

    // Добавляем отладку для изображения
    const robloxSkin = document.querySelector('.roblox-skin');
    
    if (robloxSkin) {
        robloxSkin.addEventListener('load', function() {
            console.log('Изображение успешно загружено');
        });
        
        robloxSkin.addEventListener('error', function() {
            console.log('Ошибка при загрузке изображения');
            console.log('Путь к изображению:', this.src);
        });
    }

    // Функция для проверки видимости элемента
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }

    // Функция для обработки появления элементов при прокрутке
    function handleScroll() {
        const profileSection = document.querySelector('.profile-section');
        if (profileSection && isElementInViewport(profileSection)) {
            requestAnimationFrame(() => {
                profileSection.classList.add('visible');
            });
            // Убираем обработчик после появления элемента
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Добавляем обработчик прокрутки
    window.addEventListener('scroll', handleScroll);
    // Проверяем видимость при загрузке страницы
    handleScroll();

    const loadingScreen = document.querySelector('.loading-screen');
    const siteContent = document.querySelector('.site-content');
    
    // Убедимся, что контент виден
    siteContent.style.display = 'block';
    
    // Сразу скрываем контент сайта
    siteContent.style.opacity = '0';
    siteContent.style.visibility = 'hidden';
    
    // Создаем структуру загрузочного экрана
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <div class="loading-gif-container">
                <img src="GIF/RobloxPlayerBeta_a1riT2YajD.gif" alt="Loading" class="loading-gif">
                <div class="cyber-lines"></div>
            </div>
            <div class="loading-text">Initializing System</div>
            <div class="progress-container">
                <div class="progress-bar">
                    <div class="progress-glow"></div>
                </div>
            </div>
            <div class="cyber-particles"></div>
        </div>
    `;

    // Создаем частицы
    const particlesContainer = document.querySelector('.cyber-particles');
    for(let i = 0; i < 50; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        resetParticle(particle);
        particlesContainer.appendChild(particle);
    }

    function resetParticle(particle) {
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = 0;
        particle.style.transform = 'translateY(0)';
        
        requestAnimationFrame(() => {
            particle.style.transition = 'opacity 1s ease, transform 1s ease';
            particle.style.opacity = Math.random() * 0.5 + 0.5;
            particle.style.transform = `translateY(${-Math.random() * 50}px)`;
        });

        setTimeout(() => {
            if (particle.parentElement) {
                resetParticle(particle);
            }
        }, Math.random() * 3000 + 1000);
    }

    const loadingText = document.querySelector('.loading-text');
    const messages = [
        "⌖ System Boot ⌖",
        "⌖ Loading Assets ⌖",
        "⌖ Initializing World ⌖",
        "⌖ Almost Ready ⌖"
    ];
    
    let messageIndex = 0;
    const textInterval = setInterval(() => {
        loadingText.style.opacity = 0;
        setTimeout(() => {
            loadingText.textContent = messages[messageIndex];
            loadingText.style.opacity = 1;
            messageIndex = (messageIndex + 1) % messages.length;
        }, 200);
    }, 2000);

    setTimeout(() => {
        clearInterval(textInterval);
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 3000);
});
