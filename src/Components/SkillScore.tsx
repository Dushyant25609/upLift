import { FC } from "react";
import { BsDot } from "react-icons/bs";

type SkillScoreProps = {
    score: number,
    title: string,
};

const brightColors: { [color: string] : string } = {
    Project: 'bg-red-500',
    Research: 'text-yellow-500',
    Certificate: 'text-green-500',
    Seminar: 'text-blue-500',
  };

const SkillScore: FC<SkillScoreProps> = ({score,title}) => {
    score = Math.round(score*100)/100;
    return (
        <div className="bg-white shadow-xl flex flex-col px-4 py-2 rounded-lg md:justify-evenly 2xl:px-8">
            <div className="flex gap-4 justify-between">
                <h1 className="text-xs md:text-xs   xl:text-sm 2xl:text-xl " >{title}</h1>
                <p className={"rounded-full  text-xs aspect-square xl:text-base "}><BsDot className={brightColors[title]} /></p>
            </div>
            <h1 className="font-bold md:text-sm md:self-center xl:text-xl 2xl:text-3xl">{score}</h1>
        </div>
    )
}

export default SkillScore;