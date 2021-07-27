
import React, {useState, useEffect} from "react";
import Movie from './Movie';
import "./App.css";
import "./Components/Login"
import "./Components/ProfilePage"
import Login from "./Components/Login";
import ProfilePage from "./Components/ProfilePage";
import Logout from "./Components/Logout";
import {useAuth0} from '@auth0/auth0-react';
import ProfilePageButton from "./Components/ProfilePageButton";
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import MyMovieList from "./Components/MyMovieList";
import "./Components/Search";
import Search from "./Components/Search";
import {GlobalProvider} from "./Context/GlobalState";
import './Components/MovieControls';




const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page1";
const POSTER = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {

    const [movies, setMovies, score] = useState([]);
    const [searchValue, setSearchValue] = useState('');



    useEffect(() => {
     fetch(FEATURED_API)
         .then(res => res.json())

          .then((data) =>{
              console.log(data);
              setMovies(data.results);
          });

    }, []);

    const handleonSubmit = (e) => {
        e.preventDefault();

        if(searchValue) {

            fetch(SEARCH_API + searchValue)
                .then(res => res.json())

                .then((data) => {
                    setMovies(data.results);
                });
            setSearchValue('');
        }
        if(searchValue ===('')){
            fetch(FEATURED_API)
                .then(res => res.json())

                .then((data) => {
                    setMovies(data.results);
                });

        }
    };

    const handleonChange = (e) => {
        setSearchValue(e.target.value);
    };

        {   /* If I want to not use a login pop up then just have a loading page for when you're loading the website again.


        const {isLoading} = useAuth0();

        if (isLoading) return <div>Loading... </div>

*/
        }

    return(
<GlobalProvider>
<Router>

    <div className="home">
        <MyMovieList/>
    </div>

    <Route path="/" exact={true} render={
        ()=>{
            return(

                <div>
                    <div className="Banner">

                        <div className="headline"><h1>Search For Movies</h1>    </div>


                        <form onSubmit={handleonSubmit}>

                            <input
                                className="search"
                                type="search"
                                placeholder="Type to Search"
                                value={searchValue}
                                onChange={handleonChange}

                            />

                        </form>




                    </div>
                    <div className="Login"> <Login/> </div>
                    <Logout
                    />
                    {/*<div className="Profile"> <ProfilePage/> </div>*/}
                    <ProfilePageButton/>



                    <  div className="container">
                        {movies.length > 0 && movies.map((movie)=>(
                            <Movie
                                key={movie.id}
                                name={movie.original_title}
                                poster={movie.poster_path}
                                release_date={movie.release_date ? movie.release_date.substring(0,4) : "-"}

                            />

                        ))}

                    </div>

                </div>
            )
        }
    }/>


    <Route  path="/ProfilePage" exact strict render={
        ()=>{
            return(
                <ProfilePage/>
            )
        }
    }/>


</Router>
</GlobalProvider>
    );



}

export default App;

