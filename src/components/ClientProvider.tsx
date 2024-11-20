"use client";

import { useEffect } from "react";
import { initLenis } from "../lib/lenis";

export default function ClientProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Initialisation de Lenis
        initLenis();
    }, []);

    return <>{children}</>;
}
