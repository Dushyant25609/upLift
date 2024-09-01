import { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTokenAction } from "../actions/user";

type NavbarProps = {};

const Navbar: FC<NavbarProps> = () => {
    const dispatch = useDispatch();
    return (
        <div className="flex p-4 justify-between bg-white font-semibold shadow-md md:px-8">
            <h1 className="text-xl">Up Lift</h1>
            <div className="flex gap-4">
            <Link className="text-xl" to={"/Faculty/Dashboard"}>Dashboard</Link>
            <Link onClick={()=> {
                localStorage.removeItem("token");
                dispatch(deleteTokenAction());
            }} to={"/Login/"}>Log out</Link>
            </div>
        </div>
    )
}

export default Navbar;