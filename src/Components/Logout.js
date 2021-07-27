import React from 'react';
import {useAuth0} from '@auth0/auth0-react';


const Logout = () => {

    const {logout, user, isAuthenticated} = useAuth0();

    return(
        isAuthenticated && (
            <div className="logOut">
        <button onClick={()=> logout()}> Logout  </button> <p className="displayName">({user.nickname})</p>


            </div>
        )

    )

};




export default Logout