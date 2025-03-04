.site-content {
    position: relative;
    width: 100%;
    min-height: 100vh;
    z-index: 1;
    opacity: 1 !important;
    visibility: visible !important;
    display: block !important;
}

body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: transparent !important;
    color: #ffffff;
    font-family: 'Orbitron', sans-serif;
    text-align: center;
    position: relative;
    overflow-x: hidden;
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23ff00ff" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3" fill="%2300ffff"/></svg>') 12 12, auto;
    background: #000000 url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkE1QzFEMTY5QzU1MTFFNjk4RTBGRkY5Q0JCQUU4RTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkE1QzFEMTc5QzU1MTFFNjk4RTBGRkY5Q0JCQUU4RTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQTVDMUQxNDlDNTUxMUU2OThFMEZGRjlDQkJBRThFOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQTVDMUQxNTlDNTUxMUU2OThFMEZGRjlDQkJBRThFOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAAAEAAQAAAIEhI+pWAA7') !important;
    font-family: 'Orbitron', 'MS Sans Serif', 'Arial', sans-serif;
}

.main-content {
    position: relative;
    z-index: 1;
    background: transparent;
}

.header-gif-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 40px 0;
    width: 100%;
    position: relative;
    border: none;
    background: transparent;
}

.welcome-banner {
    position: absolute;
    top: 20px;
    z-index: 2;
    padding: 15px 40px;
    background: rgba(0, 0, 0, 0.7);
    border: 2px solid transparent;
    border-radius: 30px;
    box-shadow: 
        0 0 20px rgba(255, 0, 255, 0.4),
        0 0 40px rgba(0, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    animation: float 4s ease-in-out infinite;
}

.welcome-text-en {
    font-size: 2.5em;
    font-weight: bold;
    background: linear-gradient(45deg, #ff00ff, #00ffff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 
        2px 2px 4px rgba(255, 0, 255, 0.3),
        -2px -2px 4px rgba(0, 255, 255, 0.3);
    animation: textGlow 2s ease-in-out infinite alternate;
    letter-spacing: 2px;
}

.welcome-gif {
    width: 80%;
    max-width: 800px;
    border-radius: 20px;
    margin-top: 60px;
    box-shadow: 
        0 0 30px rgba(255, 0, 255, 0.3),
        0 0 60px rgba(0, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.welcome-gif::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background: linear-gradient(45deg, 
        rgba(255, 0, 255, 0.2), 
        rgba(0, 255, 255, 0.2));
    animation: borderGlow 3s linear infinite;
    z-index: 1;
    pointer-events: none;
}

.welcome-gif::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 20px;
    background: linear-gradient(45deg, 
        #ff00ff, 
        #00ffff, 
        #ff00ff);
    background-size: 200% 200%;
    animation: gradientBorder 3s linear infinite;
    z-index: -1;
}

/* Анимация плавного движения */
@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

/* Анимация свечения границ */
@keyframes borderGlow {
    0%, 100% {
        opacity: 0.5;
    }
    50% {
        opacity: 0.8;
    }
}

/* Анимация градиентной границы */
@keyframes gradientBorder {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

/* Эффект при наведении */
.welcome-gif:hover {
    transform: scale(1.02);
    box-shadow: 
        0 0 30px rgba(255, 0, 255, 0.6),
        0 0 60px rgba(0, 255, 255, 0.3);
}

.about-header {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
    position: relative;
    z-index: 2;
}

.header-text-container {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.about-text {
    font-size: 1.8em;
    color: #ff00ff;
    text-shadow: 
        0 0 5px #ff00ff,
        0 0 10px #ff00ff,
        0 0 15px #ff00ff;
    font-weight: 500;
}

.welcome-text {
    font-size: 2.5em;
    font-weight: 700;
    color: #fff;
    text-shadow: 
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 20px #ff00ff,
        0 0 30px #ff00ff,
        0 0 40px #ff00ff;
    letter-spacing: 2px;
}

.title-section {
    text-align: center;
    z-index: 5;
    position: relative;
    background: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 15px;
    backdrop-filter: blur(5px);
    margin: 20px 0;
}

h2 {
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 0 10px 0;
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23ff00ff" stroke-width="2"><path d="M17 3L12 7L7 3M7 21L12 17L17 21" stroke="%2300ffff"/></svg>') 12 12, text;
}

.sketches-row {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    max-width: 1600px;
    margin: 0 auto;
}

.profile-section {
    flex: 1;
    max-width: 600px;
    padding: 20px;
}

.sketches-container {
    flex: 1;
    margin: 0 10px;
    display: flex;
    overflow: hidden; /* Изменено с overflow-x на overflow */
    scroll-snap-type: x mandatory;
    gap: 20px;
    scrollbar-width: none; /* Для Firefox */
    -ms-overflow-style: none; /* Для IE и Edge */
}

/* Скрываем скроллбар для Chrome, Safari и Opera */
.sketches-container::-webkit-scrollbar {
    display: none;
}

.sketch-item {
    flex: 0 0 100%;
    scroll-snap-align: start;
    position: relative;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
    transition: all 0.3s ease;
    background: rgba(0, 0, 0, 0.8);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* Добавлено */
}

.character-sketch {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
}

/* Убираем hover эффекты, которые могут вызывать появление скроллбара */
.sketch-item:hover {
    transform: none;
}

.sketches-container:hover {
    overflow: hidden;
}

.avatar-gallery {
    flex: 0 0 400px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.anime-avatar {
    width: 100%;
    height: auto;
    border-radius: 15px;
    transition: all 0.3s ease;
    filter: drop-shadow(0 0 15px rgba(255, 0, 255, 0.3));
    animation: floatAnime 6s ease-in-out infinite;
}

.anime-avatar:nth-child(2) {
    animation-delay: -3s;
}

.anime-avatar:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 25px rgba(255, 0, 255, 0.6));
}

.content-section {
    flex: 0 0 600px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 15px;
    backdrop-filter: blur(5px);
    padding: 20px;
    border: none;
    margin: 0;
    position: relative;
    z-index: 2;
}

.y2k-text {
    font-size: 1.2em;
    line-height: 1.6;
    margin: 20px 0;
}

/* Базовый стиль для всех заголовков */
.y2k-subtitle {
    font-size: 1.4em;
    margin-bottom: 25px;
    color: #fff;
    text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
}

/* Удаляем все предыдущие стили с неоновым эффектом */
.y2k-subtitle.neon-text::before {
    display: none;
}

.y2k-subtitle.neon-text {
    font-size: 1.4em;
    color: #fff;
    text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
}

.y2k-list {
    list-style: none;
    padding: 0;
}

.y2k-list li {
    margin: 15px 0;
    padding: 15px;
    background: linear-gradient(45deg, rgba(255, 0, 255, 0.1), rgba(0, 255, 255, 0.1));
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.y2k-list li:hover {
    transform: translateX(10px);
    background: linear-gradient(45deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
}

.y2k-quote {
    font-style: italic;
    color: #00ffff;
    text-shadow: 0 0 10px #00ffff;
    margin: 30px 0;
    font-size: 1.2em;
}

@keyframes floatAnime {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-15px);
    }
}

.roblox-skin {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.2);
    transition: transform 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.profile-section.visible .roblox-skin {
    transform: scale(1);
}

img[src*="noFilter.webp"] {
    border: 2px solid red;
}

.skybox-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
}

.skybox {
    position: absolute;
    opacity: 0.4;
    filter: blur(2px);
    transition: transform 0.5s ease;
}

.skybox-1 {
    top: 5%;
    left: 5%;
    width: 150px;
    transform: rotate(-15deg);
    animation: float 8s infinite ease-in-out;
}

.skybox-2 {
    top: 15%;
    right: 10%;
    width: 120px;
    transform: rotate(20deg);
    animation: float 6s infinite ease-in-out reverse;
}

.skybox-3 {
    bottom: 10%;
    left: 15%;
    width: 100px;
    transform: rotate(-10deg);
    animation: float 7s infinite ease-in-out;
}

.skybox-4 {
    bottom: 20%;
    right: 15%;
    width: 130px;
    transform: rotate(15deg);
    animation: float 9s infinite ease-in-out reverse;
}

@keyframes float {
    0% {
        transform: translateY(0) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(5deg);
    }
    100% {
        transform: translateY(0) rotate(0deg);
    }
}

.skybox:hover {
    opacity: 0.6;
    filter: blur(1px);
    transform: scale(1.1);
}

/* Контейнер для фоновых изображений */
.background-images {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    pointer-events: none;
}

/* Стили для каждого фонового изображения */
.background-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 2s ease-in-out;
    z-index: -2;
}

.background-image.active {
    opacity: 0.5;
}

/* Добавляем постоянный полупрозрачный слой */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: -1;
    pointer-events: none;
}

.avatar-container:hover .roblox-skin {
    transform: scale(1.05);
}

.y2k-divider {
    height: 3px;
    background: linear-gradient(90deg, transparent, #ff00ff, #00ffff, transparent);
    margin: 40px auto;
    max-width: 80%;
    opacity: 0.7;
}

.cyber-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 30px 0;
}

.cyber-button {
    padding: 12px 25px;
    background: linear-gradient(45deg, rgba(255, 0, 255, 0.1), rgba(0, 255, 255, 0.1));
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    color: #fff;
    font-family: 'Orbitron', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;
}

.cyber-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
    background: linear-gradient(45deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
}

.cyber-button::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: rotate(45deg);
    animation: shine 3s infinite;
}

