import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let lenis;

export function initLenis() {
    if (!lenis) {
        lenis = new Lenis({
            smooth: 0.2,
        });

        //Synchroniser Lenis avec ScrollTrigger
        lenis.on('scroll', () => {
            ScrollTrigger.update();
        });

        //Boucle d'animation
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }
    return lenis;
}

export function getLenis() {
    if (!lenis) {
        lenis = initLenis();
    }
    return lenis;
}
