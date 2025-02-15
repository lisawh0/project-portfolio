import React, { useEffect, useState } from "react";
import ViewGithubBtn from "./buttons/ViewGithubBtn";
import LiveDemoBtn from "./buttons/LiveDemoBtn";
import projectsData from "../data/projects.json"; // Adjust the path as needed
import './projects.css';

const ProjectsTablet = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Set the projects data from the imported JSON
        setProjects(projectsData.projects);
    }, []);

    return (
        <div className="projects">
            <h1>Featured Projects</h1>
            {projects.map((project, index) => (
                <div key={index} className="project-child">
                    <div className="project-details">
                        <img className="projectimg" src={project.imagetablet} alt={project.name} />
                        <div className="text-details">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>

                            <div className="tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="project-actions">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <ViewGithubBtn />
                                </a>
                                <a href={project.netlify} target="_blank" rel="noopener noreferrer">
                                    <LiveDemoBtn />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>


    );
};

export default ProjectsTablet;
