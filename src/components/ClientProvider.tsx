"use client";

import { checkAndAnimate } from "@/lib/animate";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import { useEffect } from "react";

export default function ClientProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        animationGlobales();
    }, []);

    function animationGlobales() {
        //Animation des h1
        gsap.registerPlugin(ScrollTrigger);
        (gsap.utils.toArray("h1") as HTMLElement[]).forEach((h1: HTMLElement) => {
            if (h1.id == "toph1"){
                gsap.from(h1, {
                    opacity: 0,
                    x: -10,
                    ease: "none"
                });
            } else{
                gsap.from(h1, {
                    scrollTrigger: {
                        trigger: h1,
                        scrub: true,
                        start: "top center",
                        end: "+=200 center"
                      },
                    opacity: 0,
                    x: -10,
                    ease: "none"
                });
            }
        });

        /*******************************************************/
        //Animations des vagues

        checkAndAnimate(".wave1", {
            duration: 2,
            repeat: -1,
            ease: "sine.inOut",
            yoyo: true,
            opacity: 0.5,
            attr: { d: "M0,0V46.29c47.79,28.2,103.59,48.17,158,42,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,63.67,583,82.05c69.27,18,138.3,14.88,209.4,3.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,8.29,1200,42.47V0Z" }
        });

        checkAndAnimate(".wave2", {
            duration: 4,
            repeat: -1,
            ease: "sine.inOut",
            yoyo: true,
            opacity: 0.3,
            attr: { d: "M0,0V25.81C13,46.92,47.64,76.86,67.69,92.05,119.41,121.27,185,111,244.58,91.58c31.15-10.15,70.09-36.07,99.67-49.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,19.42,98.6,41.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,91.35-16.69,129.13-34.28s75.16-29,116.92-33.05c59.73-5.85,123.28,12.88,178.9,28.84,30.2,8.66,59,6.17,87.09-7.5,32.43-10.89,58-36.93,70.65-49.24V0Z" }
        });

        checkAndAnimate(".wave3", {
            duration: 6,
            repeat: -1,
            ease: "sine.inOut",
            yoyo: true,
            attr: { d: "M0,0V15.63C149.93,49,324.09,61.32,485.83,32.57c43-7.64,94.23-10.12,137.61-16.46,69-8.63,142.48,22.24,185.56,45.4C857.93,77.22,916,85.24,981.2,80c96.53-7,192.46-45.71,268.8-84.81V0Z" }
        });
    }

    return <ReactLenis root>{children}</ReactLenis>;
}