@keyframes shine {
    0% {
        transform: translateX(-100%) rotate(45deg);
    }
    100% {
        transform: translateX(100%) rotate(45deg);
    }
}

.glitch-text {
    position: relative;
    color: #fff;
    font-size: 1.5em;
    text-shadow: 
        2px 2px #ff00ff,
        -2px -2px #00ffff;
    animation: glitch 3s infinite;
}

@keyframes glitch {
    0% {
        text-shadow: 2px 2px #ff00ff, -2px -2px #00ffff;
    }
    25% {
        text-shadow: -2px 2px #ff00ff, 2px -2px #00ffff;
    }
    50% {
        text-shadow: 2px -2px #ff00ff, -2px 2px #00ffff;
    }
    75% {
        text-shadow: -2px -2px #ff00ff, 2px 2px #00ffff;
    }
    100% {
        text-shadow: 2px 2px #ff00ff, -2px -2px #00ffff;
    }
}

/* Добавляем эффект матрицы */
.matrix-rain {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    opacity: 0.1;
}

/* Анимированные эмодзи */
.floating-emoji {
    position: fixed;
    font-size: 1.5em;
    pointer-events: none;
    animation: floatEmoji 10s linear infinite;
    z-index: 1;
    opacity: 0.7;
}

/* Эффект глюча для изображений */
.glitch-image {
    position: relative;
    overflow: hidden;
}

