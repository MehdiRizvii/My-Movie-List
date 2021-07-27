import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

import {useHistory} from 'react-router-dom';

const ProfilePageButton = () => {

let history = useHistory();



    return(

            <button className="ProfilePageButton"
                onClick={()=>{
                    history.push("/ProfilePage");


                }}>
                Profile Page
            </button>

    )
}





export default ProfilePageButton