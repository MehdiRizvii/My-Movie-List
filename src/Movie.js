import React from 'react'

const POSTER = "https://image.tmdb.org/t/p/w1280";


const Movie = ({

    name,
    poster,


}) =>{

    return(

        <div className="container">

            <div className="movie-row">
                <div className="movie">
                    <h1>{name}</h1>
                    <img src={POSTER+poster} alt="posterr"/>
                </div>

            </div>
        </div>
    );



};



export default Movie