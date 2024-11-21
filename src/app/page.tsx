import Button from "@/components/Button";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
import styles from "./page.module.css";
import Info from "@/components/Info";

export default function Portfolio() {

    return (
        <>
        <div id={styles.bgGradient}></div>
        <Header />
        <section id={styles.accueil}> 
            <Image src="/img/photo.webp" alt="Une photo de moi" width={500} height={500} priority />
            <div id={styles.accueil_content}>
                <div>
                    <p>William CHERON</p>
                    <p>Je suis étudiant en <a target="_blank" href="https://iut-lannion.univ-rennes.fr/informatique">BUT Informatique</a> à l'<a target="_blank" href="https://iut-lannion.univ-rennes.fr">IUT de Lannion</a>.<br />J'aime le codage et également jouer du piano.<br />À long terme, j'aimerais être développeur logiciel ou développeur Web FullStack !</p>
                </div>
                <nav>
                    <ul>
                        <li><Button href="/res/CV_William_CHERON.pdf" reverse download openInNewTab>Télécharger mon CV</Button></li>
                        <li><Button href="#contact" reverse>Me contacter</Button></li>
                    </ul>
                </nav>
            </div>
            <svg className={styles.wave_accueil} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <g stroke="#23272A" strokeWidth="0.3" fill="#23272A" fillRule="nonzero">
                    <path className="wave1" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                    <path className="wave2" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                    <path className="wave3" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
                </g>
            </svg>
        </section>

        <div id="gotoCompetences" className="goto"></div>
        <section className={styles.competences}>
            <h1 id="competences">Outils et Languages</h1>
            <div>
                <article>
                    <h2>Programmation</h2>
                    <ul>
                        <li><Info href="https://www.python.org" src="/svg/python.svg" height={120} /></li>
                        <li><Info href="https://learn.microsoft.com/fr-fr/cpp/c-language/?view=msvc-170" src="/svg/c.svg" /></li>
                        <li><Info href="https://dev.java" src="/svg/java.svg" /></li>
                        <li><Info href="https://developer.mozilla.org/fr/docs/Learn/JavaScript" src="/svg/javascript.svg" /></li>
                        <li><Info href="https://developer.mozilla.org/fr/docs/Web/HTML" src="/svg/html.svg" /></li>
                        <li><Info href="https://developer.mozilla.org/fr/docs/Web/CSS" src="/svg/css.svg" /></li>
                    </ul>
                </article>
                <article>
                    <h2>Conception</h2>
                    <ul>
                        <li><Info href="https://www.figma.com" src="/svg/figma.svg" /></li>
                        <li><Info href="https://gluonhq.com/products/scene-builder/" src="/svg/scene_builder.svg" /></li>
                        <li><Info href="https://www.uml.org" src="/svg/uml.svg" /></li>
                        <li><Info href="https://www.visual-paradigm.com" src="/svg/visual-paradigm.svg" /></li>
                    </ul>
                </article>
                <article>
                    <h2>BDD</h2>
                    <ul>
                        <li><Info href="https://www.postgresql.org/docs/" src="/svg/postgresql.svg" /></li>
                        <li><Info href="https://www.sqlite.org/index.html" src="/svg/sqlite.svg" /></li>
                        <li><Info href="https://www.mysql.com/products/workbench/" src="/svg/sqlworkbench.svg" /></li>
                    </ul>
                </article>
                <article>
                    <h2>Système</h2>
                    <ul>
                        <li><Info href="https://git-scm.com" src="/svg/git.svg" /></li>
                        <li><Info href="https://devdocs.io/bash/" src="/svg/bash.svg" /></li>
                    </ul>         
                </article>
            </div> 
        </section>

        <div id="gotoFormations" className="goto"></div>
        <section className={styles.formations}>
            <h1 id="formations">Formations</h1>
            <div>
                <article>
                    <h2>BUT Informatique</h2>
                    <div>
                        <p>2022-20??
                        <br />IUT de Lannion
                        </p>
                    </div>
                </article>
                <article>
                    <h2>Baccalauréat Général</h2>
                    <div>
                        <p>2019-2022
                        <br />Lycée Vauban - Brest
                        <br />Spécialités: NSI (Numérique et Science Informatique) et Mathématiques
                        </p>
                    </div>
                </article>
            </div>
        </section>

        <div id="gotoProjets" className="goto"></div>
        <section className={styles.projets}>
            <h1 id="projets">Projets</h1>
            <div>
                <div className={styles.projet}>
                    <h2>Puissance 4</h2>
                    <Image src="/img/puissance4.webp" alt="Puissance4" loading="lazy" width={300} height={300} />
                    <p>Puissance 4 réalisé en C, s'exécutant dans le terminal.</p>
                    <a className="see-button" href="projects/puissance4.html"><div>En savoir plus</div></a>
                </div>
                <div className={styles.projet}>
                    <h2>Convertisseur de PDF</h2>
                    <Image src="/img/convertisseur_pdf.webp" alt="Créateur de PDF" loading="lazy" width={300} height={300} />
                    <p>Script permettant de générer des fichiers PDF à partir de documents textes</p>
                    <a className="see-button" href="projects/pdf_creator.html"><div>En savoir plus</div></a>
                </div>
                <div className={styles.projet}>
                    <h2>Création d'une BDD</h2>
                    <Image src="/img/creation_bdd.webp" alt="Création d'une BDD" loading="lazy" width={300} height={300} />
                    <p>Base de données réalisée avec Postgresql.</p>
                    <a className="see-button" href="projects/bdd_creation.html"><div>En savoir plus</div></a>
                </div>
                <div className={styles.projet}>
                    <h2>Sport KOH</h2>
                    <Image src="/img/sport_koh.webp" alt="Sport KOH" loading="lazy" width={300} height={300} />
                    <p>Site internet vendant des voyages sportifs.</p>
                    <a className="see-button" href="projects/sport_koh.html"><div>En savoir plus</div></a>
                </div>
            </div>
            <svg className={styles.wave_projects_top} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
            <svg className="wave_bottom" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </section>

        <Footer />
        </>
    );
}
