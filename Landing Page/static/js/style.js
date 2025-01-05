function initModal() {
    const modal = document.getElementById('getStartedModal');
    const btn = document.querySelector('.cta-button');
    const closeBtn = document.querySelector('.close-modal');

    btn.addEventListener('click', () => {
        modal.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

function initProjectForm() {
    const form = document.getElementById('getStartedForm'); 
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        alert('Thank you for submitting your project!');

        form.reset();
    });
}

function initForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();                
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill out all required fields.');
            return;
        }

        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initModal();
    initProjectForm();
    initForm();
});