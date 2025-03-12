import { gsap } from "gsap";

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        // const nombre = document.getElementById('nombre').value;
        // const correo = document.getElementById('correo').value;
        // const empresa = document.getElementById('empresa').value;

        // Basic validation (you can add more robust validation)
        // if (!nombre || !correo) {
        //     alert('Por favor, complete todos los campos requeridos.');
        //     return;
        // }

        // Here, you would typically send the data to your server
        // For this example, let's just log the data to the console
        // console.log('Form data:');
        // console.log('Nombre:', nombre);
        // console.log('Correo:', correo);
        // console.log('Empresa:', empresa);

        // Clear the form
        // form.reset();

        // Optional: Show a thank you message or redirect the user
        // alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    });

    // Simple GSAP animation example (fade in the hero section)
    gsap.from('.hero', { opacity: 0, duration: 1, y: -50 });
});