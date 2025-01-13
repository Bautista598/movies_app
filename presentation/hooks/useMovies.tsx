import { nowPlayingMovie } from '@/core/actions/movies/now-playing.actions'
import { useQuery } from '@tanstack/react-query'
import { populateParams } from 'expo-router/build/fork/getStateFromPath-forks'

export const useMovies = () => {
	//Queries
	const nowPlayingQuery = useQuery({
		queryKey: ['movies', 'nowPlaying'],
		queryFn: nowPlayingMovie,
		staleTime: 1000 * 60 * 60 * 24
	})

	const popularQuery = useQuery({
		queryKey: ['movies', 'popular'],
		queryFn: popularMovieActions,
		staleTime: 1000 * 60 * 60 * 24
	})

	return { nowPlayingQuery }
}
