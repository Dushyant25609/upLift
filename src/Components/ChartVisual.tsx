import { FC } from "react";
import SkillScore from "./SkillScore";
import Rank from "./Rank";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import { Certificate } from "../Models/certificates";
import { Seminar } from "../Models/seminars";
import { Project } from "../Models/project";
import { Research } from "../Models/research";

type PieChartVisualProps = {
    projects: Project[],
    researchs : Research[],
    seminars: Seminar[],
    certificates: Certificate[]
    avgRating: number
};

const PieChartVisual: FC<PieChartVisualProps> = ({projects,researchs,seminars,certificates,avgRating}) => {

    let p_rating = 0;
    let r_rating = 0;
    let s_rating = 0;
    let c_rating = 0;
    let p_num = 0;
    let r_num = 0;
    let s_num = 0;
    let c_num = 0;

    projects.map( (project) => {
        p_rating+=project.rating;
        p_num++;
    })
    researchs.map( (project) => {
        r_rating+=project.rating;
        r_num++;
    })
    seminars.map( (project) => {
        s_rating+=project.rating;
        s_num++;
    })
    certificates.map( (project) => {
        c_rating+=project.rating;
        c_num++;
    })

    p_rating/=p_num;
    r_rating/=r_num;
    c_rating/=c_num;
    s_rating/=s_num;


    return (
         <div className="bg-white col-span-2 lg:col-span-3 md:w-full p-3 gap-4 rounded-lg shadow-lg flex flex-col  md:justify-around xl:items-center">
            <div className="w-4/5  xl:w-2/3 self-center flex 2xl:w-8/12 justify-around md:flex-row flex-col" >
            <div className="p-2 w-2/3 md:w-1/3 self-center flex items-center justify-center" ><PieChart numberProject={projects.length} numberResearch={researchs.length} numberSeminar={seminars.length} numberCertificate={certificates.length} />  </div>
            <div className="md:w-2/3" ><BarChart numberProject={p_rating} numberResearch={r_rating} numberSeminar={s_rating} numberCertificate={c_rating} /> </div>
            </div>
            <div className="grid grid-cols-2 gap-2 md:w-2/3 self-center 2xl:w-1/2 2xl:py-6 xl:w-4/5 ">
                <SkillScore score={p_rating} title={"Project"}/>
                <SkillScore score={s_rating} title={"Seminar"} />
                <SkillScore score={r_rating} title={"Research"} />
                <SkillScore score={c_rating} title={"Certificate"}/>
                <Rank rate={avgRating}/>
            </div>
        </div>
    )
}

export default PieChartVisual;