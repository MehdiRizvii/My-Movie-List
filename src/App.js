
import React, {useState, useEffect} from "react";
import Movie from './Movie';
import "./App.css";
import "./Components/Login"
import "./Components/ProfilePage"
import Login from "./Components/Login";
import ProfilePage from "./Components/ProfilePage";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page1";
const POSTER = "https://image.tmdb.org/t/p/w1280";

function App() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
     fetch(FEATURED_API)
         .then(res => res.json())

          .then((data) =>{
              console.log(data);
              setMovies(data.results);
          });

    }, []);


    return(

        <div>
            <div className="Banner">
                <div className="headline"><h1>Search For Movies</h1>    </div>





            <form>
                <input type="text" placeholder="Search" className="movieSearch"/>

            </form>

            </div>
            <div className="Login"> <Login/> <div className="Profile"> <ProfilePage/> </div> </div>




            <  div className="container">
            {movies.length > 0 && movies.map((movie)=>(
                <Movie
                    key={movie.id}
                    name={movie.original_title}
                    poster={movie.poster_path}
                />
                ))}

        </div>
        </div>
    );



}

export default App;




/*

import React, {useState, useEffect} from "react";
import axios from "axios";
import Movie from './Movie';


function App() {
    const [movies, setMovie] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {

        axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page1")
            .then(res => {
                setMovie(res.data);
                console.log(res.data);
            })
            .catch(error => alert(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filter = movies.filter(movie =>
        movie.name.toLowerCase().includes(search.toLowerCase())
    );


    return(

        <div className="App">

            <div className="m-search">
                <h1 className="text"> Search For Movies </h1>



                <form>
                    <input type="text" placeholder="Search" className="movieInput" onChange={handleChange}/>

                </form>



            </div>
            {filter.map(movie => {
                return (
                    <Movie

                        key={movie.id}
                        name={movie.original_title}
                        poster={movie.poster_path}
                    />
                );
            })}
        </div>
    );
}

export default App;

*/