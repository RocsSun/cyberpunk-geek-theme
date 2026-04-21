// // 手电筒效果
// // (function () {
// //   const flashlight = document.getElementById("flashlight");
// //   if (!flashlight) return;
// //   let active = false;
// //   document.addEventListener("mousemove", (e) => {
// //     if (!active) {
// //       active = true;
// //       flashlight.classList.add("active");
// //     }
// //     flashlight.style.left = e.clientX + "px";
// //     flashlight.style.top = e.clientY + "px";
// //   });
// // })();

// // 阅读进度条
// (function() {
//     const progress = document.getElementById('readingProgress');
//     if (!progress) return;
    
//     function updateProgress() {
//         const winScroll = document.documentElement.scrollTop;
//         const height = document.documentElement.scrollHeight - window.innerHeight;
//         const scrolled = (winScroll / height) * 100;
//         progress.style.width = scrolled + '%';
//     }
    
//     window.addEventListener('scroll', updateProgress);
//     window.addEventListener('resize', updateProgress);
//     updateProgress(); // 初始化
// })();

// // 移动端菜单切换
// (function() {
//     const toggle = document.getElementById('navToggle');
//     const menu = document.querySelector('.nav-menu');
    
//     if (toggle && menu) {
//         toggle.addEventListener('click', function() {
//             menu.classList.toggle('active');
//             // 添加动画延迟索引
//             const links = menu.querySelectorAll('.nav-link');
//             links.forEach((link, index) => {
//                 link.style.setProperty('--index', index);
//             });
//         });
//     }
// })();

// // 代码碎片生成（简单随机位置，纯装饰）
// (function () {
//   const container = document.getElementById("code-snippets");
//   if (!container) return;
//   const snippets = [
//     '<span class="code-block">>_ system.online</span>',
//     '<span class="code-block">sudo reboot --force</span>',
//     '<span class="code-block">error: segmentation fault</span>',
//     '<span class="code-block">[OK] neon grid activated</span>',
//     '<span class="code-block">>>> hacking interface</span>',
//   ];
//   for (let i = 0; i < 12; i++) {
//     const el = document.createElement("div");
//     el.className = "code-snippet";
//     el.innerHTML = snippets[Math.floor(Math.random() * snippets.length)];
//     el.style.position = "absolute";
//     el.style.left = Math.random() * 100 + "%";
//     el.style.top = Math.random() * 100 + "%";
//     el.style.fontSize = 10 + Math.random() * 10 + "px";
//     el.style.opacity = 0.3 + Math.random() * 0.3;
//     el.style.whiteSpace = "nowrap";
//     el.style.fontFamily = "Share Tech Mono, monospace";
//     el.style.color = "#00f3ff";
//     el.style.pointerEvents = "none";
//     container.appendChild(el);
//   }
// })();

// // 为所有代码块添加悬浮提示和复制功能
// (function() {
//     const codeBlocks = document.querySelectorAll('pre');
    
//     codeBlocks.forEach((block) => {
//         // 解析语言 - 优先从 <code data-lang="xxx"> 获取
//         let language = 'code';
//         const codeElem = block.querySelector('code');
//         if (codeElem) {
//             // 方式1: 从 data-lang 属性获取
//             if (codeElem.dataset.lang) {
//                 language = codeElem.dataset.lang;
//             }
//             // 方式2: 从 class 中获取 (language-rust)
//             else {
//                 const langClass = Array.from(codeElem.classList).find(c => c.startsWith('language-'));
//                 if (langClass) {
//                     language = langClass.replace('language-', '');
//                 }
//             }
//         }
        
//         // 创建工具栏
//         const tooltip = document.createElement('div');
//         tooltip.className = 'code-block-tooltip';
        
//         const langSpan = document.createElement('span');
//         langSpan.className = 'code-lang';
//         langSpan.textContent = language;
//         tooltip.appendChild(langSpan);
        
//         const copyBtn = document.createElement('button');
//         copyBtn.className = 'code-copy-btn';
//         copyBtn.textContent = '复制';
//         tooltip.appendChild(copyBtn);
        
//         block.style.position = 'relative';
//         block.appendChild(tooltip);
        
//         // 复制功能
//         copyBtn.addEventListener('click', async () => {
//             const codeToCopy = block.innerText;
//             try {
//                 await navigator.clipboard.writeText(codeToCopy);
//                 const originalText = copyBtn.textContent;
//                 copyBtn.textContent = '已复制!';
//                 setTimeout(() => {
//                     copyBtn.textContent = originalText;
//                 }, 2000);
//             } catch (err) {
//                 console.error('复制失败:', err);
//                 copyBtn.textContent = '失败';
//                 setTimeout(() => {
//                     copyBtn.textContent = '复制';
//                 }, 2000);
//             }
//         });
//     });
// })();




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
        
        // 可选：汉堡菜单动画（X 形变换）
        const spans = navToggle.querySelectorAll('span');
        navMenu.classList.contains('active') ? openMenu(spans) : closeMenu(spans);
    });
}

function openMenu(spans) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
}

function closeMenu(spans) {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
}

// 3. 代码块复制功能（如果页面有代码块）
function initCodeCopy() {
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach((pre, index) => {
        // 创建工具栏容器
        const tooltip = document.createElement('div');
        tooltip.className = 'code-block-tooltip';
        
        // 获取语言（如果有 data-lang 属性）
        const code = pre.querySelector('code');
        const lang = code?.className.match(/language-(\w+)/)?.[1] || 'code';
        
        // 语言标签
        const langSpan = document.createElement('span');
        langSpan.className = 'code-lang';
        langSpan.textContent = lang.toUpperCase();
        
        // 复制按钮
        const copyBtn = document.createElement('button');
        copyBtn.className = 'code-copy-btn';
        copyBtn.textContent = '复制';
        copyBtn.addEventListener('click', async () => {
            const codeText = pre.querySelector('code')?.innerText || '';
            await navigator.clipboard.writeText(codeText);
            copyBtn.textContent = '已复制！';
            setTimeout(() => {
                copyBtn.textContent = '复制';
            }, 2000);
        });
        
        tooltip.appendChild(langSpan);
        tooltip.appendChild(copyBtn);
        pre.style.position = 'relative';
        pre.appendChild(tooltip);
    });
}

// 4. 动态网格背景（可选：跟随鼠标移动）
function initDynamicGrid() {
    const grid = document.querySelector('.cyber-grid');
    if (!grid) return;
    
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 20;
        const y = (e.clientY / window.innerHeight) * 20;
        grid.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// 5. 页面加载完成后添加故障闪烁效果（可选）
function initGlitchEffect() {
    // 随机添加故障效果
    setInterval(() => {
        const glitchOverlay = document.querySelector('.glitch-overlay');
        if (glitchOverlay && Math.random() < 0.05) { // 5% 概率触发
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

// 6. 初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
    initReadingProgress();
    initMobileMenu();
    initCodeCopy();
    // initDynamicGrid();   // 可选，与网格移动动画冲突时可关闭
    initGlitchEffect();
});