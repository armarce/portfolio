import { forwardRef } from 'react';
import projects from '../db/projects.json';

const Projects = ({}, ref) => {

    return (

        <div ref={ref} style={{"paddingTop": "60px"}}>
            <h2>Últimos proyectos</h2>
            <section id="projects">
                {
                    projects.map(project => (

                        <div className="project" key={project.id}>
                            <div className="description">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="footer">
                                    <div className="tags">
                                        {
                                            project.tags.map(tag => (

                                                <span className={tag.toLowerCase()} key={tag}>{tag}</span>

                                            ))
                                        }
                                    </div>
                                    <div className="links">
                                        {project?.repository && 
                                            <a href={project.repository} target="_blank">
                                                <i className="fa-brands fa-github"></i>
                                            </a>
                                        }
                                        <a href={project.url} target="_blank">
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="screenshot">
                                <img src={`./screenshots/${project.screenshot}`} alt="Project name" />
                            </a>
                        </div>

                    ))
                }
            </section>
        </div>

    )

}

export default forwardRef(Projects);