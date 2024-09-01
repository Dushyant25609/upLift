import { FC } from "react";
import { IoMdAdd } from "react-icons/io";
import ProjectCard from "./ProjectCard";
import { Project } from "../Models/project";
import { Link } from "react-router-dom";

type ProjectsProps = {
    projects: Project[],
};

const Projects: FC<ProjectsProps> = ({projects}) => {
    console.log("Projects Card:",projects)
    return (
        <div className="bg-white rounded-md shadow-md p-3 flex flex-col gap-4">
            <div className="flex justify-between items-center bg-white shadow-2xl px-4 py-2 rounded-md max-w-96">
                <h1>Project</h1>
                <Link to={"/projects/Add"} ><IoMdAdd/></Link>
            </div>
            <div className="flex flex-col gap-2">
                {projects.length == 1 && projects.map(project =>{return <ProjectCard key={project._id} project={project} />})}
                {projects.length > 1 && projects.slice(0,2).map(project => {return <ProjectCard key={project._id} project={project} />})}
            </div>
        </div>
    )
}

export default Projects;