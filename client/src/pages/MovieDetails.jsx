import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BlurCircle from '../components/BlurCircle'
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react'
import timeFormat from '../library/TimeFormat'
import DateSelect from '../components/DateSelect'
import MovieCard from '../components/MovieCard'
import Loading from '../components/Loading'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const MovieDetails = () => {

  const navigate = useNavigate()
  const { id } = useParams()

  const [show, setShow] = useState(null)

  const {
    shows,
    axios,
    getToken,
    user,
    fetchFavoriteMovies,
    favoriteMovies,
    image_base_url
  } = useAppContext()

  const getShow = async () => {
    try {
      const { data } = await axios.get(`/api/show/${id}`)

      if (data.success) {
        setShow(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleFavorite = async () => {
    try {

      if (!user) {
        return toast.error("Please sign in to add favorites")
      }

      const { data } = await axios.post(
        '/api/user/update-favorite',
        { movieId: id },
        {
          headers: {
            Authorization: `Bearer ${await getToken()}`
          }
        }
      )

      if (data.success) {
        await fetchFavoriteMovies()
        toast.success(data.message)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getShow()
  }, [id])
  // console.log(show.movie.casts)

  return show ? (
    <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>

      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>

        <img
          src={image_base_url + show.movie.poster_path}
          alt=""
          className='max-md:mx-auto rounded-  xl h-104 max-w-70 object-cover'
        />

        <div className='relative flex flex-col gap-3'>

          <BlurCircle top="-100px" left="-100px" />

          <p className='text-primary uppercase'>
            {show.movie.original_language}
          </p>

          <h1 className='text-4xl font-semibold max-w-96 text-balance'>
            {show.movie.title}
          </h1>

          <div className='flex items-center gap-2 text-gray-300'>
            <StarIcon className='w-5 h-5 text-primary fill-primary' />
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>

          <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>
            {show.movie.overview}
          </p>

          <p>
            {timeFormat(show.movie.runtime)}
            {" • "}
            {show.movie.genres.join(", ")}
            {" • "}
            {show.movie.release_date.split("-")[0]}
          </p>

          <div className='flex items-center flex-wrap gap-4 mt-4'>

            <button className='flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95'>
              <PlayCircleIcon className='w-5 h-5' />
              Watch Trailer
            </button>

            {Object.keys(show.dateTime).length > 0 ? (
              <a
                href="#dateSelect"
                className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer active:scale-95'
              >
                Buy Tickets
              </a>
            ) : (
              <button
                disabled
                className='px-10 py-3 text-sm bg-gray-800 text-gray-500 rounded-md font-medium cursor-not-allowed'
              >
                No Shows Available
              </button>
            )}

            <button
              onClick={handleFavorite}
              className='bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95'
            >
              <Heart
                className={`w-5 h-5 ${
                  favoriteMovies.find(movie => movie._id === id)
                    ? "fill-primary text-primary"
                    : ""
                }`}
              />
            </button>

          </div>

        </div>

      </div>

    {/* Cast */}
<p className='text-lg font-medium mt-20'>
  Cast
</p>

<div className='overflow-x-auto no-scrollbar mt-8 py-10 overflow-y-visible'>
  <div className='flex items-center gap-6 w-max px-4 overflow-visible'>

    {show.movie.casts.slice(0, 15).map((cast, index) => (
      <div
        key={index}
        className='relative flex flex-col items-center text-center transition-all duration-500 hover:scale-125 hover:-translate-y-4 hover:z-50'
      >
        <div className='h-20 w-20 rounded-full overflow-hidden border-2 border-gray-700 shadow-xl'>
          <img
            src={image_base_url + cast.profile_path}
            alt={cast.name}
            className='w-full h-full object-cover transition-all duration-500'
          />
        </div>

        <p className='font-medium text-xs mt-3 whitespace-nowrap'>
          {cast.name}
        </p>
      </div>
    ))}

  </div>
</div>
      {/* Date Selection */}
      {Object.keys(show.dateTime).length > 0 ? (
        <DateSelect dateTime={show.dateTime} id={id} />
      ) : (
        <div className="bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-lg p-8 mt-12 text-center max-w-xl mx-auto">
          <p className="text-lg font-semibold text-primary">All shows for this movie have expired</p>
          <p className="text-gray-400 text-sm mt-2">No active show timings are currently available for this movie.</p>
        </div>
      )}

      {/* Recommendations */}
      <p className='text-lg font-medium mt-20 mb-8'>
        You May Also Like
      </p>

      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {shows.slice(0, 4).map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      <div className='flex justify-center mt-20'>
        <button
          onClick={() => {
            navigate('/movies')
            scrollTo(0, 0)
          }}
          className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'
        >
          Show More
        </button>
      </div>

    </div>
  ) : (
    <Loading />
  )
}

export default MovieDetails