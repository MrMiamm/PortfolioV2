import Lenis from 'lenis';

let lenis;

export function initLenis() {
    if (!lenis) {
        lenis = new Lenis({
            smooth: 0.1,
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
        lenis = initLenis();
    }
    return lenis;
}
