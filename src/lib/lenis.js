import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let lenis;

export function initLenis() {
    if (!lenis) {
        lenis = new Lenis({
            smooth: true,
            lerp: 0.1, // Ajustez selon vos besoins
        });

        // Synchroniser Lenis avec ScrollTrigger
        lenis.on('scroll', () => {
            ScrollTrigger.update();
        });

        // Boucle d'animation pour Lenis
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        //Vérifiez que le DOM est prêt avant de démarrer
        if (document.readyState === 'complete') {
            requestAnimationFrame(raf);
        } else {
            window.addEventListener('load', () => {
                requestAnimationFrame(raf);
            });
        }
    }
    return lenis;
}

export function getLenis() {
    if (!lenis) {
        lenis = initLenis();
    }
    return lenis;
}
