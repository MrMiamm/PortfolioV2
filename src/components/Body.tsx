"use client";
import { useEffect, useState, ReactNode } from "react";
import { initCustomCursor } from "@/lib/cursor";

interface BodyProps {
    children: ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        setIsDesktop(!/Mobi|Android/i.test(navigator.userAgent));

        if (document.readyState === "complete") {
            initCustomCursor();
        } else {
            window.addEventListener("load", () => {
                initCustomCursor();
            });
            return () => window.removeEventListener("load", () => initCustomCursor());
        }
    }, []);

    useEffect(() => {
        if (isDesktop) {
            // Vérifiez que la classe "desktop" est ajoutée avant d'initialiser le curseur
            const body = document.querySelector("body");
            if (body && body.classList.contains("desktop")) {
                initCustomCursor();
            }
        }
    }, [isDesktop]);

    return (
        <body className={isDesktop ? "desktop" : "mobile"}>
            {children}
        </body>
    );
};

export default Body;