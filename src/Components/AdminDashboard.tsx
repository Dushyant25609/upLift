import { FC, useEffect } from "react";
import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard";
import AdminBarVisualise from "./AdminBarVisualise";
import FacultyArea from "./FacultyArea";
import { User } from "../Models/user";
import { Navigate, useNavigate } from "react-router-dom";

type AdminDashboardProps = {
  user: User | null;
  loading: boolean;
  junior: User[];
  senior: User[];
  Phd: User[];
  adminLoading: boolean;
  getUser: (token: string) => void;
  getAllUsers: (token: string) => void;
};

const AdminDashboard: FC<AdminDashboardProps> = ({
  user,
  loading,
  junior,
  senior,
  Phd,
  adminLoading,
  getUser,
  getAllUsers,
}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("Admin side token:",token)

  useEffect(() => {
    if (!token) {
      navigate("/Login/");
    } else if (token && loading) {
      console.log("Fetching user data");
      getUser(token);
    }
  }, [token, user, loading, getUser, navigate]);

  if (user && !user.is_admin) {
    return <Navigate to="/Faculty/Dashboard/" />;
  }

  useEffect(() => {
    if (user && adminLoading ) {
      console.log("Fetching all users");
      getAllUsers(token!);
    }
  }, [user, adminLoading, token, getAllUsers]);

  if (loading || adminLoading) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-3 px-3 py-5">
        <div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:justify-center lg:grid-cols-4">
          {user && <ProfileCard user={user} />}
          <AdminBarVisualise j_num={junior.length} p_num={Phd.length} s_num={senior.length} />
        </div>
        {junior.length > 0 && (
          <FacultyArea key={junior[0].id} title="Junior" user={junior} />
        )}
        {senior.length > 0 && (
          <FacultyArea key={senior[0].id} title="Senior" user={senior} />
        )}
        {Phd.length > 0 && (
          <FacultyArea key={Phd[0].id} title="PHD" user={Phd} />
        )}
      </div>
    </>
  );
};

export default AdminDashboard;
