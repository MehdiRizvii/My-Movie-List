import React,{useContext, useState} from 'react'
import {GlobalContext} from "./Context/GlobalState";
import {useAuth0} from '@auth0/auth0-react';
import {App} from "./App"
import "./App";
import {MovieControls} from './Components/MovieControls';
import "./Components/MovieControls";

const POSTER = "https://image.tmdb.org/t/p/w1280";


const Movie = ({

    name,
    poster,
    release_date,
    type,

}) =>{

    const {addMovieToWatched, watched} = useContext(GlobalContext);
    const {isAuthenticated} = useAuth0();
    const [score, setScore] = useState('');

    let storedMovie = watched.find(o => o.id === name.id);




    const handleonChange = (e) => {
        setScore(e.target.value);


    };

    const handleonSubmit = (e) => {
        e.preventDefault();




    };



    return(

                <div>
                    <div className="movie">
                        <h1>{name} ({release_date})</h1>
                        <h2 className="scoreHeader">My Score: {score}</h2>
                    <img src={poster ? (POSTER+poster) : "https://images.cdn4.stockunlimited.net/preview1300/cinema-background-with-movie-objects_1823382.jpg" }alt="posterr"/>



                        <form className="formBanner" onSubmit={handleonSubmit}>
                            <button onClick={()=> addMovieToWatched (POSTER+poster)}>Add To List</button> {/* if something goes wrong just move it out of the form  */}
                            <input placeholder="My Score" min="0" max="10" step="0.10" className="Score" type="number" value={score} onChange={handleonChange}

                            />


                        </form>
                    </div>


                </div>



    );



};



export default Movie