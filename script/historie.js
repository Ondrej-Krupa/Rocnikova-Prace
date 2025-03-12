const bubble = document.getElementById('floating-bubble');
        const sections = document.querySelectorAll('section');

        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.querySelector('h2').textContent;
                }
            });

            bubble.innerText = 'Aktuální pozice: ' + current;
            bubble.style.display = 'block'; // Always show the bubble
        });