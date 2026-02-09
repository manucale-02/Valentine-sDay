document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const container = document.querySelector('.container');
    const mainContent = document.querySelector('.main-content');

    const moveButton = () => {
        const bodyRect = document.body.getBoundingClientRect();
        const buttonRect = noBtn.getBoundingClientRect();

        const maxX = bodyRect.width - buttonRect.width;
        const maxY = bodyRect.height - buttonRect.height;

        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;

        noBtn.style.position = 'fixed'; // Usa fixed per muoversi su tutta la pagina
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    };

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveButton();
    });

    yesBtn.addEventListener('click', () => {
        // 1. Dissolvenza in uscita
        container.style.opacity = '0';
        
        // 2. Cambia il contenuto dopo la fine della transizione
        setTimeout(() => {
            mainContent.innerHTML = `
                <div class="success-message">
                    <h1>Sapevo che avresti detto di sì! Festeggiamo! 💖</h1>
                    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG05d2w2cjRjeDF2b254aDZpZzRmaDBxY3R2cDUzeXlqM3B1N2Z1eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wpoLqr5d5eB20/giphy.gif" alt="Celebration" class="gif">
                </div>
            `;
            // Cambia anche lo sfondo per la celebrazione
            document.body.style.backgroundColor = '#d1c4e9'; // Un viola chiaro

            // 3. Dissolvenza in entrata
            container.style.opacity = '1';
        }, 500); // Deve corrispondere alla durata della transizione in CSS
    });
});
