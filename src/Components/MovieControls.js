import React, {useContext} from "react";
import {GlobalContext} from "../Context/GlobalState";

//rsc to make a quick react


export const MovieControls = ({movie, type}) => {

    const {removeMovieFromWatchedlist} = useContext(GlobalContext);

    return (

        <div className="inner-card-controls">
            {type === "watched" &&(
                <>
                    <button className="ctrl-btn" onClick={()=> removeMovieFromWatchedlist(movie.poster)}><i className="fa-fw far fa-eye"></i></button>

                    <button className="ctrl-btn"><i className="fa-fw far fa-times"></i></button>





                    </>
            )}
        </div>

    );
};

