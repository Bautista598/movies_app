import {
	View,
	Text,
	ActivityIndicator,
	SafeAreaView,
	ScrollView
} from 'react-native'
import React from 'react'
import { useMovies } from '../../presentation/hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainSlideshow from '@/presentation/components/MainSlideshow'
import MovieHorizontalList from '@/presentation/components/MovieHorizontalList'

const HomeScreen = () => {
	const safeArea = useSafeAreaInsets()
	const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
		useMovies()

	if (nowPlayingQuery.isLoading || nowPlayingQuery.isFetching) {
		return (
			<View className="flex-1 items-center justify-center">
				<ActivityIndicator color={'blue'} size={40} />
			</View>
		)
	}

	return (
		<ScrollView>
			<View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
				<Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
				{/* Carrusel de películas */}
				<MainSlideshow movies={nowPlayingQuery.data ?? []} />

				{/* Pelicular populares */}
				<Text className="text-3xl font-bold px-4 mt-4 mb-4">
					Películas populares
				</Text>
				<MovieHorizontalList movies={popularQuery.data ?? []} />

				{/* Pelicular más valoradas */}
				<Text className="text-3xl font-bold px-4 mt-4 mb-4">
					Películas más valoradas
				</Text>
				<MovieHorizontalList
					movies={topRatedQuery.data?.pages.flat() ?? []}
					loadNextPage={topRatedQuery.fetchNextPage}
				/>

				{/* Pelicular próximamente */}
				<Text className="text-3xl font-bold px-4 mt-4 mb-4">
					Películas próximamente
				</Text>
				<MovieHorizontalList movies={upcomingQuery.data ?? []} />
			</View>
		</ScrollView>
	)
}

export default HomeScreen
