import { FC } from "react";

type FacultyCardProps = {
    name: string,
    subject: string,
};

const img = "https://plus.unsplash.com/premium_vector-1722167430275-348e8d11d82e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const FacultyCard: FC<FacultyCardProps> = ({name,subject}) => {
    return (
        <div className="bg-white min-w-32  flex flex-col items-center gap-2 rounded-md shadow-2xl p-3">
            <img className=" aspect-square w-2/3 rounded-full object-cover object-center" src={img} alt="" />
            <div >
                <h1 className="text-sm" >{name}</h1>
                <p className="text-xs font-thin" >{subject}</p>
            </div>
        </div>
    )
}

export default FacultyCard;