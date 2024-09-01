import { FC } from "react";

type RankProps = {
    rate: number
};

const Rank: FC<RankProps> = ({rate}) => {
    const a:number = Math.round(rate * 100) / 100;
    return (
        <div className="bg-white shadow-xl px-4 py-2  col-span-2 flex">
            <div className="flex px-4 w-full justify-between md:text-xs md:self-center xl:text-xl 2xl:text-3xl">
                <p className="font-bold ">Average rating:</p>
                <p>{a}</p>
            </div>
        </div>
    )
}

export default Rank;