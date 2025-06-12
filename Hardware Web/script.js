// Open popup
document.querySelectorAll('[data-popup-target]').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const popup = document.querySelector(trigger.getAttribute('data-popup-target'));
        if (popup) popup.classList.add('open-popup');
    });
});

// Close popup via close button
document.querySelectorAll('.close-popup').forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup');
        if (popup) popup.classList.remove('open-popup');
    });
});

// Close popup via ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelectorAll('.popup.open-popup').forEach(popup => {
            popup.classList.remove('open-popup');
        });
    }
});

// Mouse pointer follower
const move = document.getElementById("move");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    move.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    
    }, {duration: 20, fill: "forwards"})
}
