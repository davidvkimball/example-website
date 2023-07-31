// Dark/Light Mode Theme Toggle from david.qa 
document.addEventListener('DOMContentLoaded', function() {
    // Get system preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemPrefersDark = darkModeMediaQuery.matches;
    console.log(`System prefers dark: ${systemPrefersDark}`);

    // Get stored preference
    const storedPref = sessionStorage.getItem('theme');
    console.log(`Stored preference: ${storedPref}`);

    // Default to system pref
    let currentTheme = systemPrefersDark ? 'dark' : 'light';

    // If stored pref, use that
    if (storedPref) {
        currentTheme = storedPref;
    }
    console.log(`Current theme: ${currentTheme}`);

    // Toggle button
    const toggle = document.getElementById('theme-toggle');

    function setTheme() {
        const isDark = currentTheme === 'dark';

        if (isDark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }

        // Update image
        const imgSrc = isDark ? 'https://example.david.qa/images/dark.gif' : 'https://example.david.qa/images/light.gif';
        console.log(`Image source: ${imgSrc}`);
        toggle.src = imgSrc;
    }

    // Set initial theme
    setTheme();

    // Listen for system pref changes
    darkModeMediaQuery.addEventListener('change', e => {
        if (!storedPref) {
            // If no stored pref, follow system pref
            currentTheme = e.matches ? 'dark' : 'light'; 
            setTheme();
        } 
    });

    toggle.addEventListener('click', () => {
        // Switch theme
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Store preference
        sessionStorage.setItem('theme', currentTheme);

        // Set theme
        setTheme();
    });
});
