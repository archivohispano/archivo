javascript// Theme Toggle
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update button icons
    document.querySelectorAll('.theme-toggle, .control-btn, .mobile-text-controls button').forEach(btn => {
        if (btn.textContent === '🌙' || btn.textContent === '☀️') {
            btn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        }
    });
}

// Language Toggle
function toggleLanguage() {
    const currentPath = window.location.pathname;
    let newPath = currentPath;
    
    if (currentPath.includes('/es/')) {
        newPath = currentPath.replace('/es/', '/en/');
    } else if (currentPath.includes('/en/')) {
        newPath = currentPath.replace('/en/', '/es/');
    } else if (currentPath === '/') {
        // For homepage, just show a message for now
        alert('English version coming soon / Versión en inglés próximamente');
        return;
    }
    
    // For now, always attempt the redirect
    // In production, you might want to check if the page exists first
    window.location.href = newPath;
}

// Font size control (for text pages)
let currentFontSize = 1.1;
function changeFontSize(delta) {
    const textContent = document.querySelector('.text-content');
    if (textContent) {
        currentFontSize += delta * 0.1;
        currentFontSize = Math.max(0.8, Math.min(1.5, currentFontSize));
        textContent.style.fontSize = currentFontSize + 'rem';
    }
}

// Copy link
function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    alert('Enlace copiado al portapapeles');
}

// Download text
function downloadText() {
    const textContent = document.querySelector('.text-content');
    const title = document.querySelector('.text-title');
    const author = document.querySelector('.text-author');
    
    if (textContent && title && author) {
        const text = textContent.innerText;
        const metadata = `${title.innerText}\n${author.innerText}\n\n`;
        const blob = new Blob([metadata + text], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${title.innerText.toLowerCase().replace(/ /g, '-')}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelectorAll('.theme-toggle, .control-btn, .mobile-text-controls button').forEach(btn => {
            if (btn.textContent === '🌙') btn.textContent = '☀️';
        });
    }
    
    // Simple search functionality (would be replaced by Lunr.js in production)
    const searchBox = document.querySelector('#searchBox');
    if (searchBox) {
        searchBox.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            // In production, this would trigger Lunr.js search
            console.log('Searching for:', query);
        });
    }
});
