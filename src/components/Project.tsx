import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://alphamotorslondon.co.uk/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://alphamotorslondon.co.uk/" target="_blank" rel="noreferrer"><h2>Website for local businesses</h2></a>
                <p>Developed website for local businesses using TypeScript, Next.js, Shadcn/ui and Vercel for deployment. 
                    Implemented server-side rendering (SSR) and static site generation (SSG) using Next.js to
                enhance website speed and SEO performance.</p>
            </div>
            <div className="project">
                <a href="https://github.com/KabirRoshan" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/KabirRoshan" target="_blank" rel="noreferrer"><h2>The Performance Management Dashboard</h2></a>
                <p>Designed and developed an application for performance managers at KPMG to track appraisee progress and manage updates efficiently. 
                    Developed using TypeScript, Next.js, Shadcn/ui, Prisma, PostgreSQL and Jest + Playwright for testing.</p>
            </div>
            <div className="project">
                <a href="https://github.com/KabirRoshan/galactic-moth" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/KabirRoshan/galactic-moth" target="_blank" rel="noreferrer"><h2>Galactic Moth</h2></a>
                <p>Developed and released a 2D mobile game with C# and Unity. This game was released on the Google Play Store.</p>
            </div>
            <div className="project">
                <a href="https://github.com/KabirRoshan/debt-crab" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/KabirRoshan/debt-crab" target="_blank" rel="noreferrer"><h2>Debt Crab</h2></a>
                <p>This was a game created for the Manchester Game Jam. It is a 2D platformer where one must shoot and defeat a large crab. Created with C# and Unity.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;