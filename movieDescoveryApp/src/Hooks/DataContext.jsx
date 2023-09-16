import { createContext, useContext, useEffect, useState } from "react";

// Create a context
export const DataContext = createContext();
//Api Url
const apiUrl = 'https://api.themoviedb.org/3/movie/'
//Api Key
const apiKey = 'af8c4fba7821c96b004fea0b10149066'

export const DataProvider = ({children}) =>{
    
      // Construct an array of IDs for the first 10 resources
       const movieId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
         // State to store the fetched data
       const [movieData, setMovieData] = useState([])

         // Function to fetch data by ID
  const fetchDataById = async (id) => {
    const url = `${apiUrl}${id}?api_key=${apiKey}`;
    try {
      const response = await fetch(url);

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
       
  useEffect(() => {
    const fetchFirst10Resources = async () => {
      const dataPromises = movieId.map((id) => fetchDataById(id));
      try {
        const data = await Promise.all(dataPromises);
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFirst10Resources();
  }, []);


    return (
        <DataContext.Provider value={{movieData}}>
            {children}
        </DataContext.Provider>
    )
}

// export const useData = () => useContext(DataContext)



