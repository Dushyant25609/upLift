import { FC } from "react";
import { IoMdAdd } from "react-icons/io";
import { Research } from "../Models/research";
import ResearchCard from "./ResearchCard";
import { Link } from "react-router-dom";

type ResearchsProps = {
    researchs: Research[],
};

const Researchs: FC<ResearchsProps> = ({researchs}) => {
    return (
        <div className="bg-white rounded-md shadow-md p-3 flex flex-col gap-4">
            <div className="flex justify-between items-center bg-white shadow-2xl px-4 py-2 rounded-md max-w-96">
                <h1>Research Papers</h1>
                <Link to={"/research/Add"} ><IoMdAdd/></Link>
            </div>
            <div className="flex flex-col gap-2">
                {researchs.length == 1 && researchs.map( research => {return <ResearchCard key={research._id} project={research} />  } )}
                {researchs.length > 1 && researchs.map(researchs => {return <ResearchCard key={researchs._id} project={researchs} />})}
            </div>
        </div>
    )
}

export default Researchs;