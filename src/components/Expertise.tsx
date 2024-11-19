import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faTheaterMasks } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "Vue.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "HTML5",
    "CSS3",
    "Python",
    "C#",
    "SQL",
    "PostgreSQL",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "Kubernetes",
    "AWS",
    "Linux",
    "Terraform",
];

const labelsThird = [
    "Playwright",
    "Jest",
    "Cucumber",
    "Postman",
    "Jira",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a wide range of web applications from scratch using modern technologies like React and Next.js. Additionally, I worked on various projects at KPMG, collaborating with cross-functional teams in agile environments to drive successful project completions. 
                        I am highly proficient in the software development lifecycle (SDLC) and skilled in both frontend and backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I have contributed to setting up CI/CD pipelines and automating deployments, which played a crucial role in successful go-live events within KPMG. 
                        Additionally, I authored multiple Dockerfiles for Kubernetes deployments, ensuring efficient, scalable, and cloud-optimized solutions.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faTheaterMasks} size="3x"/>
                    <h3>QA Testing</h3>
                    <p>I developed automated testing solutions from the ground up for projects at KPMG, utilizing a range of testing tools and frameworks.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;