import { movieApi } from '@/core/api/movie-api'
import { MovieDBMoviesResponse } from '@/infrastructure/interfaces/movieDB-response'
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper'

export const topRatedMovie = async () => {
	try {
		const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated')

		const movie = data.results.map(MovieMapper.fromTheMovieDB)

		// console.log(JSON.stringify(movie, null, 2))

		return movie
	} catch (error) {
		console.log(error)
		throw 'Error al obtener la película en curso'
	}
}
