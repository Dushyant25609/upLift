import { connect } from "react-redux"
import { sendTokenAction } from "../actions/user"
import { certificatesDetailsSelector, projectDetailsSelector, researchDetailsSelector, seminarsDetailsSelector, userDetailsSelector, userLoadingSelector } from "../selectors/user"
import { State } from "../store"
import FacultyDashboard from "../Components/FacultyDashboard"

 const mapToProps = (state: State) =>{
    return {
        user : userDetailsSelector(state),
        projects: projectDetailsSelector(state),
        researchs: researchDetailsSelector(state),
        seminars: seminarsDetailsSelector(state),
        certificates: certificatesDetailsSelector(state),
        loading: userLoadingSelector(state),
    }
 }

 const dispatchToProps = {
    getUser: sendTokenAction
 }

 export default connect(mapToProps, dispatchToProps)(FacultyDashboard);