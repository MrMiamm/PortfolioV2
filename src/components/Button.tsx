"use client";

import { getLenis } from "@/lib/lenis";
import Link from "next/link";

interface ButtonProps {
    href: string;
    reverse?: boolean;
    download?: boolean;
    openInNewTab?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, reverse = false, download = false, openInNewTab = false, children }) => {
    return (
        <Link
            className={`see-button ${reverse ? "reverse" : ""}`}
            target={openInNewTab ? "_blank" : "_self"}
            href={href}
            download={download}
            onClick={href.startsWith("#") ? (e) => {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const lenis = getLenis();
                    lenis.scrollTo(href);
                }
            } : undefined}
        >
            {children}
        </Link>
    );
};

export default Button;