import { Route, Routes } from "react-router-dom" 
import FacultyDashboard from "./Connected/FacultyDashboard"
import AdminDashboardConnted from "./Connected/AdminDashboardConnted"
import FinalSignUp from "./Components/FinalSignUp"
import Login from "./Components/Login"
import ADD from "./Components/Add"
import AddProject from "./Components/addProject"
import AddSeminar from "./Components/addSeminar"
import AddCertificate from "./Components/addCertificate"


function App() {

  return (
    <>
      <Routes>
        <Route index element={<AdminDashboardConnted/>} />
        <Route path="/Faculty/Dashboard/" element={<FacultyDashboard/>} />
        <Route path="/Admin/Dashboard/" element={<AdminDashboardConnted/>}  />
        <Route path="/Signup/" element={<FinalSignUp/>} />
        <Route path="/Login/" element={<Login/>} />
        <Route path="/resarch/Add" element={<ADD/>} />
        <Route path="/projects/Add" element={<AddProject/>} />
        <Route path="/seminars/Add" element={<AddSeminar/>} />
        <Route path="/certificates/Add" element={<AddCertificate/>} />
      </Routes>
    </>
  )
}

export default App
