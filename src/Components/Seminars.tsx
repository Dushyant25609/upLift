import { FC } from "react";
import { IoMdAdd } from "react-icons/io";
import SeminarCard from "./SeminarCard";
import { Seminar } from "../Models/seminars";
import { Link } from "react-router-dom";

type ResearchsProps = {
    researchs: Seminar[],
};

const Seminars: FC<ResearchsProps> = ({researchs}) => {
    return (
        <div className="bg-white rounded-md shadow-md p-3 flex flex-col gap-4">
            <div className="flex justify-between items-center bg-white shadow-2xl px-4 py-2 rounded-md max-w-96">
                <h1>Seminars</h1>
                <Link to={"/seminars/Add"} ><IoMdAdd/></Link>
            </div>
            <div className="flex flex-col gap-2">
                {researchs.length == 1 && researchs.map( research => {return <SeminarCard key={research._id} project={research} />  } )}
                {researchs.length > 1 && researchs.slice(0,2).map(researchs => {return <SeminarCard key={researchs._id} project={researchs} />})}
            </div>
        </div>
    )
}

export default Seminars;