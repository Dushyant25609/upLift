import { FC, useEffect } from "react";
import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard";
import ChartVisual from "./ChartVisual";
import Projects from "./Projects";
import { User } from "../Models/user";
import { Project } from "../Models/project";
import { Research } from "../Models/research";
import Researchs from "./Researchs";
import { Seminar } from "../Models/seminars";
import Seminars from "./Seminars";
import { Certificate } from "../Models/certificates";
import Certificates from "./Certificates";
import { Navigate, useNavigate } from "react-router-dom";


type FacultyDashboardProps = {
    user: User,
    loading: boolean,
    getUser: (token:string) => void,
    projects: Project[],
    researchs : Research[],
    seminars: Seminar[],
    certificates: Certificate[],
};

const FacultyDashboard: FC<FacultyDashboardProps> = ({user,loading,getUser,projects,researchs,seminars,certificates}) => {

    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    console.log("Faculty side",token);
    
    useEffect( ()=>{
        if (!token) {
            navigate("/Login/");
          } else if (token && loading) {
            console.log("Fetching user data");
            getUser(token);
          }
    }, [token,user,loading] )

    if(loading){
        return <div>Loading...</div>
    }

    if (user && user.is_admin) {
        return <Navigate to="/Admin/Dashboard/" />;
      }

    console.log("Dashboard",researchs)
    return (
        <>
        <Navbar/>
        <div className="flex flex-col gap-3 px-3 py-5 ">
            <div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:justify-center lg:grid-cols-4">
                <ProfileCard user={user}/>
                <ChartVisual projects={projects} researchs={researchs} seminars={seminars} certificates={certificates} avgRating={user.averageRating} />
            </div>
            <Projects projects={projects} />
            <Researchs researchs={researchs} />
            <Seminars researchs={seminars} />
            <Certificates researchs={certificates} />
        </div>

        </>
    )
}

export default FacultyDashboard;