import Lenis from '@studio-freight/lenis';

let lenis;

export function initLenis() {
    if (!lenis) {
        lenis = new Lenis({
            smooth: true,
            // Configurez d'autres options ici si nécessaire
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
