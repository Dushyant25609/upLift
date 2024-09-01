import { FC } from "react";
import { User } from "../Models/user";

type ProfileCardProps = {
    user: User,
};

const img = "https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const ProfileCard: FC<ProfileCardProps> = ({user}) => {
    console.log("User profile",user)
    return (
        <div className="flex  shadow-lg bg-white px-4 py-8 gap-4 justify-between md:justify-evenly rounded-lg items-center md:flex-col ">
            <img className="rounded-full aspect-square object-cover object-center w-2/5 min-w-0 md:w-4/5 2xl:w-2/5" src={img} alt="profile" />
            <div className="flex flex-col gap-4" >
                <div className="flex flex-col">
                    <h1 className="font-bold md:text-xs lg:text-2xl 2xl:text-4xl">{user.full_name}</h1>
                    <p className="md:self-center md:text-xs lg:text-lg 2xl:text-xl">{user.role}</p>
                </div>
                <div className="flex flex-col text-xs font-light lg:text-sm 2xl:text-base">
                    <p>{user.organization_email_id}</p>
                    <p>{user.personal_email_id}</p>
                    <p>{user.phone_number}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;