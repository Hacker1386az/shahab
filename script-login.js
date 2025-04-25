function typeTitle() {
    const title = document.getElementById('title');
    if (!title) return; // جلوگیری از خطا
    const text = title.textContent;
    title.textContent = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            if (Math.random() < 0.1) title.classList.add('glitch');
            setTimeout(() => title.classList.remove('glitch'), 200);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
}

function typeConsole(message, elementId, callback) {
    const element = document.getElementById(elementId);
    if (!element) return; // جلوگیری از خطا
    element.classList.add('console-glitch');
    element.setAttribute('data-text', message);
    let i = 0;
    const speed = 50;

    let randomChars = '';
    const hexChars = '0123456789ABCDEF!@#$%^&*()';
    for (let j = 0; j < 20; j++) {
        randomChars += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
    }

    element.innerHTML = randomChars;
    setTimeout(() => {
        element.innerHTML = '';
        function type() {
            if (i < message.length) {
                element.innerHTML += message.charAt(i);
                if (Math.random() < 0.1) element.classList.add('console-glitch');
                setTimeout(() => element.classList.remove('glitch'), 200);
                i++;
                setTimeout(type, speed);
            } else {
                element.classList.remove('console-glitch');
                if (callback) callback();
            }
        }
        type();
    }, 1000);
}

function checkLogin() {
    const input = document.getElementById('password-input');
    const result = document.getElementById('login-result');
    if (!input || !result) {
        console.error('عناصر پیدا نشدند!');
        return;
    }

    if (input.value.toLowerCase() === 'shahab') {
        typeConsole('پسورد صحیح بود. درحال ورود به سیستم هکینگ...', 'login-result', () => {
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    } else {
        typeConsole('اخطار:پسورد اشتباه است!', 'login-result', () => {
            document.body.classList.add('glitch-page');
            setTimeout(() => document.body.classList.remove('glitch-page'), 300);
        });
    }
}

function randomGlitch() {
    const body = document.body;
    const noise = document.getElementById('digital-noise');
    if (!noise) return; // جلوگیری از خطا
    body.classList.add('glitch-page');
    noise.style.animationPlayState = 'running';
    setTimeout(() => {
        body.classList.remove('glitch-page');
        noise.style.animationPlayState = 'paused';
    }, 300);
}

window.onload = () => {
    typeTitle();
    setInterval(randomGlitch, 6000);
};