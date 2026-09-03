/* ============================================================
   AKIRA — Personal Page
   ============================================================ */
(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none)').matches;

    /* ============ ПРЕЛОАДЕР ============ */
    const preloader = document.getElementById('preloader');
    const preloaderFill = document.getElementById('preloaderFill');
    const preloaderStatus = document.getElementById('preloaderStatus');
    const statuses = [
        'Загрузка…',
        'Ещё чуть-чуть…',
        'Готовим сайт Akira…',
        'Готово. Добро пожаловать.'
    ];

    let progress = 0;
    const progressTimer = setInterval(() => {
        progress = Math.min(progress + Math.random() * 22, 96);
        preloaderFill.style.width = progress + '%';
        preloaderStatus.textContent = statuses[Math.min(Math.floor(progress / 28), statuses.length - 2)];
    }, 160);

    function finishPreloader() {
        clearInterval(progressTimer);
        preloaderFill.style.width = '100%';
        preloaderStatus.textContent = statuses[statuses.length - 1];
        setTimeout(() => {
            preloader.classList.add('done');
            document.body.classList.add('loaded');
            startCounters();
            startGlitchLoop();
        }, 420);
    }

    window.addEventListener('load', () => setTimeout(finishPreloader, 700));
    // Страховка, если load не сработал
    setTimeout(() => {
        if (!document.body.classList.contains('loaded')) finishPreloader();
    }, 4500);

    /* ============ ФОНОВЫЕ ЧАСТИЦЫ ============ */
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let particlesRunning = true;
    const PARTICLE_COLORS = ['255,43,214', '0,229,255', '139,92,246'];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function initParticles() {
        const count = Math.min(Math.floor(window.innerWidth / 22), 64);
        particles = Array.from({ length: count }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.8 + 0.4,
            vx: (Math.random() - 0.5) * 0.28,
            vy: (Math.random() - 0.5) * 0.28,
            color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
            alpha: Math.random() * 0.5 + 0.15,
            pulse: Math.random() * Math.PI * 2
        }));
    }

    function drawParticles() {
        if (!particlesRunning || prefersReducedMotion) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            p.pulse += 0.02;
            if (p.x < -10) p.x = canvas.width + 10;
            if (p.x > canvas.width + 10) p.x = -10;
            if (p.y < -10) p.y = canvas.height + 10;
            if (p.y > canvas.height + 10) p.y = -10;
            const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color},${a})`;
            ctx.shadowColor = `rgba(${p.color},0.8)`;
            ctx.shadowBlur = 6;
            ctx.fill();
        }
        ctx.shadowBlur = 0;
        requestAnimationFrame(drawParticles);
    }

    resizeCanvas();
    initParticles();
    if (!prefersReducedMotion) drawParticles();
    window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });
    document.addEventListener('visibilitychange', () => {
        particlesRunning = !document.hidden;
        if (particlesRunning && !prefersReducedMotion) drawParticles();
    });

    /* ============ НАВИГАЦИЯ ============ */
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('open');
        });
    });

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        nav.classList.toggle('scrolled', y > 40);
        if (y > lastScroll && y > 320 && !navMenu.classList.contains('open')) {
            nav.classList.add('hidden');
        } else {
            nav.classList.remove('hidden');
        }
        lastScroll = y;

        // Прогресс скролла
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        document.getElementById('scrollProgress').style.width = (max > 0 ? (y / max) * 100 : 0) + '%';

        // Кнопка наверх
        document.getElementById('toTop').classList.toggle('visible', y > 500);
    }, { passive: true });

    // Активная ссылка по секциям
    const sections = document.querySelectorAll('section[id]');
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => sectionObserver.observe(s));

    document.getElementById('toTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ============ ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ ============ */
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    /* ============ СЧЁТЧИКИ В HERO ============ */
    function animateCounter(el) {
        const target = parseInt(el.dataset.count, 10);
        const duration = 1400;
        const start = performance.now();
        function step(now) {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(target * eased);
            if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    let countersStarted = false;
    function startCounters() {
        if (countersStarted) return;
        countersStarted = true;
        document.querySelectorAll('.counter').forEach(animateCounter);
    }

    /* ============ ГЛИТЧ-ЗАГОЛОВОК ============ */
    const glitchEl = document.getElementById('glitchTitle');
    const GLITCH_CHARS = '!<>-_\\/[]{}—=+*^?#アキラ01';
    const originalText = glitchEl.dataset.text;

    function scrambleOnce() {
        glitchEl.classList.add('glitching');
        let frame = 0;
        const totalFrames = 14;
        const timer = setInterval(() => {
            frame++;
            glitchEl.textContent = originalText.split('').map((ch, i) => {
                if (ch === ' ') return ' ';
                if (i < (frame / totalFrames) * originalText.length) return ch;
                return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
            }).join('');
            if (frame >= totalFrames) {
                clearInterval(timer);
                glitchEl.textContent = originalText;
                glitchEl.classList.remove('glitching');
            }
        }, 40);
    }

    function startGlitchLoop() {
        if (prefersReducedMotion) return;
        setTimeout(scrambleOnce, 1200);
        setInterval(() => {
            if (!document.hidden && !document.body.classList.contains('no-effects')) scrambleOnce();
        }, 6000);
    }

    glitchEl.addEventListener('mouseenter', () => {
        if (!prefersReducedMotion) scrambleOnce();
    });

    // Глитч для футера при наведении
    document.querySelectorAll('.footer-glitch').forEach(el => {
        const text = el.dataset.text;
        el.addEventListener('mouseenter', () => {
            let frame = 0;
            const timer = setInterval(() => {
                frame++;
                el.textContent = text.split('').map((ch, i) => {
                    if (ch === ' ') return ' ';
                    if (i < (frame / 10) * text.length) return ch;
                    return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
                }).join('');
                if (frame >= 10) { clearInterval(timer); el.textContent = text; }
            }, 40);
        });
    });

    /* ============ TILT-КАРТОЧКИ ============ */
    if (!isTouch && !prefersReducedMotion) {
        document.querySelectorAll('.tilt').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
            });
        });
    }

    /* ============ МАГНИТНЫЕ КНОПКИ ============ */
    if (!isTouch && !prefersReducedMotion) {
        document.querySelectorAll('.magnetic').forEach(btn => {
            btn.addEventListener('mousemove', e => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    }

    /* ============ СВЕЧЕНИЕ ЗА КУРСОРОМ ============ */
    const cursorGlow = document.getElementById('cursorGlow');
    if (!isTouch && !prefersReducedMotion) {
        let gx = window.innerWidth / 2, gy = window.innerHeight / 3;
        let tx = gx, ty = gy;
        window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
        (function glowLoop() {
            gx += (tx - gx) * 0.08;
            gy += (ty - gy) * 0.08;
            cursorGlow.style.left = gx + 'px';
            cursorGlow.style.top = gy + 'px';
            requestAnimationFrame(glowLoop);
        })();
    } else {
        cursorGlow.style.display = 'none';
    }

    /* ============ ПЕРЕКЛЮЧАТЕЛЬ ЭФФЕКТОВ ============ */
    const effectsToggle = document.getElementById('effectsToggle');
    let effectsEnabled = localStorage.getItem('akira-effects') !== 'off';

    function applyEffectsState() {
        document.body.classList.toggle('no-effects', !effectsEnabled);
        effectsToggle.classList.toggle('active', effectsEnabled);
        particlesRunning = effectsEnabled && !document.hidden;
        if (particlesRunning && !prefersReducedMotion) drawParticles();
    }

    effectsToggle.addEventListener('click', () => {
        effectsEnabled = !effectsEnabled;
        localStorage.setItem('akira-effects', effectsEnabled ? 'on' : 'off');
        applyEffectsState();
    });

    applyEffectsState();

    /* ============ СТРАХОВКА ДЛЯ МЕДИА ============ */
    /* Если фото не найдено — показываем аккуратную заглушку */
    function imageFallback(img) {
        const ph = document.createElement('div');
        ph.className = 'media-placeholder' + (img.classList.contains('portrait-img') ? ' media-placeholder-portrait' : '');
        ph.innerHTML = '<span class="media-placeholder-icon">🖼️</span>' +
            '<span class="media-placeholder-text">Фото скоро появится</span>';
        img.replaceWith(ph);
    }

    document.querySelectorAll('.portrait-img, .welcome-photo, .feature-media img').forEach(img => {
        if (img.complete && img.naturalWidth === 0) {
            imageFallback(img);
        } else {
            img.addEventListener('error', () => imageFallback(img));
        }
    });

    /* Если видео-фон не найден — прячем его и затемнение */
    const bgVideo = document.getElementById('bgVideo');
    if (bgVideo) {
        const hideBgVideo = () => {
            bgVideo.style.display = 'none';
            const ov = document.getElementById('bgVideoOverlay');
            if (ov) ov.style.display = 'none';
        };
        const bgSource = bgVideo.querySelector('source');
        if (bgSource) bgSource.addEventListener('error', hideBgVideo);
        bgVideo.addEventListener('error', hideBgVideo);
    }
})();
