import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native'
import React from 'react'
import { useMovies } from '../../presentation/hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainSlideshow from '@/presentation/components/MainSlideshow'
import MovieHorizontalList from '@/presentation/components/MovieHorizontalList'

const HomeScreen = () => {
	const safeArea = useSafeAreaInsets()
	const { nowPlayingQuery, popularQuery } = useMovies()

	if (nowPlayingQuery.isLoading || nowPlayingQuery.isFetching) {
		return (
			<View className="flex-1 items-center justify-center">
				<ActivityIndicator color={'blue'} size={40} />
			</View>
		)
	}

	return (
		<View className="mt-2" style={{ paddingTop: safeArea.top }}>
			<Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
			{/* Carrusel de películas */}
			<MainSlideshow movies={nowPlayingQuery.data ?? []} />

			{/* Pelicular populares */}
			<Text className="text-3xl font-bold px-4 mt-2">Películas populares</Text>
			<MovieHorizontalList movies={popularQuery.data ?? []} />
		</View>
	)
}

export default HomeScreen
