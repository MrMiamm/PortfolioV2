// NavLinks.tsx
'use client';

import Link from 'next/link';

export default function NavLinks() {
    return (
        <ul>
            <li><Link className="pagelink" href="#accueil" onFocus={() => lenis.scrollTo('top')}>Accueil</Link></li>
            <li><Link className="pagelink" href="#gotoCompetences" onFocus={() => lenis.scrollTo('#gotoCompetences')}>Outils</Link></li>
            <li><Link className="pagelink" href="#gotoFormations" onFocus={() => lenis.scrollTo('#gotoFormations')}>Formations</Link></li>
            <li><Link className="pagelink" href="#gotoProjets" onFocus={() => lenis.scrollTo('#gotoProjets')}>Projets</Link></li>
            <li><Link className="pagelink" href="#contact" onFocus={() => lenis.scrollTo('#contact')}>Contact</Link></li>
        </ul>
    );
};