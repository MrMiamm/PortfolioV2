"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";

export default function Header() {
    return (
        <>
        <input type="checkbox" id="toggle" />
        <header>
            <nav>
                <label htmlFor="toggle" className="clickable">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <NavLinks />
            </nav>
            <nav>
                <Link href="https://github.com/MrMiamm" target="_blank">
                    <Image src="/svg/github.svg" alt="Github" width={24} height={24} />
                </Link>
                <Link href="https://fr.linkedin.com/in/william-cheron-0b4a70269" target="_blank">
                    <Image src="/svg/linkedin.svg" alt="Linkedin" width={24} height={24} />
                </Link>
            </nav>
        </header>
        </>
    );
}