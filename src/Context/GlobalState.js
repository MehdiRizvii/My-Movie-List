import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from "./AppReducer";


//initial state
const initialState = {

    watched:localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
};



//create context
export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = props => {

    const [state, dispatch] = useReducer(AppReducer, initialState) ;

    useEffect(()=>{
       localStorage.setItem('watched', JSON.stringify(state.watched))

    },[state]);

    useEffect(()=>(
    localStorage.setItem('score',JSON.stringify(state.score))
    ), [state]);


    //actions
    const addMovieToWatched = movie => {
        dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie});
    };

    const addScoreToWatched = score => {
      dispatch({type: "ADD_SCORE_TO_WATCHED", payload:score});
    };


    const removeMovieFromWatchedList = (poster) => {
      dispatch({type: "REMOVE_MOVIE_FROM_WATCHEDLIST", payload: poster});
    };

    return(
        <GlobalContext.Provider value={{watched: state.watched, score: state.score, addMovieToWatched,addScoreToWatched}}>
            {props.children}
        </GlobalContext.Provider>
    )

};