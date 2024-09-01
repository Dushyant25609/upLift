import { connect } from "react-redux";
import { sendTokenAction } from "../actions/user";
import AdminDashboard from "../Components/AdminDashboard";
import { userDetailsSelector, userLoadingSelector } from "../selectors/user";
import { State } from "../store";
import { adminLoading, getAllJuniorSelector, getAllPhdSelector, getAllSeniorSelector } from "../selectors/admin";
import { loadAllUserAction } from "../actions/admin";

const mapToProps = (state: State) =>{
    return {
        user : userDetailsSelector(state),
        loading: userLoadingSelector(state),
        junior: getAllJuniorSelector(state),
        senior: getAllSeniorSelector(state),
        Phd: getAllPhdSelector(state),
        adminLoading: adminLoading(state),
    }
 }

 const dispatchToProps = {
    getUser: sendTokenAction,
    getAllUsers : loadAllUserAction,
 }

 export default connect(mapToProps, dispatchToProps)(AdminDashboard);