.glitch-image:hover::before,
.glitch-image:hover::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: inherit;
    background-size: cover;
    animation: glitchEffect 0.5s infinite;
}

.glitch-image:hover::after {
    animation-delay: 0.1s;
}

/* Интерактивные элементы */
.y2k-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 0 30px rgba(255, 0, 255, 0.4);
}

/* Анимации */
@keyframes floatEmoji {
    0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(-100px) rotate(360deg);
        opacity: 0;
    }
}

@keyframes glitchEffect {
    0% {
        transform: translate(0);
        opacity: 1;
    }
    20% {
        transform: translate(-5px, 5px);
        opacity: 0.8;
    }
    40% {
        transform: translate(5px, -5px);
        opacity: 0.6;
    }
    60% {
        transform: translate(-5px);
        opacity: 0.4;
    }
    80% {
        transform: translate(5px);
        opacity: 0.2;
    }
    100% {
        transform: translate(0);
        opacity: 1;
    }
}

/* Добавляем hover эффекты для всех интерактивных элементов */
.y2k-list li:hover {
    transform: scale(1.05);
    background: linear-gradient(45deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
    cursor: pointer;
}

.y2k-quote:hover {
    animation: rainbow 3s linear infinite;
}

@keyframes rainbow {
    0% { color: #ff00ff; }
    25% { color: #00ffff; }
    50% { color: #ff00ff; }
    75% { color: #00ffff; }
    100% { color: #ff00ff; }
}

/* Мерцающие звезды на фоне */
.star {
    position: fixed;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 50%;
    animation: twinkle 1s infinite;
}

/* Пиксельная рамка */
.pixel-border {
    position: relative;
    padding: 3px;
}

.pixel-border::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(45deg, #ff00ff 25%, transparent 25%) -5px 0,
        linear-gradient(-45deg, #00ffff 25%, transparent 25%) -5px 0;
    background-size: 10px 10px;
    animation: borderAnimation 2s linear infinite;
}

/* Анимации */
@keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}

@keyframes holographic-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes holographic-shine {
    0% { transform: translateX(-100%) skewX(-15deg); }
    100% { transform: translateX(100%) skewX(-15deg); }
}

@keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* Неоновый текст с мерцанием */
.neon-text {
    color: #fff;
    text-shadow: 
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 20px #ff00ff,
        0 0 30px #ff00ff,
        0 0 40px #ff00ff;
    animation: neonFlicker 2s infinite;
}

@keyframes neonFlicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        text-shadow: 
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 20px #ff00ff,
            0 0 30px #ff00ff,
            0 0 40px #ff00ff,
            0 0 55px #ff00ff,
            0 0 70px #ff00ff;
    }
    20%, 24%, 55% {
        text-shadow: none;
    }
}

/* Стили для нижней секции */
.bottom-section {
    margin: 40px auto;
    padding: 20px;
    max-width: 1200px;
}

.gif-description-container {
    display: flex;
    gap: 30px;
    align-items: center;
    padding: 30px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
}

.gif-wrapper {
    width: 400px !important; /* Увеличенная ширина для вертикальных изображений */
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.gif-wrapper img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 15px;
}

@media (max-width: 768px) {
    .gif-wrapper {
        width: 100% !important;
        max-width: 300px;
    }
}

.aesthetic-gif {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.gif-wrapper:hover .aesthetic-gif {
    transform: scale(1.05);
}

.description-box {
    flex: 1;
    text-align: left;
    padding: 20px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 15px;
    backdrop-filter: blur(5px);
}

.description-text {
    margin: 20px 0;
    line-height: 1.6;
    font-size: 1.1em;
}

.y2k-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
}

.tag {
    padding: 5px 15px;
    background: linear-gradient(45deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
    border-radius: 20px;
    font-size: 0.9em;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
}

.tag:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(255, 0, 255, 0.4);
    background: linear-gradient(45deg, rgba(255, 0, 255, 0.3), rgba(0, 255, 255, 0.3));
}

/* Анимация появления */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 1s ease forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Голографические эффекты */
.holographic {
    position: relative;
    background: linear-gradient(
        135deg,
        rgba(255, 0, 255, 0.2),
        rgba(0, 255, 255, 0.2),
        rgba(255, 0, 255, 0.2)
    );
    background-size: 200% 200%;
    animation: holographic-shift 3s linear infinite;
    box-shadow: 
        0 0 10px rgba(255, 0, 255, 0.3),
        0 0 20px rgba(0, 255, 255, 0.2);
}

/* Неоновые рамки */
.neon-border {
    position: relative;
    border: 2px solid transparent;
    background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff) border-box;
    -webkit-mask: 
        linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
    mask: 
        linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    animation: gradient-shift 3s ease infinite;
    box-shadow: 
        0 0 10px rgba(255, 0, 255, 0.5),
        0 0 20px rgba(0, 255, 255, 0.5);
}

/* Пиксельные углы */
.pixel-corners {
    position: relative;
    clip-path: polygon(
        0 10px, 
        10px 10px, 
        10px 0, 
        calc(100% - 10px) 0, 
        calc(100% - 10px) 10px, 
        100% 10px, 
        100% calc(100% - 10px), 
        calc(100% - 10px) calc(100% - 10px), 
        calc(100% - 10px) 100%, 
        10px 100%, 
        10px calc(100% - 10px), 
        0 calc(100% - 10px)
    );
}

/* CRT эффект */
.crt-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
    );
    background-size: 100% 4px;
    z-index: 1000;
    pointer-events: none;
    opacity: 0.1;
}

/* Мерцающий текст */
.glowing-text {
    color: #fff;
    text-shadow: 
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 15px #ff00ff,
        0 0 20px #ff00ff,
        0 0 25px #ff00ff;
    animation: text-glow 2s ease-in-out infinite alternate;
}

/* Анимации */
@keyframes holographic-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes text-glow {
    from {
        text-shadow: 
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 15px #ff00ff,
            0 0 20px #ff00ff;
    }
    to {
        text-shadow: 
            0 0 10px #fff,
            0 0 20px #fff,
            0 0 30px #ff00ff,
            0 0 40px #ff00ff;
    }
}

/* Дополнительные hover эффекты */
.y2k-card:hover {
    transform: translateY(-5px);
    box-shadow: 
        0 0 30px rgba(255, 0, 255, 0.4),
        0 0 60px rgba(0, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.glowing-text:hover {
    animation: text-glow 1s ease-in-out infinite alternate;
}

/* Обновляем стили для верхних иконок */
.social-links-container {
    margin: 40px auto;
    padding: 20px;
    position: relative;
    z-index: 2;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 25px;
    backdrop-filter: blur(10px);
    box-shadow: 
        0 0 30px rgba(255, 0, 255, 0.3),
        0 0 60px rgba(0, 255, 255, 0.2);
}

.social-title {
    font-size: 2.5em;
    margin-bottom: 30px;
    background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 
        0 0 15px rgba(255, 0, 255, 0.8),
        0 0 30px rgba(0, 255, 255, 0.6);
    animation: titleGlow 3s infinite alternate;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 40px;
    padding: 20px;
}

.social-icon {
    width: 100px;
    height: 100px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.4s ease;
    border: 3px solid transparent;
    background: linear-gradient(45deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
    box-shadow: 
        0 0 20px rgba(255, 0, 255, 0.4),
        0 0 40px rgba(0, 255, 255, 0.3);
    animation: iconPulse 2s infinite alternate;
}

.social-icon::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 25px;
    background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff);
    z-index: -1;
    animation: borderGlow 3s infinite linear;
}

.social-icon img {
    width: 60px;
    height: 60px;
    filter: 
        brightness(1.3)
        drop-shadow(0 0 10px rgba(255, 255, 255, 0.9));
    transition: all 0.4s ease;
}

.social-hover-text {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-size: 1.2em;
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 
        0 0 10px #ff00ff,
        0 0 20px #00ffff,
        0 0 30px #ff00ff;
    opacity: 0;
    transition: all 0.4s ease;
}

/* Эффекты при наведении */
.social-icon:hover {
    transform: translateY(-10px) scale(1.2);
    background: linear-gradient(45deg, rgba(255, 0, 255, 0.3), rgba(0, 255, 255, 0.3));
    box-shadow: 
        0 0 30px rgba(255, 0, 255, 0.6),
        0 0 60px rgba(0, 255, 255, 0.4);
}

.social-icon:hover img {
    transform: scale(1.2) rotate(5deg);
    filter: 
        brightness(1.5)
        drop-shadow(0 0 15px rgba(255, 255, 255, 1));
}

.social-icon:hover .social-hover-text {
    opacity: 1;
    bottom: -35px;
    transform: translateX(-50%) scale(1.1);
}

/* Новые анимации */
@keyframes titleGlow {
    0% {
        text-shadow: 
            0 0 15px rgba(255, 0, 255, 0.8),
            0 0 30px rgba(0, 255, 255, 0.6);
    }
    100% {
        text-shadow: 
            0 0 30px rgba(255, 0, 255, 1),
            0 0 60px rgba(0, 255, 255, 0.8);
    }
}

@keyframes iconPulse {
    0% {
        box-shadow: 
            0 0 20px rgba(255, 0, 255, 0.4),
            0 0 40px rgba(0, 255, 255, 0.3);
    }
    100% {
        box-shadow: 
            0 0 30px rgba(255, 0, 255, 0.6),
            0 0 60px rgba(0, 255, 255, 0.4);
    }
}

@keyframes borderGlow {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
}

/* Добавляем медиа-запросы для адаптивности */
@media (max-width: 768px) {
    .social-links-container {
        padding: 20px;
        margin: 20px;
    }

    .social-title {
        font-size: 1.5em;
    }

    .social-icons {
        gap: 20px;
    }

    .social-icon {
        width: 70px;
        height: 70px;
    }

    .social-icon img {
        width: 35px;
        height: 35px;
    }

    .social-hover-text {
        font-size: 1em;
    }
}

/* Обновленные стили для секции интересов */
.interests-section {
    margin: 60px auto;
    padding: 40px;
    max-width: 1200px;
    background: rgba(0, 0, 0, 0.85);
    border-radius: 25px;
    backdrop-filter: blur(15px);
    box-shadow: 
        0 0 20px rgba(255, 0, 255, 0.15),
        0 0 40px rgba(0, 255, 255, 0.1);
}

.interests-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;
    margin: 40px 0;
}

.interest-item {
    padding: 35px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.interest-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
        rgba(255, 0, 255, 0.05), 
        rgba(0, 255, 255, 0.05));
    opacity: 0.5;
    transition: opacity 0.3s ease;
}

