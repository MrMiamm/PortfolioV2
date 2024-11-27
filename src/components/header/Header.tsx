"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import NavLinks from "./NavLinks";

export default function Header() {

    useEffect(() => {

        const header = document.querySelector("header");
        const headerBorder = document.createElement("div");
        headerBorder.classList.add("header-border");
        header?.appendChild(headerBorder);

        function addHeaderScrolledClass() {
            if (header) {
                window.scrollY > 0 ? header.classList.add("scrolled") : header.classList.remove("scrolled");
            }
        }

        function adaptHeaderBorderWidthWithScroll() {
            if (header && headerBorder) {
                const maxScroll = document.body.scrollHeight - window.innerHeight;
                const scrollPercentage = window.scrollY / maxScroll;
                headerBorder.style.width = `${scrollPercentage * 100}vw`;
            }
        }

        function headerScrollEvent() {
            addHeaderScrolledClass();
            adaptHeaderBorderWidthWithScroll();
        }
        
        window.addEventListener("scroll", () => headerScrollEvent());
        addHeaderScrolledClass();
        adaptHeaderBorderWidthWithScroll();

        return () => {
            window.removeEventListener("scroll", () => headerScrollEvent());
        };
    }, []);

    useEffect(() => {
        //Handle closing burger menu when link is clicked
        const toggle = document.getElementById("toggle");
        const navLinks = document.querySelectorAll(".pagelink");
        
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                if (toggle && toggle instanceof HTMLInputElement) {
                    toggle.checked = false;
                }
            });
        });

    }, []);

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
            <div className="header-border"></div>
        </header>
        </>
    );
}