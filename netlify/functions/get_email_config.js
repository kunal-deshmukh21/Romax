exports.handler = async () => {
    return {
        statusCode: 200,  // Fix the typo in statusCode
        body: JSON.stringify({
            publicKey: process.env.EMAILJS_PUBLIC_KEY,
            serviceId: process.env.EMAILJS_SERVICE_ID,
            templateId: process.env.EMAILJS_TEMPLATE_ID,
            templates: {
                contact: process.env.EMAILJS_TEMPLATE_ID,
                demo: process.env.EMAILJS_TEMPLATE_ID,
                exchange: process.env.EMAILJS_TEMPLATE_ID
            }
        }),
    };
};
