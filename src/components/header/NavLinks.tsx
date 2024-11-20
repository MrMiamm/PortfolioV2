'use client';

import { getLenis } from '@/lib/lenis';
import Link from 'next/link';

export default function NavLinks() {

    const handleScroll = (target: string) => {
        const lenis = getLenis();
        lenis.scrollTo(target);
    };

    return (
        <ul>
            <li><Link className="pagelink" href="#accueil" onClick={(e) => {e.preventDefault(); handleScroll('top');}}>Accueil</Link></li>
            <li><Link className="pagelink" href="#gotoCompetences" onClick={(e) => {e.preventDefault(); handleScroll('#gotoCompetences');}}>Outils</Link></li>
            <li><Link className="pagelink" href="#gotoFormations" onClick={(e) => {e.preventDefault(); handleScroll('#gotoFormations');}}>Formations</Link></li>
            <li><Link className="pagelink" href="#gotoProjets" onClick={(e) => {e.preventDefault(); handleScroll('#gotoProjets');}}>Projets</Link></li>
            <li><Link className="pagelink" href="#contact" onClick={(e) => {e.preventDefault(); handleScroll('#contact');}}>Contact</Link></li>
        </ul>
    );
};