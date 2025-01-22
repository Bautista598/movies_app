import { View, Image, Text, useWindowDimensions, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

interface Props {
	originalTitle: string
	title: string
	poster: string
}

const MoviesHeader = ({ originalTitle, title, poster }: Props) => {
	const { height: screenHeight } = useWindowDimensions()

	return (
		<>
			<LinearGradient
				colors={['rgba(0,0,0,0.3)', 'transparent']}
				start={[0, 0.5]}
				style={{
					height: screenHeight * 0.4,
					position: 'absolute',
					zIndex: 1,
					width: '100%'
				}}
			/>

			<View className="absolute top-35 left-[15] top-[15] z-[99] elevation-lg">
				<Pressable onPress={() => router.dismiss()}>
					<Ionicons
						name="arrow-back"
						size={30}
						color="white"
						className="shadow"
					/>
				</Pressable>
			</View>

			<View
				style={{ height: screenHeight * 0.7 }}
				className="shadow-xl shadow-black/20"
			>
				<View className="flex-1 rounded-b-[25px] overflow-hidden">
					<Image
						source={{ uri: `${poster}` }}
						className="flex-1"
						alt={`${originalTitle}`}
						resizeMode="cover"
					/>
				</View>
			</View>

			<View className="px-5 mt-5">
				<Text className="font-normal">{originalTitle}</Text>
				<Text className="font-semibold text-2xl">{title}</Text>
			</View>
		</>
	)
}

export default MoviesHeader