.interest-icon {
    font-size: 2.8em;
    display: block;
    margin-bottom: 20px;
    opacity: 0.9;
    animation: gentleFloat 4s ease-in-out infinite;
}

.interest-text {
    font-size: 1.4em;
    font-weight: 500;
    color: #fff;
    margin: 15px 0;
    letter-spacing: 1px;
    text-shadow: 
        0 0 8px rgba(255, 0, 255, 0.3),
        0 0 16px rgba(0, 255, 255, 0.2);
}

.interest-item p {
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.7;
    font-size: 1.05em;
    font-weight: 300;
    letter-spacing: 0.3px;
}

.favorite-quote {
    margin: 60px auto 30px;
    text-align: center;
    position: relative;
    padding: 40px;
}

.cyber-quote {
    font-size: 1.6em;
    font-style: italic;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 
        0 0 10px rgba(255, 0, 255, 0.2),
        0 0 20px rgba(0, 255, 255, 0.1);
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 1.6;
}

/* Более мягкие анимации */
@keyframes gentleFloat {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-8px);
    }
}

/* Эффекты при наведении */
.interest-item:hover {
    transform: translateY(-5px);
    background: rgba(0, 0, 0, 0.8);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 
        0 0 20px rgba(255, 0, 255, 0.15),
        0 0 40px rgba(0, 255, 255, 0.1);
}

