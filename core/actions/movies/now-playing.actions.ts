import { movieApi } from '@/core/api/movie-api'
import { MovieDBMoviesResponse } from '@/infrastructure/interfaces/movieDB-response'

export const nowPlayingMovie = async () => {
	try {
		const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing')
		console.log(data.total_pages)
	} catch (error) {
		console.log(error)
		throw 'Error al obtener la película en curso'
	}
}
