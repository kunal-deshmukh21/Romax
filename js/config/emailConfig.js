export let emailConfig = {};

fetch('/.netlify/functions/get_email_config')
    .then(response => response.json())
    .then(data => {
        emailConfig = data;
    })
    .catch(error => console.error("Error loading email config", error));
