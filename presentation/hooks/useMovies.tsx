import { nowPlayingMovie } from '@/core/actions/movies/now-playing.actions'
import { popularMovieActions } from '@/core/actions/movies/popular.actions'
import { topRatedMovie } from '@/core/actions/movies/topRatedMovie.actions'
import { upComingMovies } from '@/core/actions/movies/upComingMovies.actions'

import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

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

	const topRatedQuery = useInfiniteQuery({
		initialPageParam: 1,
		queryKey: ['movies', 'topRated'],
		queryFn: ({ pageParam }) => {
			return topRatedMovie({ page: pageParam })
		},
		staleTime: 1000 * 60 * 60 * 24,
		getNextPageParam: (lastPage, pages) => pages.length + 1
	})
	const upcomingQuery = useQuery({
		queryKey: ['movies', 'upcoming'],
		queryFn: upComingMovies,
		staleTime: 1000 * 60 * 60 * 24
	})

	return { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery }
}
