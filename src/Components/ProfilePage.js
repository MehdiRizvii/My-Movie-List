import React,{useContext} from 'react';
import "../App"
import "./MovieControls"
import "../Movie"
import {GlobalContext} from "../Context/GlobalState";
import {useAuth0} from '@auth0/auth0-react';
import JSONPretty from "react-json-pretty";
import {MovieControls} from "./MovieControls";
import "./MovieControls";

const ProfilePage = (movie, type) => {

    const {user, isAuthenticated} = useAuth0();

    const {watched} = useContext(GlobalContext);

    return(


            <div className="jsonPp">
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <div className="watchedList">
                    <div className="container">
                        <div className="header">
                            <h1 className="heading"> Watched List</h1>
                        </div>

                        {watched.length > 0 ? (
                            <div className="movie-grid">

                                {watched.map((movie)=>
                                    <img src={movie}/>


                                )}
                                <MovieControls type={type} movie={movie}/>

                            </div>


                        ): (<h2 className="no-movies">Add some movies!!</h2>)}






                    </div>

                </div>

            </div>

    )
};



export default ProfilePage
