import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native'
import React from 'react'
import { useMovies } from '../../presentation/hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainSlideshow from '@/presentation/components/MainSlideshow'

const HomeScreen = () => {
	const safeArea = useSafeAreaInsets()
	const { nowPlayingQuery } = useMovies()

	if (nowPlayingQuery.isLoading || nowPlayingQuery.isFetching) {
		return (
			<View className="flex-1 items-center justify-center">
				<ActivityIndicator color={'blue'} size={40} />
			</View>
		)
	}

	return (
		<View className="mt-2" style={{ paddingTop: safeArea.top }}>
			<Text className="text-3xl font-bold px-4 mb-2">HomeScreen</Text>
			{/* Carrusel de películas */}
			<MainSlideshow movies={nowPlayingQuery.data ?? []} />
		</View>
	)
}

export default HomeScreen
