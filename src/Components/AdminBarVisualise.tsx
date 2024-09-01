import { FC } from "react";
import AdminBarChart from "./AdminBarChart";

type AdminBarVisualiseProps = {
    j_num: number,
    s_num: number,
    p_num: number,
};

const AdminBarVisualise: FC<AdminBarVisualiseProps> = ({j_num,s_num,p_num}) => {
    return (
        <div className="bg-white p-3 rounded-md shadow-md md:col-span-2 lg:col-span-3 lg:w-2/3 justify-self-center" ><AdminBarChart j_num={j_num} p_num={p_num} s_num={s_num} /></div>
    )
}

export default AdminBarVisualise;