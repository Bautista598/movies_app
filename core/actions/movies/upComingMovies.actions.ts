import { movieApi } from '@/core/api/movie-api'
import { MovieDBMoviesResponse } from '@/infrastructure/interfaces/movieDB-response'
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper'

export const upComingMovies = async () => {
	try {
		const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming')

		const movie = data.results.map(MovieMapper.fromTheMovieDB)

		// console.log(JSON.stringify(movie, null, 2))

		return movie
	} catch (error) {
		console.log(error)
		throw 'Error al obtener la película en curso'
	}
}
