import { initializeForm } from './js/handlers/formHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    initializeForm(form, 'contact');
});


async function initEmailJS() {
    try {
        const response = await fetch("/.netlify/functions/get_email_config");
        const data = await response.json();

        if (data.publicKey && data.publicKey !== "Not Set") {
            emailjs.init(data.publicKey);
        } else {
            console.error("EMAILJS_PUBLIC_KEY is not set in Netlify.");
        }
    } catch (error) {
        console.error("Failed to fetch EmailJS public key:", error);
    }
}

document.addEventListener("DOMContentLoaded", initEmailJS);
