import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const MoviesApp = () => {
	return (
		<View>
			<Redirect href={'/home'} />
		</View>
	)
}

export default MoviesApp
