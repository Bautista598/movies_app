import { movieApi } from '@/core/api/movie-api'
import { MovieDBMoviesResponse } from '@/infrastructure/interfaces/movieDB-response'
import { CompleteMovie } from '@/infrastructure/interfaces/movieDB.interface'
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper'

export const getMovieByAction = async (
	id: number | string
): Promise<CompleteMovie> => {
	try {
		const { data } = await movieApi.get<MovieDBMoviesResponse>(`/${id}`)

		console.log(data)

		return MovieMapper.fromCompleteMovie(data)
	} catch (error) {
		console.log(error)
		throw 'Error al obtener la película en curso'
	}
}
