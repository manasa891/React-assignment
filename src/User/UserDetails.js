import { useSelector } from "react-redux";
import './UserDetails.css';

function UserDetails() {
    const userDetails = useSelector(state => state.userDetails);
    return (
            userDetails && ( <><h1 className="title">User Details</h1>
            <div className="UserDetails">
                <h3>{userDetails.name}</h3>
                <p>Email: {userDetails.email}</p>
                <p>Phone: {userDetails.phone}</p>
                <p>Website: {userDetails.website}</p>
            </div></>)
    )
}

export default UserDetails;