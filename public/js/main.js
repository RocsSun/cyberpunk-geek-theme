// ============================================
// 赛博朋克主题 - 主脚本
// ============================================

// 1. 阅读进度条
function initReadingProgress() {
    const progressBar = document.getElementById('readingProgress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// 2. 移动端汉堡菜单
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// 3. 代码块复制功能
// 代码块复制功能
function initCodeCopy() {
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach((pre) => {
        // 避免重复添加
        if (pre.querySelector('.code-block-tooltip')) return;
        
        const tooltip = document.createElement('div');
        tooltip.className = 'code-block-tooltip';
        
        // 获取语言
        const code = pre.querySelector('code');
        let lang = 'CODE';
        if (code) {
            // 从 class 获取 language-rust
            const match = code.className.match(/language-(\w+)/);
            if (match) {
                lang = match[1].toUpperCase();
            }
        }
        
        const langSpan = document.createElement('span');
        langSpan.className = 'code-lang';
        langSpan.textContent = lang;
        
        const copyBtn = document.createElement('button');
        copyBtn.className = 'code-copy-btn';
        copyBtn.textContent = '复制';
        copyBtn.addEventListener('click', async () => {
            const codeText = pre.querySelector('code')?.innerText || pre.innerText;
            await navigator.clipboard.writeText(codeText);
            copyBtn.textContent = '已复制！';
            setTimeout(() => {
                copyBtn.textContent = '复制';
            }, 2000);
        });
        
        tooltip.appendChild(langSpan);
        tooltip.appendChild(copyBtn);
        pre.appendChild(tooltip);
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initCodeCopy();
});

// 4. 故障闪烁效果
function initGlitchEffect() {
    setInterval(() => {
        const glitchOverlay = document.querySelector('.glitch-overlay');
        if (glitchOverlay && Math.random() < 0.05) {
            glitchOverlay.style.opacity = '0.8';
            setTimeout(() => {
                glitchOverlay.style.opacity = '1';
            }, 100);
            setTimeout(() => {
                glitchOverlay.style.opacity = '';
            }, 200);
        }
    }, 5000);
}

// 5. 初始化
document.addEventListener('DOMContentLoaded', () => {
    initReadingProgress();
    initMobileMenu();
    initCodeCopy();
    initGlitchEffect();
});