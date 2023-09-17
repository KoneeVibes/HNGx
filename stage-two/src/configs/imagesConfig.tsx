const API_KEY = process.env.REACT_APP_API_KEY;

const getImagesConfig = async () => {
    try {
        const fetchConfiguration = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`);
        const res = await fetchConfiguration.json();
        const imagesConfig = res.images;
        return imagesConfig;
    } catch (err) {
        return console.log(err);
    }
}

export default getImagesConfig;