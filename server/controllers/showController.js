import axios from "axios"
import Movie from "../models/Movie.js"
import Show from "../models/Show.js"
import { cleanupExpiredBookings } from "./bookingController.js"

const getTmdbApiKey = () => {
    const key = process.env.TMDB_API_KEY;
    if (!key) return "";
    if (key.startsWith("eyJ")) {
        try {
            const parts = key.split(".");
            if (parts.length >= 2) {
                const payload = Buffer.from(parts[1], 'base64').toString('utf8');
                const decoded = JSON.parse(payload);
                if (decoded && decoded.aud) {
                    return decoded.aud;
                }
            }
        } catch (e) {
            console.error("Error parsing TMDB JWT token:", e);
        }
    }
    return key;
};

export const getNowPlayingMovies = async (req,res) => {
    try{
        const apiKey = getTmdbApiKey();
        const {data} = await axios.get('https://api.tmdb.org/3/movie/now_playing',{
            params: { api_key: apiKey }
        })
        const movies = data.results 
        res.json({success: true,movies : movies})

    } catch(error){
        console.log(error.message)
        res.json({success: false,message: error.message})
         
    }
}

// API to add a new show to the database

export const addShow = async (req,res) => {
    try{
        const {movieId,showsInput,showPrice} = req.body;

        let movie = await Movie.findById(movieId);
        if (!movie){
            const apiKey = getTmdbApiKey();
            const [movieDetailsResponse,movieCreditsResponse] = await Promise.all(
                [
                    axios.get(`https://api.tmdb.org/3/movie/${movieId}`,{
                        params: { api_key: apiKey }
                    }),
                    axios.get(`https://api.tmdb.org/3/movie/${movieId}/credits`,{
                        params: { api_key: apiKey }
                    })
                ]
            );
            const movieApiData = movieDetailsResponse.data;
            const movieCreditsData = movieCreditsResponse.data;

            const movieDetails ={
                _id : movieId,
                title: movieApiData.title,
                overview: movieApiData.overview,
                poster_path: movieApiData.poster_path,
                backdrop_path: movieApiData.backdrop_path,
                release_date: movieApiData.release_date,
                original_language: movieApiData.original_language,
                casts: movieCreditsData.cast.map(cast => ({
                    name: cast.name,
                    profile_path: cast.profile_path
                })),
                vote_average: movieApiData.vote_average,
                runtime: movieApiData.runtime,
                tagline: movieApiData.tagline,
                genres: movieApiData.genres.map(genre => genre.name),


            }

            movie = await Movie.create(movieDetails);
        }

        const showsToCreate = [];
        showsInput.forEach(show=>{
            const showDate = show.date;
            show.time.forEach((time)=>{
                const dateTimeString = `${showDate}T${time}`;
              showsToCreate.push({
                movie: movie._id,
                showDateTime: new Date(dateTimeString),
                showPrice: showPrice,
                occupiedSeats: {}
})
            })
        })
        if(showsToCreate.length>0){
            await Show.insertMany(showsToCreate);
            console.log(showsToCreate);
        }
        res.json({success: true,message: "Shows added successfully"})

    }
    catch (error) {
        console.log(error.message)
        res.json({success: false,message: error.message})
    }
}


// API to get all the shows from the database with movie details and sort them by showDateTime in ascending order and only return the shows which are greater than or equal to the current date and time


export const getShows = async (req,res) => {
    try{
        await cleanupExpiredBookings();
        // Only get upcoming shows to automatically hide expired ones
        const shows = await Show.find({ showDateTime: { $gte: new Date() } }).populate("movie");

        const movieMap = new Map();
        shows.forEach(show => {
            if (show.movie) {
                movieMap.set(show.movie._id.toString(), show.movie);
            }
        });

        res.json({
            success: true,
            shows: Array.from(movieMap.values())
        });

    }
    catch (error){
        console.log(error.message)
        res.json({success: false,message: error.message})
    }

}

//API to get a single show from the database

export const getShow = async(req,res)=>{
    try{
        await cleanupExpiredBookings();
        const {movieId} = req.params;
        //get all upcoming shows for the movie
        const shows = await Show.find({movie: movieId, showDateTime: {$gte: new Date()}})
        const movie = await Movie.findById(movieId);
        const dateTime = {}
        shows.forEach((show)=>{
            const date = show.showDateTime.toISOString().split('T')[0];
            if(!dateTime[date]){
                dateTime[date] = []
            }
            dateTime[date].push({time: show.showDateTime, showId: show._id, showPrice: show.showPrice})
        })
        res.json({success: true, movie, dateTime})

    }
    catch(error){
          console.log(error.message)
        res.json({success: false,message: error.message})
    }

}


 
