"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { checkAndAnimate } from "@/lib/animate";

export default function Footer() {

    useEffect(() => {
        checkAndAnimate("footer#contact > div", {
            scrollTrigger: {
              trigger: "#contact",
              scrub: true,
              start: "top-500 bottom",
              end: "bottom bottom",
            },
            opacity: 0,
            y: 150,
            ease: "none"
        });
    }, []);

    return (
        <footer id="contact">
        <div>
            <div>
                <h2>Me contacter</h2>
                <a href="mailto:william.cheron@etudiant.univ-rennes.fr">william.cheron@etudiant.univ-rennes.fr</a>
            </div>
            <div>
                <h2>Mes réseaux</h2>
                <nav>
                    <Link href="https://github.com/MrMiamm" target="_blank">
                        <Image src="/svg/github.svg" alt="Github" width={24} height={24} />
                    </Link>
                    <Link href="https://fr.linkedin.com/in/william-cheron-0b4a70269" target="_blank">
                        <Image src="/svg/linkedin.svg" alt="Linkedin" width={24} height={24} />
                    </Link>
                </nav>
            </div>
        </div>
        <p>© 2023 William CHERON</p>
        </footer>
    );
}