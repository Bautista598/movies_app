import { movieApi } from '@/core/api/movie-api'
import { MovieDBMoviesResponse } from '@/infrastructure/interfaces/movieDB-response'
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper'

interface Options {
	page?: number
	limit?: number
}

export const topRatedMovie = async ({ page = 1, limit = 10 }: Options) => {
	try {
		const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated', {
			params: {
				page: page
			}
		})

		const movie = data.results.map(MovieMapper.fromTheMovieDB)

		// console.log(JSON.stringify(movie, null, 2))

		return movie
	} catch (error) {
		console.log(error)
		throw 'Error al obtener la película en curso'
	}
}
