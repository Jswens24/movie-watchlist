import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MovieScreen from './components/UI/MovieScreen';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          watchlist={watchlist}
          page={page}
          setPage={setPage}
          movieList={movieList}
        />
      </main>
    </div>
  );
}

export default App;
