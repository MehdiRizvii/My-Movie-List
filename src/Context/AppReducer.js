export default (state, action) => {
    
    switch (action.type) {
        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                watched: [action.payload, ...state.watched]
                
            };
        case "ADD_SCORE_TO_WATCHED":
                return {
                  ...state,
                    score:[action.payload, ...state.score]
                };

        case "REMOVE_MOVIE_FROM_WATCHEDLIST":
            return {
                ...state,
                watched: state.watched.filter(
                    (movie) => movie.poster !== action.payload
                ),
            };


        default:
            return state;

    }
    
    
    
};