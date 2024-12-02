// Variables de los botones
const changeThemeBtn = document.getElementById('changeThemeBtn');
const activateSpookyModeBtn = document.getElementById('activateSpookyModeBtn');
const toggleLightsBtn = document.getElementById('toggleLightsBtn');
const closePopupBtn = document.getElementById('closePopupBtn');

// Función para cambiar entre tema claro y oscuro
changeThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('spooky');
});

// Función para activar el "modo espeluznante"
activateSpookyModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('spooky');
});

// Función para activar y desactivar las luces parpadeantes
toggleLightsBtn.addEventListener('click', () => {
    document.getElementById('halloweenDecorations').classList.toggle('blinkingLights');
});

// Función para cerrar el popup
closePopupBtn.addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
});

// Mostrar el popup al cargar la página
window.onload = () => {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
};
