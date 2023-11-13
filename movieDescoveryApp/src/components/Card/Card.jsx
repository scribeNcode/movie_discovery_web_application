import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import "./Card.css";

const apiKey = "af8c4fba7821c96b004fea0b10149066";

const Card = () => {
  const [movieData, setMovieData] = useState([]);
 

  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const firstTenMovies = data.results.slice(0, 12);
        setMovieData(firstTenMovies);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="featuredMovieWrapper">

      <div className="container">
      <div className="featuredMovieTitle">
          <p>Featured Movie</p>
      </div>
        {movieData.map((movie) => (
          <div className="movieCardDiv" key={movie.id}>
            <Link
              to={`/movies/${movie.id}`} // Pass movie ID as a URL parameter
              
            >
              <div className="poster_div">
                <div className="imageWrapper">
                  <img
                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="posterCardRating">
                  <div className="TvSeriesDiv">
                    <p>TV SERIES</p>
                  </div>
                  <div className="posterCardHeart">
                    <div className="heartWrapper">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
                          fill="#D1D5DB"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

















