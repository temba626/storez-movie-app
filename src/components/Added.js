import React, {useState, useEffect} from "react";
import Watched from "./Watched";
import Watchlist from "./Watchlist";

function App() {

  const [showResults, setShowResults] = useState(true)
  const [movieData, setMovieData] = useState([])

  
  function handleClick(){
    setShowResults(!showResults);

  }

  useEffect(() => {
    fetch (" http://localhost:3000/movies")
    .then((res) => res.json())
    .then ((movieData) => setMovieData(movieData))
  }, [])

  function handleAddMovie(newMovieData){
    setMovieData([...movieData, newMovieData])


  }
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">

          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
