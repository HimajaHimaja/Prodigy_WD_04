

function toggleMode() {
    const root = document.documentElement;
    const toggleButton = document.querySelector('.toggle');
    const profileImage = document.querySelector('#about img');

    console.log('Current background color:', root.style.getPropertyValue('--background-color'));

    const isDarkMode = root.style.getPropertyValue('--background-color') === 'var(--background-color-dark)';

    if (isDarkMode) {
        console.log('Switching to light mode');
        root.style.setProperty('--background-color', 'var(--background-color-light)');
        profileImage.setAttribute('src', 'white-back-img.jpg');
    } else {
        console.log('Switching to dark mode');
        root.style.setProperty('--background-color', 'var(--background-color-dark)');
        profileImage.setAttribute('src', 'dark-back-img.jpg');
    }

    console.log('Profile image source:', profileImage.getAttribute('src'));
}



function toggleMode() {
    const root = document.documentElement;
    const toggleButton = document.querySelector('.toggle');
    const profileImage = document.getElementById('profile-image');

    const currentMode = root.getAttribute('data-theme');

    if (currentMode === 'dark') {
        root.setAttribute('data-theme', 'light');
        root.style.setProperty('--background-color', 'var(--background-color-light)');
        root.style.setProperty('--main-background-color', 'var(--main-background-color-light)');
        root.style.setProperty('--highlighting-color', 'var(--highlighting-color-light)');
        root.style.setProperty('--primary-heading-color', 'var(--primary-heading-color-light)');
        root.style.setProperty('--text-color', 'var(--text-color-light)');
        root.style.setProperty('--secondary-heading-color', 'var(--secondary-heading-color-light)');
        root.style.setProperty('--nav-background-color', 'var(--nav-background-color-light)');
        root.style.setProperty('--nav-text-color', 'var(--nav-text-color-light)');
        toggleButton.textContent = '☀️';
        // profileImage.setAttribute('src', 'images/white-back-img.jpg');
        profileImage.setAttribute('src', 'white-back-img.jpg');
    } else {
        root.setAttribute('data-theme', 'dark');
        root.style.setProperty('--background-color', 'var(--background-color-dark)');
        root.style.setProperty('--main-background-color', 'var(--main-background-color-dark)');
        root.style.setProperty('--highlighting-color', 'var(--highlighting-color-dark)');
        root.style.setProperty('--primary-heading-color', 'var(--primary-heading-color-dark)');
        root.style.setProperty('--text-color', 'var(--text-color-dark)');
        root.style.setProperty('--secondary-heading-color', 'var(--secondary-heading-color-dark)');
        root.style.setProperty('--nav-background-color', 'var(--nav-background-color-dark)');
        root.style.setProperty('--nav-text-color', 'var(--nav-text-color-dark)');
        toggleButton.textContent = '🌙 ';
        // profileImage.setAttribute('src', 'images/dark-back-img.jpg');
        profileImage.setAttribute('src', 'dark-back-img.jpg');
    }
}

