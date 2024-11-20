import Lenis from '@studio-freight/lenis';

let lenis;

export function initLenis() {
    if (!lenis) {
        lenis = new Lenis({
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wheelMultiplier: 0.8
        });

        // Boucle d'animation
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
        throw new Error('Lenis n\'a pas été initialisé. Appelez initLenis() d\'abord.');
    }
    return lenis;
}
