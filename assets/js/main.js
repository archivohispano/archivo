// Theme Toggle
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
    
    // Remove trailing slash if present (except for root)
    if (currentPath.endsWith('/') && currentPath !== '/') {
        newPath = currentPath.slice(0, -1);
    }
    
    // Handle homepage special case
    if (newPath === '/' || newPath === '') {
        window.location.href = '/en/';
        return;
    }
    
    if (newPath === '/en' || newPath === '/en/') {
        window.location.href = '/';
        return;
    }
    
    // Specific mappings for texts that have different URLs
    const pathMappings = {
        // Homepage
        '/': '/en/',
        '/en': '/',
        
        // Albizu Campos
        '/es/textos/pedro-albizu-campos/concepto-de-la-raza': '/en/texts/pedro-albizu-campos/concept-of-race',
        '/en/texts/pedro-albizu-campos/concept-of-race': '/es/textos/pedro-albizu-campos/concepto-de-la-raza',
        '/es/autores/pedro-albizu-campos': '/en/autores/pedro-albizu-campos',
        '/en/autores/pedro-albizu-campos': '/es/autores/pedro-albizu-campos',
        '/es/textos/pedro-albizu-campos/dia-de-la-raza-1948': '/en/texts/pedro-albizu-campos/day-of-the-race-1948',
        '/en/texts/pedro-albizu-campos/day-of-the-race-1948': '/es/textos/pedro-albizu-campos/dia-de-la-raza-1948',
		'/es/textos/pedro-albizu-campos/oracion': '/en/texts/pedro-albizu-campos/prayer',
		'/en/texts/pedro-albizu-campos/prayer': '/es/textos/pedro-albizu-campos/oracion',
        
        // Juan Antonio Corretjer
        '/es/autores/juan-antonio-corretjer': '/en/autores/juan-antonio-corretjer',
        '/en/autores/juan-antonio-corretjer': '/es/autores/juan-antonio-corretjer',
        '/es/textos/juan-antonio-corretjer/prolegomenos-unidad-nacional': '/en/texts/juan-antonio-corretjer/prolegomena-national-unity',
        '/en/texts/juan-antonio-corretjer/prolegomena-national-unity': '/es/textos/juan-antonio-corretjer/prolegomenos-unidad-nacional',
        '/es/textos/juan-antonio-corretjer/el-heroe': '/en/texts/juan-antonio-corretjer/the-hero',
        '/en/texts/juan-antonio-corretjer/the-hero': '/es/textos/juan-antonio-corretjer/el-heroe',
        '/es/textos/juan-antonio-corretjer/puerto-rico-y-la-conferencia-mundial-del-comercio-y-el-empleo': '/en/texts/juan-antonio-corretjer/puerto-rico-y-la-conferencia-mundial-del-comercio-y-el-empleo',
        '/en/texts/juan-antonio-corretjer/puerto-rico-y-la-conferencia-mundial-del-comercio-y-el-empleo': '/es/textos/juan-antonio-corretjer/puerto-rico-y-la-conferencia-mundial-del-comercio-y-el-empleo',
        
        // Eugenio Font Suárez
        '/es/autores/eugenio-font-suarez': '/en/autores/eugenio-font-suarez',
        '/en/autores/eugenio-font-suarez': '/es/autores/eugenio-font-suarez',
        '/es/textos/eugenio-font-suarez/el-gran-dilema': '/en/texts/eugenio-font-suarez/the-great-dilemma',
        '/en/texts/eugenio-font-suarez/the-great-dilemma': '/es/textos/eugenio-font-suarez/el-gran-dilema',
        
        // General pages
        '/es/autores': '/en/autores',
        '/en/autores': '/es/autores',
        '/es/paises': '/en/paises',
        '/en/paises': '/es/paises',
        '/es/paises/puerto-rico': '/en/paises/puerto-rico',
        '/en/paises/puerto-rico': '/es/paises/puerto-rico'
    };  // <-- Added semicolon here
    
    // Check if current path has a specific mapping
    if (pathMappings[newPath]) {
        window.location.href = pathMappings[newPath];
        return;
    }
    
    // If no specific mapping found, show an alert
    alert('Translation not available for this page / Traducción no disponible para esta página');
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
    alert('Enlace copiado al portapapeles / Link copied to clipboard');
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
    
    // Basic search functionality
    const searchBox = document.querySelector('#searchBox');
    if (searchBox) {
        searchBox.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = e.target.value.toLowerCase().trim();
                if (query) {
                    // Basic search mapping
                    const searchMappings = {
                        'pedro albizu campos': '/es/autores/pedro-albizu-campos',
                        'albizu': '/es/autores/pedro-albizu-campos',
                        'concepto de la raza': '/es/textos/pedro-albizu-campos/concepto-de-la-raza',
                        'concept of race': '/en/texts/pedro-albizu-campos/concept-of-race',
                        'puerto rico': '/es/paises/puerto-rico'
                    };
                    
                    // Check for matches
                    for (let [term, url] of Object.entries(searchMappings)) {
                        if (query.includes(term) || term.includes(query)) {
                            window.location.href = url;
                            return;
                        }
                    }
                    
                    // No matches found
                    alert('No se encontraron resultados para: ' + query + '\nNo results found for: ' + query);
                } else {
                    alert('Por favor ingrese un término de búsqueda / Please enter a search term');
                }
            }
        });
        
        // Add placeholder text animation
        searchBox.setAttribute('placeholder', 'Buscar autores, textos, o temas... (presione Enter)');
    }
});
