import { View, Text } from 'react-native'
import React from 'react'

import '../global.css'
import { nowPlayingMovie } from '@/core/actions/movies/now-playing.actions'

const RootLayout = () => {
	nowPlayingMovie()

	return (
		<View>
			<Text className="text-4xl text-blue-600 font-bold">RootLayout</Text>
		</View>
	)
}

export default RootLayout
