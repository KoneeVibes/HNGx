const API_KEY = process.env.REACT_APP_API_KEY;

const getTopRatedMovies = async () => {
    try {
        const fetchMovies = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=${API_KEY}`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        });
        const res = await fetchMovies.json();
        return res.results;
    } catch (error) {
        return console.log("There is an error");
    }
}

export default getTopRatedMovies;