.interest-item:hover::before {
    opacity: 0.7;
}

.interest-item:hover .interest-text {
    text-shadow: 
        0 0 10px rgba(255, 0, 255, 0.4),
        0 0 20px rgba(0, 255, 255, 0.3);
}

/* Медиа-запрос для мобильных устройств */
@media (max-width: 768px) {
    .interests-grid {
        grid-template-columns: 1fr;
        gap: 25px;
    }
    
    .interest-item {
        padding: 25px;
    }
    
    .cyber-quote {
        font-size: 1.3em;
    }
}

/* Стили для секции слогана */
.slogan-section {
    margin: 80px auto;
    padding: 60px 20px;
    position: relative;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 30px;
    max-width: 1000px;
    backdrop-filter: blur(10px);
}

.slogan-container {
    position: relative;
    text-align: center;
    padding: 40px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    overflow: hidden;
}

.slogan-text {
    font-size: 2.5em;
    font-weight: 300;
    color: #fff;
    line-height: 1.4;
    letter-spacing: 2px;
    position: relative;
    z-index: 2;
    font-style: italic;
    text-shadow: 
        0 0 10px rgba(255, 0, 255, 0.2),
        0 0 20px rgba(0, 255, 255, 0.1);
    animation: slogan-fade 3s ease-in-out infinite alternate;
}

