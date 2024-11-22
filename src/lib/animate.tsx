import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Fonction pour vérifier si un élément existe et l'animer
export function checkAndAnimate(elementToCheck: any, animationFrom = {}, animationTo = {}) {
    const element = document.querySelector(elementToCheck);
    if (element != null) {
        gsap.registerPlugin(ScrollTrigger);
        if (Object.keys(animationFrom).length > 0) {
            gsap.from(elementToCheck, {
                ...animationFrom
            });
        }
        if (Object.keys(animationTo).length > 0) {
            gsap.to(elementToCheck, {
                ...animationTo
            });
        }
    } else {
        console.log("Element not found: ", elementToCheck);
    }
}