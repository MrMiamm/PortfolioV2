"use client";

import { useLenis } from "lenis/react";
import Link from "next/link";

interface ButtonProps {
    href: string;
    reverse?: boolean;
    download?: boolean;
    openInNewTab?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, reverse = false, download = false, openInNewTab = false, children }) => {

    const lenis = useLenis();

    return (
        <Link
            className={`see-button ${reverse ? "reverse" : ""}`}
            target={openInNewTab ? "_blank" : "_self"}
            href={href}
            download={download}
            onClick={href.startsWith("#") ? (e) => {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement && lenis) {
                    lenis.scrollTo(href);
                }
            } : undefined}
        >
            {children}
        </Link>
    );
};

export default Button;