.slogan-container::before,
.slogan-container::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(
        circle,
        rgba(255, 0, 255, 0.1) 0%,
        rgba(0, 255, 255, 0.1) 50%,
        transparent 70%
    );
    border-radius: 50%;
    animation: glow-move 8s infinite ease-in-out;
}

.slogan-container::before {
    top: -100px;
    left: -100px;
}

.slogan-container::after {
    bottom: -100px;
    right: -100px;
    animation-delay: -4s;
}

@keyframes slogan-fade {
    0% {
        opacity: 0.8;
        transform: scale(1);
    }
    100% {
        opacity: 1;
        transform: scale(1.02);
    }
}

@keyframes glow-move {
    0%, 100% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(30px, 30px);
    }
}

/* Медиа-запрос для мобильных устройств */
@media (max-width: 768px) {
    .slogan-section {
        margin: 40px auto;
        padding: 30px 15px;
    }

    .slogan-text {
        font-size: 1.8em;
    }
}

/* Медиа-запросы для мобильных устройств */
@media (max-width: 768px) {
    /* Основные контейнеры */
    .site-content {
        padding: 0 10px;
    }

    .main-content {
        padding: 10px;
    }

    /* Приветственный баннер */
    .welcome-banner {
        padding: 10px 20px;
        top: 10px;
    }

    .welcome-text-en {
        font-size: 1.5em;
    }

    .welcome-gif {
        width: 95%;
        margin-top: 40px;
    }

    /* Социальные иконки */
    .social-icons {
        gap: 15px;
        flex-wrap: wrap;
    }

    .social-icon {
        width: 70px;
        height: 70px;
    }

    .social-icon img {
        width: 40px;
        height: 40px;
    }

    /* Заголовки */
    .about-header {
        margin: 20px auto;
        padding: 10px;
    }

    .about-text {
        font-size: 1.4em;
    }

    .welcome-text {
        font-size: 1.8em;
    }

    /* Секции с GIF */
    .gif-description-container {
        flex-direction: column;
        gap: 20px;
    }

    .gif-wrapper {
        width: 100% !important;
    }

    .description-box {
        padding: 15px;
    }

    .y2k-subtitle {
        font-size: 1.3em;
    }

    .description-text {
        font-size: 1em;
    }

    /* Интересы */
    .interests-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .interest-item {
        padding: 20px;
    }

    .interest-icon {
        font-size: 2em;
    }

    .interest-text {
        font-size: 1.2em;
    }

    /* Слоган */
    .slogan-text {
        font-size: 1.8em;
        padding: 20px;
    }

    /* Тэги */
    .y2k-tags {
        flex-wrap: wrap;
    }

    .tag {
        font-size: 0.8em;
        padding: 3px 10px;
    }

    /* Фоновые элементы */
    .skybox {
        width: 80px;
    }

    /* Анимации */
    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-5px);
        }
    }
}

