import { FC } from "react";
import { Project } from "../Models/project";

type ProjectCardProps = {
    project: Project,
};

const img = "https://plus.unsplash.com/premium_vector-1721386084763-85a4ee8c7723?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const ProjectCard: FC<ProjectCardProps> = ({project}) => {
    return (
        <div className="bg-white gap-10 shadow-xl rounded-md px-2 md:px-4 py-2 flex md:justify-around  items-center h-full overflow-hidden ">
            <img className="rounded-xl w-20" src={img} alt="img" />
            <div className="flex flex-col wrap h-16 md:w-2/3 p-2" >
                <h1 className="font-semibold">{project.topic}</h1>
                <p className="text-xs">{project.description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;