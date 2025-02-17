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
});