/* Дополнительные медиа-запросы для очень маленьких экранов */
@media (max-width: 480px) {
    .welcome-text-en {
        font-size: 1.2em;
    }

    .social-icon {
        width: 60px;
        height: 60px;
    }

    .social-icon img {
        width: 35px;
        height: 35px;
    }

    .about-text {
        font-size: 1.2em;
    }

    .welcome-text {
        font-size: 1.5em;
    }

    .y2k-subtitle {
        font-size: 1.1em;
    }

    .slogan-text {
        font-size: 1.5em;
    }
}

/* Исправление для вертикальных изображений на мобильных устройствах */
@media (max-width: 768px) {
    .vertical-image {
        height: 400px !important;
    }

    .vertical-image .aesthetic-gif {
        height: 100%;
        object-fit: contain;
    }
}

.character-quote {
    font-style: italic;
    color: #00ffff;
    text-shadow: 
        0 0 10px #00ffff,
        0 0 20px #00ffff,
        0 0 30px rgba(0, 255, 255, 0.5);
    margin: 30px 0;
    padding: 20px;
    background: linear-gradient(
        45deg,
        rgba(255, 0, 255, 0.1),
        rgba(0, 255, 255, 0.1)
    );
    border-left: 3px solid #ff00ff;
    border-right: 3px solid #00ffff;
    border-radius: 15px;
    font-size: 1.2em;
    letter-spacing: 2px;
    position: relative;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "liga" 0;
    white-space: pre;
}

