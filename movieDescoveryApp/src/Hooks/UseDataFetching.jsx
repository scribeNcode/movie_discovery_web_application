function UseDataFetching() {
  const [movieData, setMovieData] = useState([]);

  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Slice out the first ten movies
        const firstTenMovies = data.results.slice(0, 10);
        setMovieData(firstTenMovies);
        // setMovieData(data.results);
        console.log(movieData);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {movieData}
}

export default UseDataFetching


