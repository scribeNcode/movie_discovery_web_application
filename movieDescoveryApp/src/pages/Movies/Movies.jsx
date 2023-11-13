import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Movies/Movies.css";
import Logo from "./assets/Tv.png";
import { GoHome } from "react-icons/go";
import { BsCameraReels } from "react-icons/bs";
import { PiMonitorPlayLight } from "react-icons/pi";
import { VscCalendar } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

function Movies() {
  const apiKey = "af8c4fba7821c96b004fea0b10149066";

  const [movieId, setMovieId] = useState([]);
  const params = useParams();

 

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${apiKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        const movieKey = data.results[0].key;

        setMovieId(movieKey);
      })
      .catch((err) => {
        console.log("Something went wrong :", err);
      });
    console.log();
  }, []);

// youtube video tag options 
  const opts = {
    height: '350',
    width: '100%',
  };

  return (
    <div className="moviesPageWrapper">
      <div className="moviesSideBarArea">
        <div className="moviesSideBarcontainer">
          <div className="moviesLogoContainer">
            <object data={Logo}></object>
            <h1>MovieBox</h1>
          </div>

          <ul className="moviesNavigationsContainer">
            <NavLink to='/'>
              {" "}
              <span className="moviesNavigationIcon">
                <GoHome />
              </span>{" "}
              <span id="goHomeName" className="moviesNavigationName">
                Home
              </span>
            </NavLink>
            <NavLink>
              {" "}
              <span className="moviesNavigationIcon">
                <BsCameraReels />
              </span>{" "}
              <span id="moviesHomeName" className="moviesNavigationName">
                Movies
              </span>{" "}
            </NavLink>
            <NavLink>
              {" "}
              <span className="moviesNavigationIcon">
                <PiMonitorPlayLight />
              </span>{" "}
              <span className="moviesNavigationName">Tv series</span>
            </NavLink>
            <NavLink>
              {" "}
              <span className="moviesNavigationIcon">
                <VscCalendar />
              </span>{" "}
              <span className="moviesNavigationName">Upcoming</span>{" "}
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="moviesPageViewArea">
        <div className="video-box">
          <YouTube id="youtubeTag" videoId={movieId} opts={opts}  />
        </div>
        
      </div>
    </div>
  );
}
export default Movies;