.character-quote::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        45deg,
        rgba(255, 0, 255, 0.1),
        rgba(0, 255, 255, 0.1)
    );
    animation: quoteGlow 3s infinite alternate;
    z-index: -1;
}

.glitch-effect {
    position: relative;
    animation: textGlitch 3s infinite;
}

@keyframes quoteGlow {
    0% {
        opacity: 0.3;
    }
    100% {
        opacity: 0.7;
    }
}

@keyframes textGlitch {
    0% {
        text-shadow: 
            0.05em 0 0 #ff00ff,
            -0.05em -0.025em 0 #00ffff;
    }
    14% {
        text-shadow: 
            0.05em 0 0 #ff00ff,
            -0.05em -0.025em 0 #00ffff;
    }
    15% {
        text-shadow: 
            -0.05em -0.025em 0 #ff00ff,
            0.025em 0.025em 0 #00ffff;
    }
    49% {
        text-shadow: 
            -0.05em -0.025em 0 #ff00ff,
            0.025em 0.025em 0 #00ffff;
    }
    50% {
        text-shadow: 
            0.025em 0.05em 0 #ff00ff,
            0.05em 0 0 #00ffff;
    }
    99% {
        text-shadow: 
            0.025em 0.05em 0 #ff00ff,
            0.05em 0 0 #00ffff;
    }
    100% {
        text-shadow: 
            -0.025em 0 0 #ff00ff,
            -0.025em -0.025em 0 #00ffff;
    }
}

.y2k-subtitle.neon-text {
    font-size: 1.4em;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 20px #ff00ff,
        0 0 30px #ff00ff,
        0 0 40px #ff00ff,
        0 0 55px #ff00ff,
        0 0 70px #ff00ff;
    letter-spacing: 4px;
    margin-bottom: 25px;
    animation: neonFlicker 2s infinite alternate;
}

@keyframes neonFlicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        text-shadow: 
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 20px #ff00ff,
            0 0 30px #ff00ff,
            0 0 40px #ff00ff,
            0 0 55px #ff00ff,
            0 0 70px #ff00ff;
    }
    20%, 24%, 55% {
        text-shadow: none;
    }
}

/* Добавляем дополнительный слой свечения */
.bottom-section:has(.character-quote) .y2k-subtitle.neon-text::before {
    content: "✧ Meet Akira ✧";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #00ffff;
    text-shadow: 
        0 0 5px #00ffff,
        0 0 10px #00ffff,
        0 0 20px #00ffff;
    opacity: 0.5;
    animation: neonPulse 2s infinite alternate;
    z-index: -1;
}

@keyframes neonPulse {
    0% {
        opacity: 0.3;
        transform: scale(1.01);
    }
    100% {
        opacity: 0.7;
        transform: scale(0.99);
    }
}

/* Добавляем специальный класс для кавычек */
.japanese-quote::before {
    content: "「";
    display: inline;
}

.japanese-quote::after {
    content: "」";
    display: inline;
}
