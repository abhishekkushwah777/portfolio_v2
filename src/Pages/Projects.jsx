import { getProjects } from "../DataImport";
import { useState } from "react";
import { useEffect } from "react";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects().then((data) => {
            setProjects(data);
        });
    }, []);
    
    return (
        <>
            {projects.map((project) => (
                <div key={project._id}>
                    <h1>{project.title}</h1>
                </div>
            ))}
        </>
    )
}
export default Projects;