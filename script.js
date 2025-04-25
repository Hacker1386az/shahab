// پخش صدای محیطی موقع لود صفحه
window.onload = () => {
    const ambientSound = document.getElementById('ambientSound');
    ambientSound.volume = 0.1; // صدای کم برای حس محیط
    ambientSound.play().catch(() => {
        // در صورت بلاک شدن پخش خودکار
        console.log('پخش خودکار غیرفعال است. دکمه فعال‌سازی صدا اضافه کنید.');
    });
    typeTitle();
    showWarning();
};

// افکت تایپینگ برای تیتر
function typeTitle() {
    const title = document.getElementById('title');
    const text = title.textContent;
    title.textContent = '';
    let i = 0;
    const typeSound = document.getElementById('typeSound');
    const alertSound = document.getElementById('alertSound');
    function type() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            typeSound.play();
            if (Math.random() < 0.1) title.classList.add('glitch');
            setTimeout(() => title.classList.remove('glitch'), 200);
            i++;
            setTimeout(type, 100);
        } else {
            alertSound.play(); // صدای آژیر پایان
        }
    }
    type();
}
// افکت تایپینگ برای کنسول
function typeConsole(message, elementId, callback) {
    const element = document.getElementById(elementId);
    element.innerHTML = '';
    let i = 0;
    const speed = 50;

    function type() {
        if (i < message.length) {
            element.innerHTML += message.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

// شبیه‌سازی هک
function checkPassword() {
    const input = document.getElementById('password-input').value;
    const result = document.getElementById('password-result');
    typeConsole(`Analyzing ID: ${input}...`, 'password-result', () => {
        typeConsole(`Access Denied! Security Level: HIGH`, 'password-result');
    });
}

// شبیه‌سازی رمزنگاری
function processEncryption() {
    const input = document.getElementById('encryption-input').value;
    typeConsole(`Encrypting ID: ${input}...`, 'encryption-result', () => {
        typeConsole(`Encrypted: ${btoa(input)}`, 'encryption-result');
    });
}

// شبیه‌سازی DDOS
function startDDOS() {
    const messages = [
        'Initializing DDOS Attack...',
        'Connecting to Instagram servers...',
        'Bypassing Firewall...',
        'Flooding with 10,000 packets/sec...',
        'Attack Successful! Server Down!'
    ];
    let i = 0;
    function showMessage() {
        if (i < messages.length) {
            typeConsole(messages[i], 'console-output', () => {
                i++;
                showMessage();
            });
        }
    }
    showMessage();
}

// شبیه‌سازی حملات دیگر
function simulateSQLInjection() {
    typeConsole('Injecting SQL Query: SELECT * FROM users WHERE 1=1; --', 'console-output');
}
function simulateXSSAttack() {
    typeConsole('Injecting XSS Script: <script>alert("Hacked!");</script>', 'console-output');
}
function simulatePhishingAttack() {
    typeConsole('Sending Phishing Email: Please login to Instagram...', 'console-output');
}
function simulateFirewallDetection() {
    typeConsole('Scanning Firewall: Ports 80, 443 open...', 'console-output');
}
function simulateIDSDetection() {
    typeConsole('IDS Alert: Intrusion Detected!', 'console-output');
}

// مدیریت مودال
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementsByClassName('closeBtn')[0];
const submitCommentBtn = document.getElementById('submitCommentBtn');
const commentsList = document.getElementById('commentsList');

openModalBtn.onclick = () => modal.style.display = 'block';
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = 'none';
};

submitCommentBtn.onclick = () => {
    const commentText = document.getElementById('commentText').value;
    if (commentText) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${new Date().toLocaleString('fa-IR')}:</strong> ${commentText}`;
        commentsList.appendChild(li);
        document.getElementById('commentText').value = '';
        modal.style.display = 'none';
    }
};

// نمودار با Chart.js
const ctx = document.getElementById('attackChart').getContext('2d');
const attackChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['DDOS', 'SQL Injection', 'XSS', 'Phishing', 'Firewall', 'IDS'],
        datasets: [{
            label: 'تعداد حملات',
            data: [10, 5, 8, 3, 6, 4],
            backgroundColor: '#0f0',
            borderColor: '#00f',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// افکت تایپینگ با پردازش
function typeConsole(message, elementId, callback) {
    const element = document.getElementById(elementId);
    element.innerHTML = '';
    element.classList.add('processing'); // اضافه کردن افکت پردازش
    let i = 0;
    const speed = 50;

    // نمایش کاراکترهای تصادفی قبل از متن اصلی
    let randomChars = '';
    const hexChars = '0123456789ABCDEF!@#$%^&*()';
    for (let j = 0; j < 20; j++) {
        randomChars += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
    }

    // نمایش کاراکترهای تصادفی
    element.innerHTML = randomChars;
    setTimeout(() => {
        element.innerHTML = '';
        element.classList.remove('processing'); // حذف افکت پردازش

        // تایپ متن اصلی
        function type() {
            if (i < message.length) {
                element.innerHTML += message.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }, 1000); // 1 ثانیه کاراکترهای تصادفی
}

// شبیه‌سازی هک
function checkPassword() {
    const input = document.getElementById('password-input').value;
    const result = document.getElementById('password-result');
    typeConsole(`Analyzing ID: ${input}...`, 'password-result', () => {
        setTimeout(() => {
            typeConsole(`Access Denied! Security Level: HIGH`, 'password-result');
        }, 500);
    });
}

// شبیه‌سازی رمزنگاری
function processEncryption() {
    const input = document.getElementById('encryption-input').value;
    typeConsole(`Encrypting ID: ${input}...`, 'encryption-result', () => {
        setTimeout(() => {
            typeConsole(`Encrypted: ${btoa(input)}`, 'encryption-result');
        }, 500);
    });
}
// پیام‌های تصادفی برای کنسول مانیتورینگ


// تابع برای نمایش پیام‌های تصادفی
function updateNetworkConsole() {
    const consoleElement = document.getElementById('network-console');
    const randomMessage = networkMessages[Math.floor(Math.random() * networkMessages.length)];
    
    // اضافه کردن پیام با افکت تایپینگ
    typeConsole(randomMessage + ` [${new Date().toLocaleTimeString('fa-IR')}]`, 'network-console', () => {
        // اسکرول به پایین
        consoleElement.scrollTop = consoleElement.scrollHeight;
    });
}

// شروع کنسول با پیام‌های دوره‌ای
setInterval(updateNetworkConsole, 3000); // هر 3 ثانیه یه پیام جدید

// استفاده از تابع typeConsole قبلی (برای اطمینان)
function typeConsole(message, elementId, callback) {
    const element = document.getElementById(elementId);
    element.classList.add('processing');
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
        element.classList.remove('processing');

        function type() {
            if (i < message.length) {
                element.innerHTML += message.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }, 500);
}


// پیام هشدار رندوم
function showWarning() {
    const warning = document.getElementById('warning-alert');
    setInterval(() => {
        warning.style.display = 'block';
        document.getElementById('alertSound').play();
        setTimeout(() => warning.style.display = 'none', 2000);
    }, 8000);
}

// افکت تایپینگ با گلیچ
function typeConsole(message, elementId, callback) {
    const element = document.getElementById(elementId);
    element.classList.add('processing', 'console-glitch');
    element.setAttribute('data-text', message);
    let i = 0;
    const speed = 50;
    const typeSound = document.getElementById('typeSound');

    let randomChars = '';
    const hexChars = '0123456789ABCDEF!@#$%^&*()';
    for (let j = 0; j < 20; j++) {
        randomChars += hexChars.charAt(Math.random() * hexChars.length);
    }

    element.innerHTML = randomChars;
    setTimeout(() => {
        element.innerHTML = '';
        element.classList.remove('processing');

        function type() {
            if (i < message.length) {
                element.innerHTML += message.charAt(i);
                typeSound.play();
                if (Math.random() < 0.1) element.classList.add('console-glitch');
                setTimeout(() => element.classList.remove('console-glitch'), 200);
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

// شبیه‌سازی هک
function checkPassword() {
    const input = document.getElementById('password-input').value;
    const progress = document.getElementById('hack-progress');
    const result = document.getElementById('password-result');
    progress.style.display = 'block';
    document.getElementById('alertSound').play();
    typeConsole(`Hacking ID: ${input}...`, 'password-result', () => {
        setTimeout(() => {
            typeConsole(`SYSTEM BREACHED! Access Level: CRITICAL`, 'password-result');
            progress.style.display = 'none';
        }, 500);
    });
}

// شبیه‌سازی رمزنگاری
function processEncryption() {
    const input = document.getElementById('encryption-input').value;
    const progress = document.getElementById('encrypt-progress');
    const result = document.getElementById('encryption-result');
    progress.style.display = 'block';
    document.getElementById('alertSound').play();
    typeConsole(`Encrypting ID: ${input}...`, 'encryption-result', () => {
        setTimeout(() => {
            typeConsole(`Encrypted: ${btoa(input)} - SECURITY COMPROMISED`, 'encryption-result');
            progress.style.display = 'none';
        }, 500);
    });
}

// پیام‌های کنسول خطرناک
const networkMessages = [
    'Warning: Unauthorized Access Detected!',
    'System Firewall Under Attack!',
    'Data Encryption Compromised!',
    'Intrusion Attempt: Port 8080!',
    'Payload Injection In Progress...',
    'Server Overload: 95% Capacity!',
    'Security Breach: Root Access Gained!',
    'Network Scan: 172.16.254.1!',
    'Critical Alert: System Shutdown Imminent!'
];

function updateNetworkConsole() {
    const consoleElement = document.getElementById('network-console');
    const randomMessage = networkMessages[Math.floor(Math.random() * networkMessages.length)];
    typeConsole(randomMessage + ` [${new Date().toLocaleTimeString('fa-IR')}]`, 'network-console', () => {
        consoleElement.scrollTop = consoleElement.scrollHeight;
        if (Math.random() < 0.2) document.getElementById('glitchSound').play();
    });
}

setInterval(updateNetworkConsole, 5000);

// گلیچ پیشرفته کل صفحه
function randomGlitch() {
    const body = document.body;
    const noise = document.getElementById('digital-noise');
    body.classList.add('glitch-page');
    noise.style.animationPlayState = 'running';
    document.getElementById('glitchSound').play();
    setTimeout(() => {
        body.classList.remove('glitch-page');
        noise.style.animationPlayState = 'paused';
    }, 300);
}

setInterval(randomGlitch, 6000);