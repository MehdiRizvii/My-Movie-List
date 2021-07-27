import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

import {useHistory} from 'react-router-dom';

const MyMovieList = () => {

    let history = useHistory();



    return(
<div className="Home">
        <button
            onClick={()=>{
                history.push("/");
            }}>
        MY MOVIE LIST
        </button>
</div>
    )
}





export default MyMovieList