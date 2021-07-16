import React, {useState, useEffect} from 'react'
import axios from 'axios';
function App() {
  const [movies, setMovie] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {

    axios.get("https://api.themoviedb.org/3/movie/{movie_id}?api_key=be4d356fb22170def0d9e1ff1612e625&language=en-US")
        .then(res => {
          setMovie(res.data);
          console.log(res.data);
        })
        .catch(error => console.log(error));
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
             /*   <Crypto
                    key={movie.id}
                    name={movie.name}
                    symbol={movie.symbol}
                    image={movie.image}
                    volume={movie.market_cap}
                    price={movie.current_price}
                    priceChange={movie.price_change_percentage_24h}
                /> */
            );
        })}
    </div>
  );
}

export default App;